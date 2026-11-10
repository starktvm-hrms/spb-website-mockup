/* Kerala Plan · State Planning Board — shared header, footer, data and helpers. */
(function(){
var CATS=[
 {id:'water',name:'Water & Sanitation',h:200,blurb:'Drinking water, wells, pipelines, drainage and cleanliness in your village and ward.',ask:'Does your ward get safe drinking water every day of the year?'},
 {id:'education',name:'Education',h:262,blurb:'Digital learning tools, schools and higher education opening new doors for Kerala’s youth.',ask:'What would make your local school or college work better for students?'},
 {id:'health',name:'Health & Social Security',h:350,blurb:'Public hospitals, affordable care and schemes that protect families.',ask:'How easy is it to get good, affordable care near your home?'},
 {id:'food',name:'Food & Agriculture',h:95,blurb:'Local vegetables, safer food and support for farmers.',ask:'What would help farmers near you grow and sell more?'},
 {id:'roads',name:'Roads, Transport & Power',h:30,blurb:'Better roads, buses and a reliable power supply.',ask:'Which road, bus route or power problem should be fixed first in your area?'},
 {id:'housing',name:'Housing & Livelihoods',h:18,blurb:'Housing schemes, jobs, local entrepreneurship and poverty eradication.',ask:'What would help families and small businesses in your panchayat thrive?'},
 {id:'environment',name:'Environment & Climate',h:140,blurb:'Flood resilience, biodiversity and climate action that keep Kerala safe and green.',ask:'What flood, landslide or heat risk worries you most where you live?'},
 {id:'culture',name:'Arts, Sports & Youth',h:290,blurb:'Arts, sports and youth clubs that strengthen Kerala’s identity and pride.',ask:'What facility or programme would your local youth most want?'},
 {id:'governance',name:'Governance & Services',h:45,blurb:'Land records, online services and transparent budgets that bring government closer.',ask:'Which government service is hardest for you to use today?'}
];
var CAT={};CATS.forEach(function(c){CAT[c.id]=c});

/* Line icons, 24×24, stroke = currentColor */
function svg(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>';}
var ICON={
  water:svg('<path d="M12 3s-6 6.6-6 11a6 6 0 0012 0c0-4.4-6-11-6-11z"/><path d="M9 15a3 3 0 003 3"/>'),
  education:svg('<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>'),
  health:svg('<path d="M12 20s-8-4.6-8-10.2A4.4 4.4 0 0112 7a4.4 4.4 0 018 2.8C20 15.4 12 20 12 20z"/><path d="M12 10v5M9.5 12.5h5"/>'),
  food:svg('<path d="M12 21V10"/><path d="M12 10c0-4 3-7 8-7 0 5-3 7-8 7z"/><path d="M12 14c0-3-2.5-5.5-7-5.5 0 4 2.5 5.5 7 5.5z"/><path d="M6 21h12"/>'),
  roads:svg('<rect x="4" y="4" width="16" height="12" rx="2"/><path d="M4 11h16M8 16v3M16 16v3"/><circle cx="8" cy="13.5" r=".6"/><circle cx="16" cy="13.5" r=".6"/><path d="M13 1.5L11 5h2l-2 3.5"/>'),
  housing:svg('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'),
  environment:svg('<path d="M12 3c3 3.5 5 6.5 5 9a5 5 0 01-10 0c0-2.5 2-5.5 5-9z"/><path d="M12 21v-9"/><path d="M2 21h20"/><path d="M12 15l-2.5-2M12 13l2-1.8"/>'),
  culture:svg('<circle cx="12" cy="9" r="5"/><path d="M8.5 13l-1.5 8 5-2.5 5 2.5-1.5-8"/><path d="M12 6.5v5M9.5 9h5"/>'),
  governance:svg('<path d="M3 21h18M4 10h16M12 3l9 5H3z"/><path d="M6 10v8M10 10v8M14 10v8M18 10v8"/>'),
  posts:svg('<path d="M4 4h16v12H8l-4 4z"/><path d="M8 9h8M8 12h5"/>'),
  comments:svg('<path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/>'),
  people:svg('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.6"/><path d="M16 14.2c3 .2 5.5 2.3 5.5 5.8"/>'),
  topics:svg('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>'),
  check:svg('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16 9.8"/>'),
  review:svg('<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/>'),
  calendar:svg('<rect x="3" y="4" width="18" height="17"/><path d="M3 9h18M8 2v4M16 2v4"/>'),
  annual:svg('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  monitor:svg('<path d="M2 12h4l3-8 4 16 3-8h6"/>'),
  search:svg('<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>'),
  local:svg('<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M12 7.5v4M12 11.5l-5.5 4.5M12 11.5l5.5 4.5"/>'),
  group:svg('<circle cx="12" cy="7" r="3"/><circle cx="5" cy="10" r="2.2"/><circle cx="19" cy="10" r="2.2"/><path d="M6.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5M1.5 18c0-2 1.6-3.6 3.5-3.6M22.5 18c0-2-1.6-3.6-3.5-3.6"/>'),
  notice:svg('<path d="M4 9v6h3l6 4V5L7 9z"/><path d="M17 9a4 4 0 010 6M19.5 6.5a8 8 0 010 11"/>'),
  info:svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'),
  doc:svg('<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>'),
  coord:svg('<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M5 19l2.8-2.8M16.2 7.8L19 5"/>'),
  telescope:svg('<path d="M3 15l12-6 2 4-12 6z"/><path d="M15 9l4-2 2 4-4 2"/><path d="M9 17l-3 5M11 16l3 6"/>'),
  factory:svg('<path d="M3 21V10l6 4V10l6 4V5h6v16z"/><path d="M7 18h2M12 18h2M17 18h2"/>'),
  chip:svg('<rect x="6" y="6" width="12" height="12"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'),
  globe:svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>'),
  mail:svg('<rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/>'),
  pin:svg('<path d="M12 21s-7-6.3-7-11.5a7 7 0 0114 0C19 14.7 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  phone:svg('<path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"/>'),
  up:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3l6 8H2z" fill="currentColor"/></svg>',
  down:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13L2 5h12z" fill="currentColor"/></svg>'
};
var LOGO='<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="3" fill="#0b2545"/><circle cx="22.5" cy="9.5" r="3.6" fill="#e5a823"/><path d="M4 21c3.2-3 5.8-3 8 0s4.8 3 8 0 5.8-3 8 0" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M4 26c3.2-3 5.8-3 8 0s4.8 3 8 0 5.8-3 8 0" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".55"/></svg>';

/* ---------- local demo store ----------
   The Kerala Plan page used a shared database provided by its host. This static
   build keeps the same API (collection/add/doc.set/doc.delete/onSnapshot) but
   stores data in the visitor's browser. Swap it for a real backend to go live. */
var DB=(function(){
  var KEY='kerala-plan-v2',subs={},data={};
  try{data=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){}
  ['posts','comments','votes','updates'].forEach(function(k){data[k]=data[k]||[]});
  function save(){try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){}}
  function snap(n){return{docs:data[n].map(function(o){return{id:o.id,data:function(){return Object.assign({},o)}}})}}
  function emit(n){save();(subs[n]||[]).forEach(function(f){f(snap(n))});}
  function uid(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}
  window.addEventListener('storage',function(e){if(e.key!==KEY)return;try{data=JSON.parse(e.newValue)||data}catch(x){}Object.keys(subs).forEach(function(n){(subs[n]||[]).forEach(function(f){f(snap(n))})});});
  return{collection:function(n){return{
    add:async function(o){data[n].push(Object.assign({},o,{id:uid()}));emit(n);},
    doc:function(id){return{
      set:async function(o){data[n]=data[n].filter(function(x){return x.id!==id});data[n].push(Object.assign({},o,{id:id}));emit(n);},
      delete:async function(){data[n]=data[n].filter(function(x){return x.id!==id});emit(n);}}},
    onSnapshot:function(f){(subs[n]=subs[n]||[]).push(f);setTimeout(function(){f(snap(n))},0);}
  }}};
})();

/* ---------- helpers ---------- */
function h(tag,attrs){
  var e=document.createElement(tag);attrs=attrs||{};
  for(var k in attrs){var v=attrs[k];if(v==null||v===false)continue;
    if(k==='class')e.className=v;else if(k==='html')e.innerHTML=v;
    else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),v);
    else e.setAttribute(k,v===true?'':v);}
  for(var i=2;i<arguments.length;i++)add(e,arguments[i]);
  return e;
}
function add(e,c){if(c==null||c===false)return;if(Array.isArray(c)){c.forEach(function(x){add(e,x)});return;}e.append(c.nodeType?c:document.createTextNode(c));}
function ico(name){var s=document.createElement('span');s.innerHTML=ICON[name];return s.firstChild;}
function ago(ts){var s=(Date.now()-ts)/1000;if(s<60)return'just now';var m=s/60;if(m<60)return Math.floor(m)+' min ago';var hr=m/60;if(hr<24)return Math.floor(hr)+' h ago';var d=hr/24;if(d<30)return Math.floor(d)+' d ago';return new Date(ts).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});}
var tt;function toast(m){var t=document.getElementById('toast');if(!t){t=h('div',{id:'toast',class:'toast',role:'status'});document.body.append(t);}t.textContent=m;t.hidden=false;clearTimeout(tt);tt=setTimeout(function(){t.hidden=true},3200);}
function weekAsk(){return CATS[Math.floor(Date.now()/6048e5)%CATS.length];}
var staff=false;try{staff=localStorage.getItem('kp-staff')==='1'}catch(e){}

/* ---------- chrome ---------- */
var here=location.pathname.split('/').pop()||'index.html';
var MENU=[
  ['index.html','Home'],
  ['about.html','About Us',[['about.html#board','About the Board'],['about.html#functions','Functions'],['about.html#members','Board Members'],['about.html#divisions','Divisions'],['about.html#history','History']]],
  ['plans.html','Plans',[['plans.html#fyp14','14th Five-Year Plan (2022-27)'],['plans.html#fyp15','15th Five-Year Plan (2027-32)'],['plans.html#annual','Annual Plans'],['plans.html#decentralised','Decentralised Planning'],['plans.html#monitoring','Monitoring & Evaluation']]],
  ['publications.html','Publications',[['publications.html#Economic Review','Economic Review'],['publications.html#Plan Document','Plan Documents'],['publications.html#Working Group Report','Working Group Reports'],['publications.html#Evaluation Study','Evaluation Studies']]],
  ['notices.html','Notices',[['notices.html#News','News & Events'],['notices.html#Circular','Circulars & Orders'],['notices.html#Tender','Tenders'],['notices.html#Recruitment','Recruitment']]],
  ['forum.html','Kerala Plan',[['forum.html#all','Citizen discussions'],['forum.html#new','Share your view']]],
  ['contact.html','Contact']
];
function header(){
  var items=MENU.map(function(m){
    var cur=(here===m[0])?' aria-current="page"':'';
    var dd=m[2]?'<ul class="dd">'+m[2].map(function(s){return '<li><a href="'+s[0]+'">'+s[1]+'</a></li>'}).join('')+'</ul>':'';
    return '<li><a href="'+m[0]+'"'+cur+'>'+m[1]+'</a>'+dd+'</li>';
  }).join('');
  return '<a class="skip" href="#main">Skip to content</a>'+
  '<div class="topbar"><div class="wrap">'+
    '<div class="l"><span>Government of Kerala</span><span lang="ml">കേരള സർക്കാർ</span>'+
      '<span><svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"/></svg>0471 254 0208</span></div>'+
    '<div class="r" role="group" aria-label="Text size"><a href="contact.html#rti" style="margin-right:.6rem">RTI</a><a href="#main" style="margin-right:.8rem">Screen reader access</a>'+
      '<button type="button" data-fs="13px" aria-label="Smaller text">A-</button><button type="button" data-fs="15px" aria-label="Default text size">A</button><button type="button" data-fs="17px" aria-label="Larger text">A+</button></div>'+
  '</div></div>'+
  '<header class="hdr"><div class="wrap">'+
    '<a class="logo" href="index.html" aria-label="State Planning Board home">'+LOGO+'<span><b>State Planning Board</b><small><span lang="ml">സംസ്ഥാന ആസൂത്രണ ബോർഡ്</span> · Government of Kerala</small></span></a>'+
    '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>'+
    '<nav class="nav" id="nav" aria-label="Main"><ul>'+items+'</ul></nav>'+
  '</div></header>';
}
function footer(){
  return '<footer class="ftr"><div class="wrap top">'+
    '<div><a class="logo" href="index.html">'+LOGO+'<span><b>State Planning Board</b><small>Government of Kerala</small></span></a>'+
      '<p>Kerala State Planning Board, Pattom, Thiruvananthapuram, Kerala 695 004<br>Phone: 0471 254 0208</p></div>'+
    '<div><h4>The Board</h4><ul><li><a href="about.html#board">About the Board</a></li><li><a href="about.html#members">Board Members</a></li><li><a href="about.html#divisions">Divisions</a></li><li><a href="about.html#history">History</a></li><li><a href="contact.html">Contact</a></li></ul></div>'+
    '<div><h4>Plans &amp; Reports</h4><ul><li><a href="plans.html#fyp14">Five-Year Plans</a></li><li><a href="plans.html#annual">Annual Plans</a></li><li><a href="publications.html#Economic Review">Economic Review</a></li><li><a href="publications.html#Working Group Report">Working Group Reports</a></li><li><a href="publications.html#Evaluation Study">Evaluation Studies</a></li></ul></div>'+
    '<div><h4>Citizens</h4><ul><li><a href="forum.html#all">Kerala Plan</a></li><li><a href="notices.html">Notices &amp; Tenders</a></li><li><a href="notices.html#Recruitment">Recruitment</a></li><li><a href="contact.html#rti">Right to Information</a></li><li><a href="index.html#links">Important Links</a></li></ul></div>'+
  '</div><div class="bot"><div class="wrap"><span>© '+new Date().getFullYear()+' Kerala State Planning Board, Government of Kerala. All rights reserved.</span><span>Website policy · Accessibility · Disclaimer</span></div></div></footer>'+
  '<button class="totop" type="button" aria-label="Back to top" hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg></button>';
}
try{var fs=localStorage.getItem('kp-fs');if(fs)document.documentElement.style.setProperty('--fs',fs);}catch(e){}
document.addEventListener('DOMContentLoaded',function(){
  var a=document.getElementById('site-header');if(a)a.outerHTML=header();
  var b=document.getElementById('site-footer');if(b)b.outerHTML=footer();
  var bu=document.querySelector('.burger'),nv=document.getElementById('nav');
  bu.addEventListener('click',function(){var o=nv.classList.toggle('open');bu.setAttribute('aria-expanded',String(o));});
  nv.addEventListener('click',function(e){if(e.target.closest('a')){nv.classList.remove('open');bu.setAttribute('aria-expanded','false');}});
  document.querySelectorAll('[data-fs]').forEach(function(x){x.addEventListener('click',function(){document.documentElement.style.setProperty('--fs',x.dataset.fs);try{localStorage.setItem('kp-fs',x.dataset.fs)}catch(e){}});});
  var tp=document.querySelector('.totop');
  tp.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});
  addEventListener('scroll',function(){tp.hidden=scrollY<600},{passive:true});
});

/* ---------- Board content ----------
   Sources: Wikipedia, the LSGD portal and news reports (2026). Verify against the
   Board's own records before publishing. Download links are placeholders. */
var NOTICES=[
  {type:'News',date:'2026-10-07',title:'Board to empanel consultants and think tanks for the 15th Five-Year Plan (2027-32)',body:'The State Planning Board has decided to empanel consulting firms and think tanks to support preparation of the Fifteenth Five-Year Plan.'},
  {type:'News',date:'2026-07-21',title:'State Planning Board reconstituted',body:'The Government of Kerala reconstituted the State Planning Board with the Chief Minister as Chairperson and K. M. Chandrasekhar as Vice Chairperson. Expert members will be notified separately.'},
  {type:'News',date:'2026-01-28',title:'Economic Review 2025 placed before the Legislative Assembly',body:'Kerala’s GSDP grew 6.19 per cent in real terms in 2024-25. The Review was released ahead of the State Budget.'},
  {type:'News',date:'2026-11-03',title:'Kerala Plan: citizens invited to share priorities for the 15th Plan',body:'Share concerns, ideas and opinions on nine topics, from water and sanitation to governance and services.'},
  {type:'Circular',date:'2026-09-15',title:'Guidelines for formulation of Annual Plan 2027-28 by local governments',body:'Circular to panchayats, municipalities and corporations on timelines and procedure.'},
  {type:'Circular',date:'2026-08-02',title:'Formation of working groups for the 15th Five-Year Plan',body:'Order constituting sectoral working groups.'},
  {type:'Tender',date:'2026-10-20',title:'Expression of Interest: empanelment of consulting firms and think tanks',body:'EOI for technical support to the 15th Five-Year Plan.'},
  {type:'Tender',date:'2026-09-28',title:'Quotation: printing of Economic Review 2026',body:'Sealed quotations invited from approved printers.'},
  {type:'Recruitment',date:'2026-09-10',title:'Young Professionals programme: applications invited',body:'Short-term engagement with the Board’s divisions.'},
  {type:'Recruitment',date:'2026-06-18',title:'Chief (Industry and Infrastructure Division): selection through Kerala PSC',body:'See the Kerala Public Service Commission notification.'}
];
var PUBS=[
  {k:'Economic Review',t:'Economic Review 2025',y:2026,d:'Volumes I & II, English and Malayalam',c:''},
  {k:'Economic Review',t:'Economic Review 2024',y:2025,d:'Volumes I & II, English and Malayalam',c:''},
  {k:'Economic Review',t:'Economic Review 2023',y:2024,d:'Volumes I & II, English and Malayalam',c:''},
  {k:'Economic Review',t:'Economic Review 2022',y:2023,d:'First year of the 14th Five-Year Plan',c:''},
  {k:'Plan Document',t:'Fourteenth Five-Year Plan 2022-27',y:2022,d:'Approach and plan document',c:'v2'},
  {k:'Plan Document',t:'Annual Plan 2026-27',y:2026,d:'Final year of the 14th Plan',c:'v2'},
  {k:'Plan Document',t:'Annual Plan 2025-26',y:2025,d:'Scheme-wise outlays',c:'v2'},
  {k:'Working Group Report',t:'14th Plan Working Group Reports',y:2022,d:'Reports of the 44 working groups',c:'v3'},
  {k:'Working Group Report',t:'Working Group on Art and Culture',y:2022,d:'Report, March 2022',c:'v3'},
  {k:'Evaluation Study',t:'Evaluation Studies',y:2025,d:'Field evaluations of state schemes',c:'v4'}
];
var DIVISIONS=[
  ['coord','Plan Co-ordination','Prepares Five-Year and Annual Plans, resource estimates and the Economic Review.'],
  ['food','Agriculture','Agriculture and allied sectors, irrigation, fisheries and rural development.'],
  ['people','Social Services','Education, health, housing, social security and welfare of disadvantaged groups.'],
  ['factory','Industry & Infrastructure','Industry, power, transport, roads and urban infrastructure.'],
  ['search','Evaluation','Independent evaluation studies of plan schemes and programmes.'],
  ['local','Decentralised Planning','Supports plan formulation by local governments and District Planning Committees.'],
  ['telescope','Perspective Planning','Long-term development studies and macro-economic analysis.'],
  ['chip','Information Technology','Plan monitoring systems, data and the Board’s digital services.']
];
var LINKS=[
  ['globe','Government of Kerala','https://kerala.gov.in'],
  ['governance','Kerala Legislative Assembly','https://niyamasabha.nic.in'],
  ['local','Local Self Government Department','https://lsgkerala.gov.in'],
  ['annual','Finance Department','https://finance.kerala.gov.in'],
  ['review','Economics & Statistics Department','https://ecostat.kerala.gov.in'],
  ['coord','NITI Aayog','https://niti.gov.in']
];
window.KP={NOTICES:NOTICES,PUBS:PUBS,DIVISIONS:DIVISIONS,LINKS:LINKS,
  fdate:function(s){return new Date(s+'T00:00:00').toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});},
  isNew:function(s){return (Date.now()-new Date(s+'T00:00:00'))<30*864e5;},
CATS:CATS,CAT:CAT,ICON:ICON,LOGO:LOGO,DB:DB,h:h,ico:ico,ago:ago,toast:toast,weekAsk:weekAsk,
  isStaff:function(){return staff},setStaff:function(v){staff=v;try{localStorage.setItem('kp-staff',v?'1':'')}catch(e){}},
  UID:'me',
  KINDS:['Notice','Consultation','Deadline','Result'],
  DISTRICTS:['Thiruvananthapuram','Kollam','Pathanamthitta','Alappuzha','Kottayam','Idukki','Ernakulam','Thrissur','Palakkad','Malappuram','Kozhikode','Wayanad','Kannur','Kasaragod'],
  FLAIRS:['Concern','Idea','Opinion','Question'],
  /* score, my vote and comment count per id */
  derive:function(S){
    S.score={};S.mine={};S.ccount={};
    S.votes.forEach(function(v){S.score[v.t]=(S.score[v.t]||0)+v.v;if(v.u===KP.UID)S.mine[v.t]=v.v;});
    S.comments.forEach(function(c){S.ccount[c.post]=(S.ccount[c.post]||0)+1;});
  },
  hot:function(S,p){return((S.score[p.id]||0)+1+0.5*(S.ccount[p.id]||0))/Math.pow((Date.now()-p.ts)/36e5+2,1.4);},
  docs:function(s){return s.docs.map(function(d){var o=Object.assign({},d.data());o.id=d.id;return o;});}
};
})();
