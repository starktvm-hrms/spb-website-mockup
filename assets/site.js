/* Shared header, footer and content data for the Kerala State Planning Board site. */
(function(){
var PAGES=[
  ['index.html','Home'],
  ['about.html','About'],
  ['plans.html','Plans & Programmes'],
  ['publications.html','Publications'],
  ['updates.html','Updates'],
  ['contact.html','Contact']
];
var here=(location.pathname.split('/').pop()||'index.html');

var LOGO='<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="var(--accent)"/><circle cx="22.5" cy="9.5" r="3.6" fill="var(--gold)"/><path d="M4 21c3.2-3 5.8-3 8 0s4.8 3 8 0 5.8-3 8 0" fill="none" stroke="var(--on-accent)" stroke-width="2.2" stroke-linecap="round"/><path d="M4 26c3.2-3 5.8-3 8 0s4.8 3 8 0 5.8-3 8 0" fill="none" stroke="var(--on-accent)" stroke-width="2.2" stroke-linecap="round" opacity=".55"/></svg>';

function header(){
  var items=PAGES.map(function(p){
    return '<li><a href="'+p[0]+'"'+(here===p[0]?' aria-current="page"':'')+'>'+p[1]+'</a></li>';
  }).join('');
  return ''+
  '<a class="skip" href="#main">Skip to content</a>'+
  '<div class="util"><div class="container">'+
    '<span>Government of Kerala · <span class="ml">കേരള സർക്കാർ</span></span>'+
    '<span class="r"><a href="contact.html#rti">RTI</a><a href="publications.html">Downloads</a>'+
    '<button type="button" id="themebtn" aria-label="Toggle dark mode">Theme</button></span>'+
  '</div></div>'+
  '<header class="mast"><div class="container">'+
    '<a class="brand" href="index.html" aria-label="Kerala State Planning Board home">'+LOGO+
      '<span><b>State Planning Board</b><small class="ml">സംസ്ഥാന ആസൂത്രണ ബോർഡ് · Kerala</small></span></a>'+
    '<button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>'+
    '<nav aria-label="Main"><ul class="menu" id="menu">'+items+
      '<li class="cta"><a href="participate.html"'+(here==='participate.html'?' aria-current="page"':'')+'>Have your say</a></li></ul></nav>'+
  '</div></header>';
}
function footer(){
  return '<footer class="foot">'+
  '<div class="container">'+
    '<div><a class="brand" href="index.html">'+LOGO+'<span><b>State Planning Board</b><small>Government of Kerala</small></span></a>'+
      '<p>The State Planning Board formulates Kerala’s Five-Year and Annual Plans, reviews the economy and guides people’s planning in every panchayat and municipality.</p></div>'+
    '<div><h2>The Board</h2><ul><li><a href="about.html">About us</a></li><li><a href="about.html#structure">Board &amp; members</a></li><li><a href="about.html#divisions">Divisions</a></li><li><a href="about.html#history">History</a></li></ul></div>'+
    '<div><h2>Work</h2><ul><li><a href="plans.html#fyp">Five-Year Plans</a></li><li><a href="plans.html#annual">Annual Plans</a></li><li><a href="plans.html#review">Economic Review</a></li><li><a href="plans.html#decentralised">Decentralised planning</a></li></ul></div>'+
    '<div><h2>Citizens</h2><ul><li><a href="participate.html">Have your say</a></li><li><a href="updates.html">Notices &amp; consultations</a></li><li><a href="publications.html">Publications</a></li><li><a href="contact.html">Contact &amp; RTI</a></li></ul></div>'+
  '</div>'+
  '<div class="base"><div class="container"><span>© '+new Date().getFullYear()+' Kerala State Planning Board, Thiruvananthapuram</span><span>Design mockup · content to be verified before launch</span></div></div>'+
  '</footer>';
}

document.addEventListener('DOMContentLoaded',function(){
  var h=document.getElementById('site-header');if(h)h.outerHTML=header();
  var f=document.getElementById('site-footer');if(f)f.outerHTML=footer();
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  if(b)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',String(o));});
  var t=document.getElementById('themebtn');
  if(t)t.addEventListener('click',function(){
    var r=document.documentElement,cur=r.getAttribute('data-theme');
    var dark=cur?cur==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    r.setAttribute('data-theme',dark?'light':'dark');
    try{localStorage.setItem('spb-theme',dark?'light':'dark')}catch(e){}
  });
});
try{var th=localStorage.getItem('spb-theme');if(th)document.documentElement.setAttribute('data-theme',th);}catch(e){}

/* ---------- shared content ---------- */
window.SPB={
  CATS:[
    {id:'water',name:'Water & Sanitation',h:200,blurb:'Drinking water, wells, pipelines, drainage and cleanliness in your village and ward.',ask:'Does your ward get safe drinking water every day of the year?'},
    {id:'education',name:'Education',h:262,blurb:'Digital learning tools, schools and higher education opening new doors for Kerala’s youth.',ask:'What would make your local school or college work better for students?'},
    {id:'health',name:'Health & Social Security',h:350,blurb:'Public hospitals, affordable care and schemes that protect families.',ask:'How easy is it to get good, affordable care near your home?'},
    {id:'food',name:'Food & Agriculture',h:95,blurb:'Local vegetables, safer food and support for farmers.',ask:'What would help farmers near you grow and sell more?'},
    {id:'roads',name:'Roads, Transport & Power',h:30,blurb:'Better roads, buses and a reliable power supply.',ask:'Which road, bus route or power problem should be fixed first in your area?'},
    {id:'housing',name:'Housing & Livelihoods',h:18,blurb:'Housing schemes, jobs, local entrepreneurship and poverty eradication.',ask:'What would help families and small businesses in your panchayat thrive?'},
    {id:'environment',name:'Environment & Climate',h:140,blurb:'Flood resilience, biodiversity and climate action that keep Kerala safe and green.',ask:'What flood, landslide or heat risk worries you most where you live?'},
    {id:'culture',name:'Arts, Sports & Youth',h:290,blurb:'Arts, sports and youth clubs that strengthen Kerala’s identity and pride.',ask:'What facility or programme would your local youth most want?'},
    {id:'governance',name:'Governance & Services',h:45,blurb:'Land records, online services and transparent budgets that bring government closer.',ask:'Which government service is hardest for you to use today?'}
  ],
  DISTRICTS:['Thiruvananthapuram','Kollam','Pathanamthitta','Alappuzha','Kottayam','Idukki','Ernakulam','Thrissur','Palakkad','Malappuram','Kozhikode','Wayanad','Kannur','Kasaragod'],
  /* Sample notices for the mockup. Replace with the Board's real notices before launch. */
  UPDATES:[
    {kind:'Consultation',cat:'',title:'Citizen consultation on the Annual Plan 2027-28',body:'Share priorities for next year’s plan outlay under any of the nine topics on Have your say. Comments received will be summarised for the working groups.',date:'2026-11-03',pinned:true},
    {kind:'Deadline',cat:'',title:'Local governments: Annual Plan projects due for District Planning Committee approval',body:'Panchayats and municipalities should finalise and upload their Annual Plan projects for DPC vetting as per the schedule circulated to local governments.',date:'2026-11-01'},
    {kind:'Result',cat:'',title:'Economic Review 2025 released',body:'Kerala’s GSDP grew 6.19 per cent in real terms in 2024-25. Read the full review in English and Malayalam.',date:'2026-01-28'},
    {kind:'Notice',cat:'environment',title:'Working group on climate resilience invites expert submissions',body:'Researchers and practitioners may submit short notes on flood, landslide and heat-risk planning for inclusion in working-group discussions.',date:'2026-10-20'},
    {kind:'Notice',cat:'',title:'State Planning Board reconstituted',body:'The Government of Kerala has reconstituted the State Planning Board. Details of expert members will be published here when notified.',date:'2026-07-21'},
    {kind:'Tender',cat:'',title:'Expression of interest: digitisation of plan monitoring data',body:'EOI invited from empanelled agencies. See the tender notice for scope, eligibility and last date.',date:'2026-10-08'}
  ],
  PUBS:[
    {t:'Economic Review 2025',k:'Economic Review',y:2026,d:'Annual survey of Kerala’s economy placed before the Legislative Assembly with the State Budget. Volumes I & II.',h:160,lang:'English · Malayalam'},
    {t:'Economic Review 2024',k:'Economic Review',y:2025,d:'Review of the state economy for 2023-24, sector by sector.',h:160,lang:'English · Malayalam'},
    {t:'Fourteenth Five-Year Plan (2022-27): Approach',k:'Five-Year Plan',y:2022,d:'Approach to the 14th Plan: a knowledge economy, a modern production base and inclusive welfare.',h:262,lang:'English · Malayalam'},
    {t:'Fourteenth Five-Year Plan: Working Group Reports',k:'Five-Year Plan',y:2022,d:'Sector working-group reports that informed plan priorities and outlays.',h:262,lang:'English'},
    {t:'Annual Plan 2026-27',k:'Annual Plan',y:2026,d:'Scheme-wise outlay and targets for the current financial year.',h:30,lang:'English'},
    {t:'Annual Plan 2025-26',k:'Annual Plan',y:2025,d:'Scheme-wise outlay and targets for 2025-26.',h:30,lang:'English'},
    {t:'Evaluation study: Local government water supply schemes',k:'Evaluation Study',y:2025,d:'Field evaluation of piped water projects run by local governments.',h:200,lang:'English'},
    {t:'Evaluation study: Kudumbashree micro-enterprises',k:'Evaluation Study',y:2024,d:'Assessment of livelihood outcomes in women-led enterprises.',h:18,lang:'English'},
    {t:'Guidelines for local government plan formulation',k:'Guidelines',y:2025,d:'Procedure, timelines and subsidy norms for panchayat and municipal plans.',h:45,lang:'Malayalam'},
    {t:'Kerala Perspective Plan 2030',k:'Perspective Plan',y:2016,d:'Long-term development vision document for Kerala.',h:140,lang:'English'}
  ]
};
window.SPB.CAT={};window.SPB.CATS.forEach(function(c){window.SPB.CAT[c.id]=c});
window.SPB.fmtDate=function(s){return new Date(s+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});};
window.SPB.esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]});};
window.SPB.updateHTML=function(u){
  var c=u.cat&&window.SPB.CAT[u.cat],e=window.SPB.esc;
  return '<article class="upd card'+(u.pinned?' pin':'')+'"><div class="meta"><span class="kind '+e(u.kind)+'">'+e(u.kind)+'</span>'+
    (u.pinned?'<span class="badge">Pinned</span>':'')+'<span>'+window.SPB.fmtDate(u.date)+'</span>'+
    (c?'<span><span class="dot" style="--h:'+c.h+'"></span> '+e(c.name)+'</span>':'')+'</div>'+
    '<h3>'+e(u.title)+'</h3><p>'+e(u.body)+'</p></article>';
};
window.SPB.sortedUpdates=function(){return window.SPB.UPDATES.slice().sort(function(a,b){return(b.pinned?1:0)-(a.pinned?1:0)||(a.date<b.date?1:-1)});};
window.SPB.pubHTML=function(p){
  var e=window.SPB.esc;
  return '<article class="pub card"><div class="cv" style="--h:'+p.h+'">'+e(p.k)+'</div><div><h3>'+e(p.t)+'</h3><p>'+e(p.d)+'</p><div class="meta" style="margin-top:.25rem"><span>'+p.y+'</span><span>·</span><span>'+e(p.lang)+'</span></div></div>'+
    '<a class="btn sm" href="#" onclick="return false" aria-label="Download '+e(p.t)+' (PDF)">PDF</a></article>';
};
window.SPB.weekAsk=function(){var C=window.SPB.CATS;return C[Math.floor(Date.now()/6048e5)%C.length];};
})();
