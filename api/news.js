// Vercel serverless function: GET /api/news
// Reads the public Buttondown RSS feed for the TUFR newsletter and returns the sent issues as JSON,
// newest first: [{ title, date, link, text }]. No API key is needed because the feed is public.
// The browser cannot read the feed directly (Buttondown does not allow cross-site requests), so it asks this function.
const FEED = "https://buttondown.com/TUFR/rss";
const MAX_ITEMS = 20;
const MAX_TEXT = 2000;

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
function decode(s) {
  return String(s)
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&([a-z]+);/gi, (m, n) => (n.toLowerCase() in ENTITIES ? ENTITIES[n.toLowerCase()] : m));
}

// Inner text of <tag>...</tag>. If it is wrapped in CDATA the content is already HTML; otherwise it is entity-escaped.
function field(xml, tag) {
  const m = new RegExp("<" + tag + "(?:\\s[^>]*)?>([\\s\\S]*?)</" + tag + ">", "i").exec(xml);
  if (!m) return "";
  const raw = m[1].trim();
  const cdata = /^<!\[CDATA\[([\s\S]*?)\]\]>$/.exec(raw);
  return cdata ? cdata[1] : decode(raw);
}

function toText(html) {
  return decode(
    html
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|h[1-6]|li|blockquote|tr)>/gi, "\n\n")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ---- HTML sanitizer: only a short list of safe tags and attributes survives. Everything else is dropped. ----
const VOID = new Set(["br", "hr", "img"]);
const KEEP = new Set(["p", "br", "hr", "strong", "b", "em", "i", "u", "s", "a", "ul", "ol", "li", "blockquote", "pre", "code", "img", "figure", "figcaption", "h4"]);
const HEADINGS = /^h[1-6]$/;
function escAttr(v) {
  return String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function attrs(str) {
  const out = {};
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(str || ""))) out[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? "");
  return out;
}
function safeUrl(u) {
  const v = String(u || "").trim();
  return /^https:\/\/[^\s<>"']+$/i.test(v) && v.length < 2000 ? v : "";
}
function sanitizeHtml(html) {
  const src = String(html)
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|iframe|object|embed|svg|math|head|title)[\s\S]*?<\/\1\s*>/gi, "");
  const out = [];
  const stack = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s+[^>]*?)?)\s*\/?>/g;
  let last = 0, m;
  const text = (t) => out.push(t.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
  const closeTo = (tag) => {
    const i = stack.lastIndexOf(tag);
    if (i === -1) return;
    while (stack.length > i) out.push("</" + stack.pop() + ">");
  };
  while ((m = re.exec(src))) {
    text(src.slice(last, m.index));
    last = re.lastIndex;
    const closing = m[1] === "/";
    let tag = m[2].toLowerCase();
    if (HEADINGS.test(tag)) tag = "h4";
    if (!KEEP.has(tag)) continue;
    if (closing) { if (!VOID.has(tag)) closeTo(tag); continue; }
    const a = attrs(m[3]);
    if (tag === "a") {
      const href = safeUrl(a.href);
      if (!href) continue;
      const btn = /\bbuttondown-button\b/.test(a.class || "");
      out.push('<a href="' + escAttr(href) + '" target="_blank" rel="noopener noreferrer"' + (btn ? ' class="news-btn"' : "") + ">");
      stack.push("a");
    } else if (tag === "img") {
      const srcUrl = safeUrl(a.src);
      if (!srcUrl) continue;
      out.push('<img src="' + escAttr(srcUrl) + '" alt="' + escAttr((a.alt || "").slice(0, 300)) + '" loading="lazy">');
    } else if (VOID.has(tag)) {
      out.push("<" + tag + ">");
    } else {
      out.push("<" + tag + ">");
      stack.push(tag);
    }
  }
  text(src.slice(last));
  while (stack.length) out.push("</" + stack.pop() + ">");
  return out.join("").replace(/(<p>\s*<\/p>\s*)+/g, "").trim();
}

function parseFeed(xml) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) && items.length < MAX_ITEMS) {
    const it = m[1];
    const title = toText(field(it, "title"));
    const body = field(it, "content:encoded") || field(it, "description");
    let text = toText(body);
    if (text.length > MAX_TEXT) text = text.slice(0, MAX_TEXT).replace(/\s+\S*$/, "") + "…";
    const cleaned = sanitizeHtml(body);
    const link = field(it, "link").trim();
    const pub = new Date(field(it, "pubDate").trim());
    if (!title && !text) continue;
    items.push({
      title,
      text,
      html: cleaned.length <= 40000 ? cleaned : "",
      link: /^https:\/\//i.test(link) ? link : "",
      date: isNaN(pub) ? "" : pub.toISOString(),
    });
  }
  return items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

async function handler(req, res) {
  try {
    const r = await fetch(FEED, { headers: { "User-Agent": "tufr-website" } });
    if (!r.ok) throw new Error("feed " + r.status);
    const items = parseFeed(await r.text());
    // Cache at Vercel's edge for 5 minutes so a new email shows up quickly without hammering Buttondown.
    // An empty result is only cached briefly, in case Buttondown's servers were momentarily behind.
    res.setHeader("Cache-Control", items.length ? "public, s-maxage=300, stale-while-revalidate=3600" : "public, s-maxage=30");
    res.status(200).json(items);
  } catch (e) {
    res.setHeader("Cache-Control", "no-store");
    res.status(502).json({ error: "Could not load updates" });
  }
}

module.exports = handler;
module.exports.parseFeed = parseFeed;
module.exports.sanitizeHtml = sanitizeHtml;
