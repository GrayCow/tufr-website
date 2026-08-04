/* ============================================================
   TUFR SITE DATA — edit this ONE file each season.
   Photos: put images in /photos and set "photo" to
   "photos/filename.jpg". Leave "" for a placeholder box.
   ============================================================ */

const TUFR = {
  season: "2025–26",
  applyUrl: "https://forms.gle/oPT2x9uxfmZrcNns7",
  email: "tufr@trinity.edu",
  instagram: "https://www.instagram.com/tu.formula.racing/",
  address: "One Trinity Pl, San Antonio, TX 78212",

  stats: [
    { label: "Founded", value: "2023" },
    { label: "Members", value: "30+" },
    { label: "Current Build", value: "Car 2" },
    { label: "Majors Welcome", value: "All" },
  ],

  subteams: [
    "Chassis & Suspension", "Powertrain", "Aerodynamics",
    "Electronics & Data", "Business Operations",
  ],

  /* ---------- CURRENT TEAM ---------- */
  leadership: [
    { name: "First Last", role: "Team Captain", major: "Engineering Science '26", photo: "" },
    { name: "First Last", role: "Chief Engineer", major: "Engineering Science '26", photo: "" },
    { name: "First Last", role: "Business Lead", major: "Business '27", photo: "" },
    { name: "First Last", role: "Powertrain Lead", major: "Engineering Science '27", photo: "" },
    { name: "First Last", role: "Chassis Lead", major: "Engineering Science '27", photo: "" },
    { name: "First Last", role: "Electronics Lead", major: "Computer Science '28", photo: "" },
  ],

  members: [
    { name: "First Last", subteam: "Chassis & Suspension", year: "'27" },
    { name: "First Last", subteam: "Powertrain", year: "'28" },
    { name: "First Last", subteam: "Aerodynamics", year: "'28" },
    { name: "First Last", subteam: "Electronics & Data", year: "'29" },
    { name: "First Last", subteam: "Business Operations", year: "'29" },
    { name: "First Last", subteam: "Powertrain", year: "'27" },
  ],

  /* ---------- ALUMNI / PAST SEASONS ----------
     Add a new block each year. captain:true adds a ★. */
  alumni: [
    {
      season: "2024–25", note: "CAR 1 development season",
      names: [
        { name: "First Last", captain: true },
        { name: "First Last" }, { name: "First Last" }, { name: "First Last" },
      ],
    },
    {
      season: "2023–24", note: "Founding season",
      names: [
        { name: "First Last", captain: true },
        { name: "First Last" }, { name: "First Last" },
      ],
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
    { name: "Maroon", amount: "$250+", perks: ["Social media announcement", "Logo on website", "Announcement in newsletter"] },
    { name: "Gold", amount: "$500+", perks: ["Maroon benefits", "Name on posters", "Name on t-shirts"] },
    { name: "Tiger", amount: "$1,000+", perks: ["Gold benefits", "Name on car"] },
    { name: "Tower", amount: "$5,000+", perks: ["Tiger benefits", "Logo on car", "Dedication at monthly engineering meetings"] },
    { name: "Leeroy", amount: "$10,000+", top: true, perks: ["Tower benefits", "Team member data", "Invitation to car showing"] },
  ],

  currentSponsors: [
    // { name: "Sponsor Name", logo: "photos/sponsor.png", url: "https://..." },
  ],
};

/* ============================================================
   RENDER HELPERS — no need to edit below this line
   ============================================================ */
function photoOrPh(src, alt){
  return src ? `<img src="${src}" alt="${alt}" style="aspect-ratio:1;object-fit:cover;width:100%">`
             : `<div class="ph sq">photo — ${alt}</div>`;
}
function renderStats(id){
  const c=document.getElementById(id); if(!c) return;
  c.innerHTML = TUFR.stats.map(s=>`<div><b>${s.value}</b><span>${s.label}</span></div>`).join("");
}
function renderSubteamChips(id){
  const c=document.getElementById(id); if(!c) return;
  c.innerHTML = TUFR.subteams.map(s=>{
    const parts=s.split(" ");
    return `<span class="chip"><b>${parts[0]}</b> ${parts.slice(1).join(" ")}</span>`;
  }).join("");
}
function renderLeadership(id){
  const c=document.getElementById(id); if(!c) return;
  c.innerHTML = TUFR.leadership.map(m=>`
    <div class="member">${photoOrPh(m.photo,m.name)}
      <div class="info"><h3>${m.name}</h3><div class="role">${m.role}</div><div class="meta">${m.major}</div></div>
    </div>`).join("");
}
function renderMembers(id){
  const c=document.getElementById(id); if(!c) return;
  c.innerHTML = TUFR.members.map(m=>`
    <li><b>${m.name}</b><span>${m.subteam} · ${m.year}</span></li>`).join("");
}
function renderAlumni(id){
  const c=document.getElementById(id); if(!c) return;
  c.innerHTML = TUFR.alumni.map(a=>`
    <div class="alumni-season">
      <div class="yr">${a.season}<small>${a.note||""}</small></div>
      <ul class="alumni-names">${a.names.map(n=>`<li class="${n.captain?'captain':''}">${n.name}</li>`).join("")}</ul>
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
  c.innerHTML = TUFR.currentSponsors.length
    ? TUFR.currentSponsors.map(s=>`<a href="${s.url}" class="card" style="text-align:center;display:flex;align-items:center;justify-content:center"><img src="${s.logo}" alt="${s.name}" style="max-height:56px"></a>`).join("")
    : `<p class="muted">Your logo here — become our first partner of the ${TUFR.season} season.</p>`;
}
function wireCommon(){
  document.querySelectorAll("[data-apply]").forEach(a=>a.href=TUFR.applyUrl);
  document.querySelectorAll("[data-email]").forEach(a=>a.href="mailto:"+TUFR.email);
  document.querySelectorAll("[data-email-text]").forEach(e=>e.textContent=TUFR.email);
  document.querySelectorAll("[data-season]").forEach(e=>e.textContent=TUFR.season);
  document.querySelectorAll("[data-ig]").forEach(a=>a.href=TUFR.instagram);
  document.querySelectorAll("[data-address]").forEach(e=>e.textContent=TUFR.address);
  document.querySelectorAll("form.mail").forEach(f=>f.addEventListener("submit",e=>{
    e.preventDefault(); f.innerHTML='<span class="muted">Subscribed ✓ — updates land monthly/quarterly.</span>';
  }));
}
document.addEventListener("DOMContentLoaded", wireCommon);
