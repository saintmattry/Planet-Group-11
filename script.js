
const PLANETS = [
  {name:"Mercury",image:"https://anurella.github.io/images/planets/mercury.webp",mass:0.330,diameter:4879,massLabel:"0.330",velocity:"3.7",period:"88",moons:"0",temperature:"440°C",distance:"57.9",gravity:"3.7",subtitle:"The smallest and innermost planet",highlight:"Heavily cratered with extreme temperature variations.",color:"radial-gradient(circle at 35% 35%, #d1d5db, #9ca3af 55%, #6b7280)",group:"Terrestrial Planets",subgroup:""},
  {name:"Venus",image:"https://anurella.github.io/images/planets/venus.webp",mass:4.87,diameter:12104,massLabel:"4.87",velocity:"8.9",period:"225",moons:"0",temperature:"737°C",distance:"108.2",gravity:"8.9",subtitle:"The hottest planet with a thick toxic atmosphere",highlight:"Rotates backwards and has surface pressure 92 times that of Earth.",color:"radial-gradient(circle at 40% 40%, #fde68a, #d9a066 60%, #a16233)",group:"Terrestrial Planets",subgroup:""},
  {name:"Earth",image:"https://anurella.github.io/images/planets/earth.jpg",mass:5.97,diameter:12756,massLabel:"5.97",velocity:"9.8",period:"365",moons:"1",temperature:"288°C",distance:"149.6",gravity:"9.8",subtitle:"The only planet known to support life",highlight:"The only planet to support life with, liquid water on its surface.",color:"radial-gradient(circle at 30% 30%, #93c5fd 0%, #3b82f6 25%, #1d4ed8 45%, #22c55e 60%, #166534 85%)",group:"Terrestrial Planets",subgroup:""},
  {name:"Mars",image:"https://anurella.github.io/images/planets/mars.webp",mass:0.642,diameter:6792,massLabel:"0.642",velocity:"3.7",period:"687",moons:"2",temperature:"208°C",distance:"227.9",gravity:"3.7",subtitle:"The red planet with the tallest volcano",highlight:"Home to Olympus Mons, the largest volcano in the solar system.",color:"radial-gradient(circle at 35% 35%, #fca5a5, #ef4444 40%, #991b1b 75%)",group:"Terrestrial Planets",subgroup:""},
  {name:"Jupiter",image:"https://anurella.github.io/images/planets/jupiter.webp",mass:1898,diameter:142984,massLabel:"1898",velocity:"23.1",period:"4333",moons:"95",temperature:"163°C",distance:"778.6",gravity:"24.79",subtitle:"The gas giant with the Great Red Spot",highlight:"More than twice as massive as all other planets combined.",color:"repeating-linear-gradient(90deg, #fde68a 0px, #fdba74 12px, #fb923c 20px, #fde68a 32px)",group:"Jovian Planets",subgroup:"Gas Giants",ring:false},
  {name:"Saturn",image:"https://anurella.github.io/images/planets/saturn.webp",mass:568,diameter:120536,massLabel:"568",velocity:"9.0",period:"10759",moons:"146",temperature:"133°C",distance:"1,433.5",gravity:"10.44",subtitle:"Famous for its magnificent ring system",highlight:"Its rings are made mostly of ice particles and rocky debris.",color:"radial-gradient(circle at 40% 35%, #fef3c7, #fcd34d 45%, #d6a85c 75%)",group:"Jovian Planets",subgroup:"Gas Giants",ring:true},
  {name:"Uranus",image:"https://anurella.github.io/images/planets/uranus.webp",mass:86.8,diameter:51118,massLabel:"86.8",velocity:"8.7",period:"30687",moons:"28",temperature:"78°C",distance:"2,872.5",gravity:"8.7",subtitle:"The sideways ice giant",highlight:"Rotates on its side and has a pale blue-green color from methane.",color:"radial-gradient(circle at 35% 35%, #a5f3fc, #67e8f9 50%, #22d3ee 80%)",group:"Jovian Planets",subgroup:"Ice Giants",ring:false},
  {name:"Neptune",image:"https://anurella.github.io/images/planets/neptune.webp",mass:102,diameter:49528,massLabel:"102",velocity:"11.0",period:"60190",moons:"16",temperature:"73°C",distance:"4,495.1",gravity:"11.0",subtitle:"The windiest planet with supersonic storms",highlight:"Winds can reach up to 2,100 km/h in its deep blue atmosphere.",color:"radial-gradient(circle at 35% 35%, #93c5fd, #3b82f6 50%, #1e40af 85%)",group:"Jovian Planets",subgroup:"Ice Giants",ring:false},
  {name:"Pluto",image:"https://anurella.github.io/images/planets/pluto.webp",mass:0.0146,diameter:2370,massLabel:"0.0146",velocity:"0.7",period:"90560",moons:"5",temperature:"48°C",distance:"5,906.4",gravity:"0.7",subtitle:"The most famous dwarf planet",highlight:"Has a heart-shaped glacier and five known moons including Charon.",color:"radial-gradient(circle at 40% 40%, #e5e7eb, #cbd5e1 55%, #94a3b8)",group:"Dwarf Planets",subgroup:""}
];

let filter = "";
let featured = PLANETS[2];

function getEl(id){ return document.getElementById(id); }

function updateFeatured(planet){
  featured = planet;
  const imgEl = getEl('planetImage');
  if(imgEl) imgEl.src = planet.image;
  const circle = getEl('planetCircle');
  const ring = getEl('planetRing');
  const nameEl = getEl('planetName');
  const groupEl = getEl('planetGroup');
  const subEl = getEl('planetSubtitle');
  const v = getEl('statVelocity');
  const m = getEl('statMass');
  const p = getEl('statPeriod');
  const temp = getEl('statTemperature');
  const moons = getEl('statMoon');
  const dist = getEl('statDistance');
  const grav = getEl('statGravity');
  if(ring) ring.style.display = planet.ring ? 'block' : 'none';
  if(nameEl) nameEl.textContent = planet.name;
  if(groupEl) groupEl.textContent = planet.group;
  if(subEl) subEl.textContent = planet.highlight || planet.subtitle;
  if(v) v.textContent = planet.velocity;
  if(m) m.textContent = planet.massLabel;
  if(p) p.textContent = planet.period;
  if(temp) temp.textContent = planet.temperature;
  if(moons) moons.textContent = planet.moons;
  if(dist) dist.textContent = planet.distance + 'M km';
  if(grav) grav.textContent = planet.gravity + ' m/s²';
  renderTable();
}

function getGroups(){
  const groups=[
    {id:'terrestrial',label:'Terrestrial Planets',isHeader:false,planets:PLANETS.filter(p=>p.group==='Terrestrial Planets')},
    {id:'jovian-header',label:'Jovian Planets',isHeader:true,planets:[]},
    {id:'gas',label:'Gas Giants',isHeader:false,planets:PLANETS.filter(p=>p.subgroup==='Gas Giants')},
    {id:'ice',label:'Ice Giants',isHeader:false,planets:PLANETS.filter(p=>p.subgroup==='Ice Giants')},
    {id:'dwarf',label:'Dwarf Planets',isHeader:false,planets:PLANETS.filter(p=>p.group==='Dwarf Planets')}
  ];
  return groups.map(g=>{
    if(g.isHeader) return g;
    const filtered=g.planets.filter(p=> !filter || p.name.toLowerCase().includes(filter));
    return {...g,planets:filtered};
  }).filter(g=> g.isHeader || g.planets.length>0);
}

function renderTable(){
  const body = getEl('tableBody');
  if(!body){
    console.error('tableBody not found');
    return;
  }
  const groups=getGroups();
  let html='';let total=0;
  groups.forEach(g=>{if(!g.isHeader) total+=g.planets.length});
  if(total===0){
    html=`<tr class="empty-row"><td colspan="4">No planets found for "${filter}". Try Mercury, Venus, Earth...</td></tr>`;
  }else{
    groups.forEach(g=>{
      if(g.isHeader){
        html+=`<tr class="section-row"><td colspan="4">${g.label}</td></tr>`;
        return;
      }
      g.planets.forEach((planet,idx)=>{
        const isFirst=idx===0;
        const isActive=featured.name===planet.name;
        html+=`<tr class="${isActive?'active-row':''}" style="${idx%2===1 && !isActive?'background:#f8fafc':''}">`;
        if(isFirst){html+=`<td class="group-cell" rowspan="${g.planets.length}">${g.label}</td>`;}
        html+=`<td><button class="planet-link ${isActive?'active':''}" data-name="${planet.name}">${planet.name}</button></td>`;
        html+=`<td>${planet.mass}</td>`;
        html+=`<td>${planet.diameter.toLocaleString()}</td></tr>`;
      });
    });
  }
  body.innerHTML=html;
  body.querySelectorAll('.planet-link').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const p=PLANETS.find(x=>x.name===btn.dataset.name);
      if(p) updateFeatured(p);
      const feat = getEl('featured');
      if(feat) feat.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
}

function doSearch(){
  const input = getEl('searchInput');
  if(!input) return;
  const term=input.value.trim().toLowerCase();
  filter=term;
  if(term){
    const exact=PLANETS.find(p=>p.name.toLowerCase()===term);
    const partial=PLANETS.find(p=>p.name.toLowerCase().includes(term));
    if(exact) featured=exact; else if(partial) featured=partial;
  }
  const meta = getEl('searchMeta');
  if(filter && meta){
    const count=getGroups().reduce((a,g)=>a+(g.isHeader?0:g.planets.length),0);
    meta.style.display='block';
    meta.innerHTML=`Showing ${count} result${count!==1?'s':''} for <b>"${filter}"</b> <button id="metaClear">Clear</button>`;
    const clearBtn = getEl('metaClear');
    if(clearBtn) clearBtn.addEventListener('click',()=>{
      const inp = getEl('searchInput');
      if(inp) inp.value='';
      filter='';
      if(meta) meta.style.display='none';
      renderTable();
    });
  } else if(meta){
    meta.style.display='none';
  }
  updateFeatured(featured);
}

document.addEventListener('DOMContentLoaded', function(){
  const input = getEl('searchInput');
  const btn = getEl('searchBtn');
  if(input){
    input.addEventListener('keydown', e=>{ if(e.key==='Enter') doSearch(); });
  }
  if(btn){
    btn.addEventListener('click', doSearch);
  }
  updateFeatured(featured);
  console.log('Planet table rendered', getEl('tableBody')?.children.length);
});

const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const text = document.getElementById('themeText');

// Load saved
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  icon.className = 'ri-sun-fill';
  text.textContent = 'LIGHT';
}

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  if (isDark) {
    icon.className = 'ri-sun-fill';
    text.textContent = 'LIGHT';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.className = 'ri-moon-fill';
    text.textContent = 'DARK';
    localStorage.setItem('theme', 'light');
  }
});




// ===== FIXED: ONLY SEARCH BUTTON TRIGGERS POPUP =====
const searchInput = document.querySelector('input[placeholder*="Search planet"]');
const blueSearchBtn = document.querySelector('button'); // your blue Search button
// Find the blue one specifically - it's the last button with Search text
const allButtons = document.querySelectorAll('button');
let searchButton = null;
allButtons.forEach(btn => {
  if(btn.textContent.trim() === 'Search') {
    searchButton = btn;
  }
});

const popup = document.getElementById('noResultsPopup');
const planetCard = document.querySelector('[class*="planet"], .card');

function showPopup(term) {
  document.getElementById('popupSearchTerm').textContent = term;
  popup.style.display = 'flex';
  popup.classList.add('show');
}

function hidePopup() {
  popup.style.display = 'none';
  popup.classList.remove('show');
}

// ONLY search button - not dark mode
if(searchButton) {
  searchButton.addEventListener('click', () => {
    const term = searchInput.value.trim().toLowerCase();
    const planets = ['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune','pluto'];
    
    // if empty, do nothing
    if(term === '') return;

    const found = planets.filter(p => p.includes(term));
    
    if(found.length === 0) {
      showPopup(term);
    } else {
      hidePopup();
    }
  });
}

// Close popup when clicking outside
popup.addEventListener('click', (e) => {
  if(e.target === popup) hidePopup();
});

// Close popup when clicking Search INSIDE popup
const popupSearchBtn = popup.querySelector('button');
if(popupSearchBtn) {
  popupSearchBtn.addEventListener('click', hidePopup);
}

// Enter key to search
const searchInputEl = document.getElementById('searchInput');
searchInputEl.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('searchBtn').click();
  }
});