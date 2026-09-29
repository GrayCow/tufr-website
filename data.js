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

  // Pitwall newsletter (Buttondown). Signup posts straight to Buttondown, which sends the confirmation email.
  newsletterUrl: "https://buttondown.com/api/emails/embed-subscribe/TUFR",

  // About page gallery: { src: "photos/gallery/name.jpg", caption: "Optional caption" }. Empty shows placeholders.
  galleryPhotos: [
    { src: "photos/team-2026.jpg", caption: "The 2025–26 team" },
    { src: "photos/team-2025.jpg", caption: "The 2024–25 team" },
    { src: "photos/gallery/gallery-01.jpg" },
    { src: "photos/gallery/gallery-02.jpg" },
    { src: "photos/gallery/gallery-03.jpg" },
    { src: "photos/gallery/gallery-04.jpg" },
    { src: "photos/gallery/gallery-05.jpg" },
    { src: "photos/gallery/gallery-06.jpg" },
    { src: "photos/gallery/gallery-07.jpg" },
    { src: "photos/gallery/gallery-08.jpg" },
    { src: "photos/gallery/gallery-09.jpg" },
    { src: "photos/gallery/gallery-10.jpg" },
    { src: "photos/gallery/gallery-11.jpg" },
    { src: "photos/gallery/gallery-12.jpg" },
    { src: "photos/gallery/gallery-13.jpg" },
  ],

  // News comes from the Pitwall newsletter on Buttondown (read by /api/news). Link used for "See all updates".
  newsArchiveUrl: "https://buttondown.com/TUFR/archive",
  address: "One Trinity Pl, San Antonio, TX 78212",

  /* ---------- CURRENT TEAM ---------- */
  leadership: [
    { name: "Clayton Yeoman", role: "President", major: "Chassis Development", photo: "photos/clayton-yeoman.jpg" },
    { name: "Addison Doss", role: "VP of Business Development", major: "Business", photo: "" },
  ],

  // Current members: { name: "First Last", year: "'28" }. Add subteam: "Powertrain" to show a label.
  members: [
    { name: "Tristan Downing", year: "'28" },
    { name: "Reid Stubbert", year: "'28" },
    { name: "Charles Peterson", year: "'29" },
    { name: "Joseph Emmett", year: "'29" },
    { name: "Ana Arabuli", year: "'29" },
    { name: "Ruby Ramirez", year: "'29" },
    { name: "Ming Lee", year: "'30" },
    { name: "Jayden Yeoman", year: "'30" },
    { name: "Sam Roman", year: "'30" },
    { name: "Gavin Chan", year: "'30" },
    { name: "Harmon Bennett", year: "'30" },
    { name: "Cullen Woodring", year: "'30" },
    { name: "Boone Partee", year: "'28" },
    { name: "Charles Gu", year: "'28" },
  ],

  /* ---------- ALUMNI / PAST SEASONS ----------
     Add a new block each year (newest first).
     leadership: { name, class, role }   members: { name, class, subteam }
     Only give a member a subteam if they were its lead, e.g. "Powertrain, Lead". */
  alumni: [
    {
      season: "2025–26", note: "Car 2", photo: "photos/team-2026.jpg",
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
      season: "2024–25", note: "Car 1 development", photo: "photos/team-2025.jpg",
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
        { name: "Karenna Edwards", class: "'26", role: "VP of Business" },
      ],
      members: [],
    },
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
             : `<div class="avatar" role="img" aria-label="${alt}">${alt.split(/\s+/).filter(Boolean).map((w,i,a)=>(i===0||i===a.length-1)?w[0]:"").join("").toUpperCase()}</div>`;
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
  if(!TUFR.members.length){ const sec=c.closest("section"); if(sec) sec.remove(); return; } // hide until names are added
  c.innerHTML = byName(TUFR.members).map(m=>`<li><b>${m.name}</b><span>${[m.subteam,m.year].filter(Boolean).join(" · ")}</span></li>`).join("");
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
        ${a.photo ? `<img class="season-photo" src="${escapeHtml(a.photo)}" alt="The ${escapeHtml(a.season)} TUFR team" loading="lazy">` : ""}
      </div>
    </div>`).join("");
}
function escapeHtml(v){
  return String(v==null?"":v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
// All news fetching lives here. Emails sent from Buttondown appear automatically (see api/news.js).
function loadNews(){
  return fetch("/api/news")
    .then(r=>{ if(!r.ok) throw new Error("HTTP "+r.status); return r.json(); })
    .then(list=>Array.isArray(list)?list:[]);
}
function formatNewsDate(v){
  const d=new Date(v);
  return isNaN(d)?"":d.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
}
function renderNews(id, limit){
  const c=document.getElementById(id); if(!c) return;
  const empty=`<p class="muted">No updates yet. Check back soon, or subscribe to Pitwall to get them by email.</p>`;
  loadNews().then(list=>{
    const items = limit ? list.slice(0,limit) : list;
    if(!items.length){ c.innerHTML=empty; return; }
    c.innerHTML = items.map(n=>`
      <article class="card news-card" tabindex="0" aria-expanded="false">
        <span class="eyebrow" style="color:var(--red)">${escapeHtml(formatNewsDate(n.date))}</span>
        <h3>${escapeHtml(n.title)}</h3>
        <div class="news-body"><p>${escapeHtml(n.text)}</p></div>
        ${/^https:\/\//.test(n.link||"")?`<a class="news-more" href="${escapeHtml(n.link)}" target="_blank" rel="noopener">Read the full update &rarr;</a>`:""}
      </article>`).join("");
    c.querySelectorAll(".news-card").forEach(card=>{
      const body=card.querySelector(".news-body");
      if(body.scrollHeight<=body.clientHeight+2){ card.classList.add("short"); card.removeAttribute("tabindex"); card.removeAttribute("aria-expanded"); return; }
      const set=open=>{ card.classList.toggle("open",open); card.setAttribute("aria-expanded",open?"true":"false"); };
      card.addEventListener("mouseenter",()=>set(true));
      card.addEventListener("mouseleave",()=>{ if(document.activeElement!==card) set(false); });
      card.addEventListener("focus",()=>set(true));
      card.addEventListener("blur",()=>set(false));
      card.addEventListener("click",e=>{ if(e.target.closest("a")) return; set(!card.classList.contains("open")); });
      card.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); set(!card.classList.contains("open")); } });
    });
  }).catch(()=>{
    c.innerHTML=`<p class="muted">We couldn't load updates right now. You can read them all on <a class="red" href="${escapeHtml(TUFR.newsArchiveUrl)}" target="_blank" rel="noopener">Buttondown</a>.</p>`;
  });
}
function renderGallery(id){
  const c=document.getElementById(id); if(!c) return;
  const photos = TUFR.galleryPhotos;
  if(!photos.length){
    c.innerHTML=`<div class="viewer"><figure class="slide"><div class="ph" style="height:min(60vh,520px)">photos coming soon</div></figure></div>`;
    return;
  }
  // Thumbnails: photos/x.jpg uses photos/x-thumb.jpg when it exists, otherwise the full photo.
  const thumbOf = src => src.replace(/\.jpg$/i,"-thumb.jpg");
  c.tabIndex=0; c.setAttribute("aria-label","Team photo gallery. Use the left and right arrow keys to change photos.");
  c.innerHTML=`
    <div class="viewer">
      <button type="button" class="gallery-btn prev" aria-label="Previous photo">&larr;</button>
      <figure class="slide"><img alt=""><figcaption></figcaption></figure>
      <button type="button" class="gallery-btn next" aria-label="Next photo">&rarr;</button>
    </div>
    <div class="gallery-count" aria-live="polite"></div>
    <div class="thumbs">${photos.map((p,i)=>`<button type="button" class="thumb" aria-label="Show photo ${i+1}"><img src="${escapeHtml(thumbOf(p.src))}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${escapeHtml(p.src)}'"></button>`).join("")}</div>`;
  const img=c.querySelector(".slide img"), cap=c.querySelector("figcaption"), count=c.querySelector(".gallery-count");
  const strip=c.querySelector(".thumbs"), thumbs=[...c.querySelectorAll(".thumb")];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i=0;
  const show = n => {
    i=(n+photos.length)%photos.length;
    const p=photos[i];
    img.src=p.src; img.alt=p.caption||("TUFR team photo "+(i+1));
    cap.textContent=p.caption||"";
    count.textContent=(i+1)+" / "+photos.length;
    thumbs.forEach((t,k)=>{ t.classList.toggle("active",k===i); t.setAttribute("aria-current",k===i?"true":"false"); });
    const t=thumbs[i]; strip.scrollTo({left:t.offsetLeft-(strip.clientWidth-t.offsetWidth)/2, behavior:reduce?"auto":"smooth"});
    [i+1,i-1].forEach(k=>{ new Image().src=photos[(k+photos.length)%photos.length].src; }); // preload neighbors
  };
  c.querySelector(".prev").addEventListener("click",()=>show(i-1));
  c.querySelector(".next").addEventListener("click",()=>show(i+1));
  img.addEventListener("click",()=>show(i+1));
  thumbs.forEach((t,k)=>t.addEventListener("click",()=>show(k)));
  c.addEventListener("keydown",e=>{ if(e.key==="ArrowRight"){ show(i+1); e.preventDefault(); } if(e.key==="ArrowLeft"){ show(i-1); e.preventDefault(); } });
  let x0=null;
  c.addEventListener("touchstart",e=>{ x0=e.touches[0].clientX; },{passive:true});
  c.addEventListener("touchend",e=>{ if(x0===null) return; const dx=e.changedTouches[0].clientX-x0; x0=null; if(Math.abs(dx)>50) show(i+(dx<0?1:-1)); });
  show(0);
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
  document.querySelectorAll("form.mail").forEach(f=>{
    f.action=TUFR.newsletterUrl; f.method="post"; f.target="_blank";
  });
}
document.addEventListener("DOMContentLoaded", wireCommon);
