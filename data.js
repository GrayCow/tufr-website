/* ============================================================
   TUFR SITE DATA: edit this ONE file each season.
   Photos: put images in /photos and set "photo" to
   "photos/filename.jpg". Leave "" for a placeholder box.
   ============================================================ */

const TUFR = {
  season: "2026–27",
  applyUrl: "https://forms.gle/oPT2x9uxfmZrcNns7",
  email: "tufr@trinity.edu",
  instagram: "https://www.instagram.com/tu.formula.racing/",
  tiktok: "https://www.tiktok.com/@tu.formula.racing",

  // About page gallery: { src: "photos/gallery/name.jpg", caption: "Optional caption" }. Empty shows placeholders.
  galleryPhotos: [],

  // News comes from a published Google Sheet (CSV link). Leave "" to use the posts in news[] below.
  // See README.md, "Posting news".
  newsSheetUrl: "",
  address: "One Trinity Pl, San Antonio, TX 78212",

  /* ---------- CURRENT TEAM ---------- */
  leadership: [
    { name: "Clayton Yeoman", role: "President", major: "Chassis Development", photo: "" },
    { name: "Addison Doss", role: "VP of Business Development", major: "Business", photo: "" },
  ],

  // Add current members here: { name: "First Last", subteam: "Powertrain", year: "'28" }
  members: [],

  /* ---------- ALUMNI / PAST SEASONS ----------
     Add a new block each year (newest first).
     leadership: { name, class, role }   members: { name, class, subteam }
     Only give a member a subteam if they were its lead, e.g. "Powertrain, Lead". */
  alumni: [
    {
      season: "2025–26", note: "Car 2",
      leadership: [
        { name: "Kaelin Leishman", class: "'26", role: "President" },
        { name: "Karenna Edwards", class: "'26", role: "VP of Business Development" },
        { name: "Clayton Yeoman", class: "'27", role: "VP of Engineering" },
      ],
      members: [
        { name: "Tristan Downing", class: "'28", subteam: "Ergonomics, Lead" },
        { name: "Daniel Pinzon", class: "'26" },
        { name: "Reid Stubbert", class: "'28" },
        { name: "Ruby Ramirez", class: "'29" },
        { name: "Ana Arabuli", class: "'29" },
        { name: "Charles Peterson", class: "'29" },
        { name: "Joseph Emmett", class: "'29" },
        { name: "James Rush", class: "'26", subteam: "Engineering, Lead" },
      ],
    },
    {
      season: "2024–25", note: "Car 1 development",
      leadership: [
        { name: "Daniel Chia", class: "'25", role: "President" },
        { name: "Kaelin Leishman", class: "'26", role: "VP of Engineering" },
        { name: "Karenna Edwards", class: "'26", role: "VP of Business Development" },
      ],
      members: [
        { name: "Austin Parcell", class: "'25", subteam: "Powertrain, Lead" },
        { name: "Clayton Yeoman", class: "'27" },
        { name: "Julian Rabago", class: "'27" },
        { name: "Henry Heater", class: "'27" },
        { name: "Brennan Jimenez", class: "'27", subteam: "Suspension, Lead" },
        { name: "Reid Stubbert", class: "'28" },
        { name: "Cora Lewis", class: "'25" },
        { name: "Daniel Pinzon", class: "'26", subteam: "Powertrain, Lead" },
        { name: "Tristan Downing", class: "'28", subteam: "Ergonomics, Lead" },
        { name: "Rory Duncanson", class: "'26" },
      ],
    },
    {
      season: "2023–24", note: "Founding season",
      leadership: [
        { name: "Daniel Chia", class: "'25", role: "President" },
        { name: "Kaelin Leishman", class: "'26", role: "VP of Engineering" },
        { name: "Karenna Edwards", class: "'26", role: "VP of Business, Founder" },
      ],
      members: [],
    },
  ],

  /* ---------- NEWS (monthly/quarterly) ---------- */
  news: [
    { date: "Sep 14, 2024", type: "Monthly", title: "Weekly Update",
      body: "Thank you to everyone who met with us this week for our review of the engine we bought last week. We also discussed goals for each sub-team going into the fall." },
    { date: "Sep 8, 2024", type: "Announcement", title: "First Meeting of the 24–25 Season",
      body: "Thanks to the new and returning members who came out to meet the TUFR team. We're excited to get the ball rolling for the season." },
  ],

  /* ---------- SPONSORS (from the sponsorship packet) ---------- */
  sponsorTiers: [
    { name: "Maroon", amount: "$500+", perks: ["Social media announcement", "Name on website", "Name on posters", "Team photo with the car"] },
    { name: "Tiger", amount: "$1,000+", perks: ["Maroon benefits", "Name on t-shirts", "Name on car", "Logo on website", "Shop tour and meet the team"] },
    { name: "Tower", amount: "$5,000+", perks: ["Tiger benefits", "Logo on car", "Dedication at monthly engineering meetings", "Sponsor spotlight post on social and News", "Season impact report"] },
    { name: "Leeroy", amount: "$10,000+", top: true, perks: ["Tower benefits", "Prime logo placement on car", "\"Presented by\" naming of a subsystem", "Recruiting access"] },
  ],

  // Leave logo "" to show the name as text until a file is added to /photos.
  currentSponsors: [
    { name: "Principle Automotive", logo: "photos/sponsor-principle.png", url: "https://www.principleautomotive.com" },
    { name: "Ancira Auto Group", logo: "photos/sponsor-ancira.png", url: "https://www.ancira.com" },
    { name: "Northside Automotive", logo: "photos/sponsor-northside.png", url: "https://www.thenorthsideautogroup.com/" },
    { name: "Gene Haas Foundation", logo: "photos/sponsor-gene-haas.png", url: "https://www.ghaasfoundation.org/" },
    { name: "Econtrols", logo: "photos/sponsor-econtrols.png", url: "https://www.econtrols.com" },
    { name: "SGA Trinity University", logo: "photos/sponsor-sga.png", url: "https://trinity.edu/sga" },
    { name: "Peddle", logo: "photos/sponsor-peddle.png", url: "https://www.peddle.com" },
  ],

  individualDonors: "Barbara Pritzlaff '78 and the Yeoman Family",
};

/* ============================================================
   RENDER HELPERS: no need to edit below this line
   ============================================================ */
function photoOrPh(src, alt){
  return src ? `<img src="${src}" alt="${alt}" style="aspect-ratio:1;object-fit:cover;width:100%">`
             : `<div class="ph sq">photo: ${alt}</div>`;
}
const byName = list => [...list].sort((a,b)=>a.name.localeCompare(b.name));
function renderLeadership(id){
  const c=document.getElementById(id); if(!c) return;
  c.innerHTML = TUFR.leadership.map(m=>`
    <div class="member">${photoOrPh(m.photo,m.name)}
      <div class="info"><h3>${m.name}</h3><div class="role">${m.role}</div><div class="meta">${m.major}</div></div>
    </div>`).join("");
}
function renderMembers(id){
  const c=document.getElementById(id); if(!c) return;
  c.innerHTML = TUFR.members.length
    ? byName(TUFR.members).map(m=>`<li><b>${m.name}</b><span>${m.subteam} · ${m.year}</span></li>`).join("")
    : `<li><span style="margin-left:0">${TUFR.season} roster coming soon.</span></li>`;
}
function renderAlumni(id){
  const c=document.getElementById(id); if(!c) return;
  const tag = p => [p.role, p.subteam].filter(Boolean).join(" · ");
  const chip = (p,cls) => `<li class="${cls||""}"><b>${p.name}</b>${p.class?` <em>${p.class}</em>`:""}${tag(p)?`<span>${tag(p)}</span>`:""}</li>`;
  c.innerHTML = TUFR.alumni.map(a=>`
    <div class="alumni-season">
      <div class="yr">${a.season}<small>${a.note||""}</small></div>
      <div>
        <h4 class="alumni-label">Leadership</h4>
        <ul class="alumni-names">${a.leadership.map(p=>chip(p,"lead")).join("")}</ul>
        ${a.members.length ? `<h4 class="alumni-label">Members</h4><ul class="alumni-names">${byName(a.members).map(p=>chip(p)).join("")}</ul>` : ""}
      </div>
    </div>`).join("");
}
function escapeHtml(v){
  return String(v==null?"":v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function parseCsv(text){
  const rows=[]; let row=[], cell="", q=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(q){
      if(ch==='"'){ if(text[i+1]==='"'){ cell+='"'; i++; } else q=false; }
      else cell+=ch;
    } else if(ch==='"') q=true;
    else if(ch===","){ row.push(cell); cell=""; }
    else if(ch==="\n"||ch==="\r"){
      if(ch==="\r"&&text[i+1]==="\n") i++;
      row.push(cell); cell=""; rows.push(row); row=[];
    } else cell+=ch;
  }
  if(cell!==""||row.length){ row.push(cell); rows.push(row); }
  return rows;
}
function parseDate(v){
  const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(v).trim());
  const d=m?new Date(+m[1],+m[2]-1,+m[3]):new Date(v);
  return isNaN(d)?null:d;
}
function sheetToNews(text){
  const rows=parseCsv(text); if(!rows.length) return [];
  const head=rows[0].map(h=>h.trim().toLowerCase());
  const col=n=>head.indexOf(n);
  const items=rows.slice(1).map(r=>({
    date:(r[col("date")]||"").trim(), type:(r[col("type")]||"").trim(),
    title:(r[col("title")]||"").trim(), body:(r[col("message")]||r[col("body")]||"").trim(),
  })).filter(n=>n.title||n.body);
  return items.map((n,i)=>({n,i,d:parseDate(n.date)}))
    .sort((a,b)=>(b.d&&a.d)?b.d-a.d:(a.d?-1:b.d?1:a.i-b.i)).map(x=>x.n);
}
// All news fetching lives here. To move news to another source (e.g. Buttondown), replace this function.
function loadNews(){
  if(!TUFR.newsSheetUrl) return Promise.resolve(TUFR.news);
  return fetch(TUFR.newsSheetUrl,{cache:"no-store"})
    .then(r=>{ if(!r.ok) throw new Error("HTTP "+r.status); return r.text(); })
    .then(t=>{ const n=sheetToNews(t); return n.length?n:TUFR.news; })
    .catch(()=>TUFR.news);
}
function formatNewsDate(v){
  const d=parseDate(v);
  return d?d.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):v;
}
function renderNews(id, limit){
  const c=document.getElementById(id); if(!c) return;
  loadNews().then(list=>{
    const items = limit ? list.slice(0,limit) : list;
    c.innerHTML = items.length ? items.map(n=>`
      <div class="card"><span class="eyebrow" style="color:var(--red)">${escapeHtml(formatNewsDate(n.date))}</span>${n.type?`<span class="tag">${escapeHtml(n.type)}</span>`:""}
        <h3>${escapeHtml(n.title)}</h3><p style="white-space:pre-line">${escapeHtml(n.body)}</p></div>`).join("")
      : `<p class="muted">No updates yet. Check back soon.</p>`;
  });
}
function renderGallery(id){
  const c=document.getElementById(id); if(!c) return;
  const photos = TUFR.galleryPhotos;
  c.innerHTML = photos.length
    ? photos.map(p=>`<figure class="gallery-tile"><img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.caption||"TUFR team photo")}" loading="lazy">${p.caption?`<figcaption>${escapeHtml(p.caption)}</figcaption>`:""}</figure>`).join("")
    : Array.from({length:6},()=>`<figure class="gallery-tile"><div class="ph">photo coming soon</div></figure>`).join("");
  const step = dir => { const t=c.querySelector(".gallery-tile"); if(!t) return;
    c.scrollBy({left:dir*(t.getBoundingClientRect().width+16), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"}); };
  document.querySelectorAll(".gallery-btn").forEach(b=>b.addEventListener("click",()=>step(+b.dataset.dir)));
  c.addEventListener("keydown",e=>{ if(e.key==="ArrowRight") step(1); if(e.key==="ArrowLeft") step(-1); });
}
function renderTiers(id){
  const c=document.getElementById(id); if(!c) return;
  c.innerHTML = TUFR.sponsorTiers.map(t=>`
    <div class="tier ${t.top?'top':''}"><h3>${t.name}</h3><div class="amt">${t.amount}</div>
      <ul>${t.perks.map(p=>`<li>${p}</li>`).join("")}</ul></div>`).join("");
}
function renderSponsors(id){
  const c=document.getElementById(id); if(!c) return;
  const cards = TUFR.currentSponsors.map(s=>{
    const inner = s.logo ? `<img src="${s.logo}" alt="${s.name}">` : `<b>${s.name}</b>`;
    return `<a href="${s.url}" class="card" style="text-align:center;display:flex;align-items:center;justify-content:center">${inner}</a>`;
  }).join("");
  const thanks = TUFR.individualDonors ? `<p class="partner-thanks">With special thanks to ${TUFR.individualDonors}.</p>` : "";
  c.innerHTML = cards + thanks;
}
function wireCommon(){
  document.querySelectorAll("[data-apply]").forEach(a=>a.href=TUFR.applyUrl);
  document.querySelectorAll("[data-email]").forEach(a=>a.href="mailto:"+TUFR.email);
  document.querySelectorAll("[data-email-text]").forEach(e=>e.textContent=TUFR.email);
  document.querySelectorAll("[data-season]").forEach(e=>e.textContent=TUFR.season);
  document.querySelectorAll("[data-ig]").forEach(a=>a.href=TUFR.instagram);
  document.querySelectorAll("[data-tiktok]").forEach(a=>a.href=TUFR.tiktok);
  document.querySelectorAll("[data-address]").forEach(e=>e.textContent=TUFR.address);
  document.querySelectorAll("form.mail").forEach(f=>f.addEventListener("submit",e=>{
    e.preventDefault(); f.innerHTML='<span class="muted">Subscribed ✓ Updates land monthly/quarterly.</span>';
  }));
}
document.addEventListener("DOMContentLoaded", wireCommon);
