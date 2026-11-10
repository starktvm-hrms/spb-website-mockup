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
function header(){
  var dd=CATS.map(function(c){return '<li><a href="forum.html#'+c.id+'">'+ICON[c.id]+c.name+'</a></li>';}).join('');
  var home=here==='index.html';
  return '<a class="skip" href="#main">Skip to content</a>'+
  '<div class="topbar"><div class="wrap">'+
    '<div class="l"><span lang="ml">കേരള പ്ലാൻ</span><span>State Planning Board</span><span>Kerala, planned together</span></div>'+
    '<div class="r" role="group" aria-label="Text size"><button type="button" data-fs="13px" aria-label="Smaller text">A-</button><button type="button" data-fs="15px" aria-label="Default text size">A</button><button type="button" data-fs="17px" aria-label="Larger text">A+</button></div>'+
  '</div></div>'+
  '<header class="hdr"><div class="wrap">'+
    '<a class="logo" href="index.html" aria-label="Kerala Plan home">'+LOGO+'<span><b>Kerala Plan</b><small><span lang="ml">കേരള പ്ലാൻ</span> · State Planning Board</small></span></a>'+
    '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>'+
    '<nav class="nav" id="nav" aria-label="Main"><ul>'+
      '<li><a href="index.html"'+(home?' aria-current="page"':'')+'>Home</a></li>'+
      '<li><a href="forum.html#all">Topics</a><ul class="dd">'+dd+'</ul></li>'+
      '<li><a href="forum.html#all"'+(here==='forum.html'?' aria-current="page"':'')+'>All posts</a></li>'+
      '<li><a href="index.html#updates">Updates</a></li>'+
      '<li><a href="index.html#how">How it works</a></li>'+
      '<li><a href="index.html#rules">House rules</a></li>'+
    '</ul></nav>'+
    '<a class="hbtn" href="forum.html#new">New post</a>'+
  '</div></header>';
}
function footer(){
  var t=CATS.slice(0,5).map(function(c){return '<li><a href="forum.html#'+c.id+'">'+c.name+'</a></li>'}).join('');
  var t2=CATS.slice(5).map(function(c){return '<li><a href="forum.html#'+c.id+'">'+c.name+'</a></li>'}).join('');
  return '<footer class="ftr"><div class="wrap top">'+
    '<div><a class="logo" href="index.html">'+LOGO+'<span><b>Kerala Plan</b><small>State Planning Board</small></span></a>'+
      '<p>The State Planning Board shapes roads, schools, hospitals, water and more. This is where you tell it what daily life looks like on the ground.</p></div>'+
    '<div><h4>Topics</h4><ul>'+t+'</ul></div>'+
    '<div><h4>More topics</h4><ul>'+t2+'</ul></div>'+
    '<div><h4>Take part</h4><ul><li><a href="forum.html#new">Share your view</a></li><li><a href="forum.html#all">Read all posts</a></li><li><a href="index.html#updates">Important updates</a></li><li><a href="index.html#how">How Kerala Plan works</a></li><li><a href="index.html#rules">House rules</a></li></ul></div>'+
  '</div><div class="bot"><div class="wrap"><span>© '+new Date().getFullYear()+' State Planning Board · Kerala Plan</span><span lang="ml">കേരള പ്ലാൻ</span></div></div></footer>'+
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

window.KP={CATS:CATS,CAT:CAT,ICON:ICON,LOGO:LOGO,DB:DB,h:h,ico:ico,ago:ago,toast:toast,weekAsk:weekAsk,
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
