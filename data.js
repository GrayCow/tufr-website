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
     leadership: { name, class, role, subteam }   members: { name, class, subteam } */
  alumni: [
    {
      season: "2025–26", note: "Car 2",
      leadership: [
        { name: "Kaelin Leishman", class: "'26", role: "President", subteam: "Suspension" },
        { name: "Karenna Edwards", class: "'26", role: "VP of Business Development", subteam: "Business" },
        { name: "Clayton Yeoman", class: "'27", role: "VP of Engineering", subteam: "Chassis Development" },
      ],
      members: [
        { name: "Tristan Downing", class: "'28", subteam: "Ergonomics, Lead" },
        { name: "Daniel Pinzon", class: "'26", subteam: "Powertrain" },
        { name: "Reid Stubbert", class: "'28", subteam: "Ergonomics" },
        { name: "Ruby Ramirez", class: "'29", subteam: "Engineering" },
        { name: "Ana Arabuli", class: "'29", subteam: "Engineering" },
        { name: "Charles Peterson", class: "'29", subteam: "Engineering" },
        { name: "Joseph Emmett", class: "'29", subteam: "Engineering" },
        { name: "James Rush", class: "'26", subteam: "Engineering, Lead" },
      ],
    },
    {
      season: "2024–25", note: "Car 1 development",
      leadership: [
        { name: "Daniel Chia", class: "'25", role: "President", subteam: "Engineering, Lead" },
        { name: "Kaelin Leishman", class: "'26", role: "VP", subteam: "Suspension" },
        { name: "Karenna Edwards", class: "'26", role: "VP of Business Development", subteam: "Business" },
      ],
      members: [
        { name: "Austin Parcell", class: "'25", subteam: "Powertrain, Lead" },
        { name: "Clayton Yeoman", class: "'27", subteam: "Chassis Development" },
        { name: "Julian Rabago", class: "'27", subteam: "Powertrain, Lead" },
        { name: "Henry Heater", class: "'27", subteam: "Powertrain, Lead" },
        { name: "Brennan Jimenez", class: "'27", subteam: "Suspension" },
        { name: "Reid Stubbert", class: "'28", subteam: "Ergonomics" },
        { name: "Cora Lewis", class: "'25", subteam: "Electrical" },
        { name: "Daniel Pinzon", class: "'26", subteam: "Powertrain" },
        { name: "Tristan Downing", class: "'28", subteam: "Ergonomics, Lead" },
        { name: "Rory Duncanson", class: "'26", subteam: "Electrical" },
      ],
    },
    {
      season: "2023–24", note: "Founding season",
      leadership: [
        { name: "Daniel Chia", class: "'25", role: "President", subteam: "Engineering" },
        { name: "Kaelin Leishman", class: "'26", role: "VP", subteam: "Suspension" },
        { name: "Karenna Edwards", class: "'26", role: "VP of Business, Founder", subteam: "Business" },
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
    { name: "Maroon", amount: "$500+", perks: ["Social media announcement", "Logo on website", "Announcement in newsletter", "Name on posters", "Name on t-shirts"] },
    { name: "Tiger", amount: "$1,000+", perks: ["Maroon benefits", "Name on car"] },
    { name: "Tower", amount: "$5,000+", perks: ["Tiger benefits", "Logo on car", "Dedication at monthly engineering meetings"] },
    { name: "Leeroy", amount: "$10,000+", top: true, perks: ["Tower benefits", "Team member data", "Invitation to car showing"] },
  ],

  // Leave logo "" to show the name as text until a file is added to /photos.
  currentSponsors: [
    { name: "Principle Automotive", logo: "photos/sponsor-principle.png", url: "https://www.principleautomotive.com" },
    { name: "Ancira Auto Group", logo: "photos/sponsor-ancira.png", url: "https://www.ancira.com" },
    { name: "Northside Automotive", logo: "photos/sponsor-northside.png", url: "#" },
    { name: "Gene Haas Foundation", logo: "photos/sponsor-gene-haas.png", url: "https://haasfoundation.org" },
    { name: "Econtrols", logo: "photos/sponsor-econtrols.png", url: "https://www.econtrols.com" },
    { name: "SGA Trinity University", logo: "photos/sponsor-sga.png", url: "https://www.trinity.edu" },
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
function renderNews(id, limit){
  const c=document.getElementById(id); if(!c) return;
  const items = limit ? TUFR.news.slice(0,limit) : TUFR.news;
  c.innerHTML = items.map(n=>`
    <a class="card" href="#"><span class="eyebrow" style="color:var(--red)">${n.date}</span><span class="tag">${n.type}</span>
      <h3>${n.title}</h3><p>${n.body}</p></a>`).join("");
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
    const inner = s.logo ? `<img src="${s.logo}" alt="${s.name}" style="max-height:80px">` : `<b>${s.name}</b>`;
    return `<a href="${s.url}" class="card" style="text-align:center;display:flex;align-items:center;justify-content:center">${inner}</a>`;
  }).join("");
  const thanks = TUFR.individualDonors ? `<p class="muted" style="flex:0 0 100%;text-align:center;margin-top:.6rem">With special thanks to ${TUFR.individualDonors}.</p>` : "";
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
