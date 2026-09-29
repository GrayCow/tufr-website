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
    const link = field(it, "link").trim();
    const pub = new Date(field(it, "pubDate").trim());
    if (!title && !text) continue;
    items.push({
      title,
      text,
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
