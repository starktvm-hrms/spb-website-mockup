/* Plan Keralam · State Planning Board — shared header, footer, data and helpers. */
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
  like:svg('<path d="M7 10v11H3V10z"/><path d="M7 10l4-7c1.7 0 2.8 1.3 2.5 3L13 9h6a2 2 0 012 2.3l-1.4 8A2 2 0 0117.6 21H7"/>'),
  share:svg('<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.3 10.8l7.4-4.4M8.3 13.2l7.4 4.4"/>'),
  link:svg('<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7L12 6.3"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>'),
  more:svg('<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>'),
  up:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3l6 8H2z" fill="currentColor"/></svg>',
  down:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 13L2 5h12z" fill="currentColor"/></svg>'
};
var LOGO='<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="3" fill="#2f3e37"/><circle cx="22.5" cy="9.5" r="3.6" fill="#ea917f"/><path d="M4 21c3.2-3 5.8-3 8 0s4.8 3 8 0 5.8-3 8 0" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M4 26c3.2-3 5.8-3 8 0s4.8 3 8 0 5.8-3 8 0" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".55"/></svg>';

/* Sample discussion so the demo feed is not empty. Delete SEED to launch with an empty forum. */
function seedData(){
  var H=36e5,now=Date.now();
  var P=[
    ['p1','water','Concern','Anitha R.','Palakkad','Pipe water comes only twice a week in our ward in summer','From March to May, the tap connection in ward 7 gets water only on Tuesdays and Fridays. Families depend on tanker lorries. Can the plan include a new overhead tank for the ward?',5],
    ['p2','environment','Idea','Rahul M.','Ernakulam','Map every culvert before the monsoon so blocked drains are cleared in time','Most flooding in our town starts at a handful of blocked culverts. If each ward sabha mapped them and volunteers reported blockages, the municipality could clear them before June.',26],
    ['p3','education','Question','Fathima K.','Kannur','Will government colleges get more seats in new-age courses?','Many students in our district travel outside Kerala for data science and AI courses. Are there plans to add these programmes in government and aided colleges here?',50],
    ['p4','food','Idea','Joseph T.','Thrissur','Weekly farmers’ market at every panchayat office','A covered space once a week where local farmers can sell vegetables directly would cut middlemen and give us fresher food.',80],
    ['p5','roads','Concern','Suresh P.','Idukki','No bus after 8 pm on the hill route','Workers returning from town have no bus after 8 pm. Autos charge ₹400. Even one late service would help hundreds of people.',120],
    ['p6','health','Opinion','Lakshmi N.','Kollam','Our family health centre is excellent: fund more staff, not more buildings','The FHC near us has a great doctor but only one. Queues are long by 9 am. Staff matter more than new buildings.',150],
    ['p7','environment','Concern','Bindu V.','Alappuzha','Saltwater is entering our paddy fields every summer','The regulator near our padasekharam does not close fully. By April the water in the canals is too salty to irrigate. Farmers here lost almost half the crop last year.',9],
    ['p8','governance','Question','Arun S.','Thiruvananthapuram','Can building permits be tracked online, step by step?','I applied for a house permit three months ago and have visited the office five times. A simple tracker like the passport status page would save everyone time.',14],
    ['p9','housing','Idea','Shameer A.','Kozhikode','Rent-to-own flats for young families near town','Young couples working in town cannot afford land. Government-built flats with monthly payments that count towards ownership would keep families close to jobs.',31],
    ['p10','health','Concern','Mary J.','Kasaragod','The nearest dialysis centre is 40 km away','My father needs dialysis three times a week. The bus journey takes two hours each way. Please consider a dialysis unit at the taluk hospital.',40],
    ['p11','culture','Idea','Akhil R.','Pathanamthitta','Turn unused panchayat halls into evening sports centres','Our panchayat hall is locked most evenings. With some lights and a badminton court, it could keep teenagers busy and off their phones.',60],
    ['p12','education','Idea','Nisha P.','Malappuram','Keep school libraries open in the evening','Many children have no quiet place to study at home. Opening school libraries from 4 to 7 pm, with a volunteer or librarian, would help a lot.',70],
    ['p13','environment','Concern','George K.','Wayanad','Wild elephants are destroying crops every week','Three farms in our ward were raided this month. We need a plan for solar fencing and faster compensation, not just visits after the damage.',95],
    ['p14','food','Question','Ramesh K.','Palakkad','Why is there no procurement centre for paddy in our block?','We have to transport paddy to the next block and wait days for payment. Is a procurement centre planned for our area?',110]
  ];
  var posts=P.map(function(x){return{id:x[0],cat:x[1],flair:x[2],name:x[3],author:'s_'+x[0],district:x[4],title:x[5],body:x[6],ts:now-x[7]*H}});
  posts.push({id:'b1',cat:'environment',flair:'Official',board:true,name:'State Planning Board',author:'board',district:'',
    title:'കൂടുതൽ വ്യവസായങ്ങളോ ശുദ്ധവായുവോ? More industries or clean air?',
    body:'വായുവിന്റെ ഗുണമേന്മ നഷ്ടപ്പെടുത്താതെ നമുക്ക് വളരാനാകില്ലേ? Can Kerala grow without losing the quality of the air we breathe?\n\nനിങ്ങളുടെ അഭിപ്രായങ്ങൾ പങ്കുവയ്ക്കൂ, കേരളത്തിന്റെ വികസന ആസൂത്രണത്തിൽ പങ്കാളികളാകൂ. Share your views in the comments and take part in planning Kerala’s development.',
    img:'assets/img/plan-keralam-poster.jpg',ts:now-3*H});
  posts.push({id:'b2',cat:'housing',flair:'Official',board:true,name:'State Planning Board',author:'board',district:'',
    title:'Maxxing… Coastal Livelihoods',
    body:'Kerala’s 14th Five-Year Plan aims to make fishing safer and open up more livelihood opportunities along the coast.\n\nIf you live or work on the coast, tell us: what would make fishing safer, and what other work would you like to see in your village?',
    img:'assets/img/poster-coastal-livelihoods.jpg',ts:now-20*H});
  posts.push({id:'b3',cat:'education',flair:'Official',board:true,name:'State Planning Board',author:'board',district:'',
    title:'Will AI take your job or change it?',
    body:'AI is changing the work world. The 14th Five-Year Plan Approach Paper stresses the need to equip young people with the skills to take on these changes and new opportunities.\n\nWhat skills should our colleges, ITIs and skill centres teach first? Share your view.',
    img:'assets/img/poster-ai-jobs.jpg',ts:now-45*H});
  posts.push({id:'b4',cat:'roads',flair:'Official',board:true,name:'State Planning Board',author:'board',district:'',
    title:'Affordability or sustainability?',
    body:'Can we have our cake and save the planet too? Cheaper travel, cleaner travel, or both: how should Kerala plan its trains, buses and roads?\n\nShare your views and help shape Kerala’s plans. Find us on Facebook, X and Instagram: @PlanKerala',
    img:'assets/img/poster-affordability-sustainability.jpg',ts:now-75*H});
  var d={posts:posts,
    comments:[
      {id:'c1',post:'p1',parent:null,body:'Same in ward 9. The problem is the pump house capacity, not the pipes.',name:'Joseph T.',author:'s_c1',ts:now-4*H,board:false},
      {id:'c2',post:'p1',parent:'c1',body:'Thank you both. We have shared this with the District Planning Committee and the working group on water for the Annual Plan.',name:'State Planning Board',author:'board',ts:now-2*H,board:true},
      {id:'c3',post:'p2',parent:null,body:'Our residents’ association already does this informally. Happy to share our map.',name:'Lakshmi N.',author:'s_c3',ts:now-20*H,board:false},
      {id:'c4',post:'p3',parent:null,body:'Yes please. Even short certificate courses would help.',name:'Anitha R.',author:'s_c4',ts:now-40*H,board:false},
      {id:'c5',post:'b1',parent:null,body:'Both. New industries should come with strict emission checks and green belts around them.',name:'Rahul M.',author:'s_c5',ts:now-2.5*H,board:false},
      {id:'c6',post:'b1',parent:null,body:'Our town already has dust from the quarry. Please fix that before adding more industry.',name:'Bindu V.',author:'s_c6',ts:now-2*H,board:false},
      {id:'c7',post:'b1',parent:'c6',body:'Thank you. Please name the town and the quarry so we can pass this to the working group on environment.',name:'State Planning Board',author:'board',ts:now-1.5*H,board:true},
      {id:'c8',post:'p7',parent:null,body:'Same problem in Kuttanad. The bund needs repair before March.',name:'Joseph T.',author:'s_c8',ts:now-7*H,board:false},
      {id:'c9',post:'p8',parent:null,body:'Strongly agree. Even an SMS at each stage would help.',name:'Meera S.',author:'s_c9',ts:now-12*H,board:false},
      {id:'c10',post:'p8',parent:'c9',body:'Noted. We are forwarding this to the working group on governance and services.',name:'State Planning Board',author:'board',ts:now-10*H,board:true},
      {id:'c11',post:'p10',parent:null,body:'Praying for your father. A unit at the taluk hospital would help many families.',name:'Lakshmi N.',author:'s_c11',ts:now-36*H,board:false},
      {id:'c13',post:'b2',parent:null,body:'Better weather alerts on our phones in Malayalam would save lives. Many boats still go out without warnings.',name:'Xavier D.',author:'s_c13',ts:now-18*H,board:false},
      {id:'c14',post:'b2',parent:null,body:'Women in our village can process and dry fish if we get a common facility with cold storage.',name:'Bindu V.',author:'s_c14',ts:now-15*H,board:false},
      {id:'c15',post:'b2',parent:'c14',body:'Thank you. Which panchayat is this? We will share it with the working group on fisheries.',name:'State Planning Board',author:'board',ts:now-12*H,board:true},
      {id:'c16',post:'b3',parent:null,body:'Teach basic coding and data skills in every higher secondary school, not just in engineering colleges.',name:'Fathima K.',author:'s_c16',ts:now-40*H,board:false},
      {id:'c17',post:'b3',parent:null,body:'Older workers need retraining too. Please include short evening courses for people already working.',name:'Arun S.',author:'s_c17',ts:now-38*H,board:false},
      {id:'c18',post:'b4',parent:null,body:'More MEMU trains between towns would take thousands of cars off the road.',name:'Shameer A.',author:'s_c18',ts:now-70*H,board:false},
      {id:'c19',post:'b4',parent:null,body:'Both are possible if electric buses are run well. Fares must stay low though.',name:'Mary J.',author:'s_c19',ts:now-60*H,board:false},
      {id:'c12',post:'p13',parent:null,body:'Solar fencing worked in our area when the panchayat maintained it properly.',name:'Suresh P.',author:'s_c12',ts:now-90*H,board:false}
    ],likes:[],shares:[],
    updates:[{id:'u1',kind:'Consultation',cat:'',title:'Share your priorities for the 15th Five-Year Plan',body:'The Board is preparing the Fifteenth Five-Year Plan (2027-32). Post your concerns and ideas under any topic; recurring themes will go to the working groups.',pinned:true,ts:now-30*H,author:'board'}]};
  var L={b2:64,b3:112,b4:58,c13:21,c14:17,c15:9,c16:26,c17:14,c18:19,c19:8,b1:86,p1:14,p2:23,p3:9,p4:17,p5:6,p6:11,p7:19,p8:31,p9:12,p10:27,p11:8,p12:15,p13:22,p14:7,c1:4,c2:8,c3:3,c4:1,c5:12,c6:9,c7:15,c8:3,c9:6,c10:10},S={b2:18,b3:41,b4:15,b1:24,p1:3,p2:5,p4:2,p7:4,p8:9,p10:6,p13:3};
  Object.keys(L).forEach(function(t){for(var i=0;i<L[t];i++)d.likes.push({id:t+'__x'+i,t:t,u:'x'+i})});
  Object.keys(S).forEach(function(t){for(var i=0;i<S[t];i++)d.shares.push({id:t+'__s'+i,t:t,u:'x'+i,via:'link'})});
  return d;
}
/* ---------- local demo store ----------
   The Kerala Plan page used a shared database provided by its host. This static
   build keeps the same API (collection/add/doc.set/doc.delete/onSnapshot) but
   stores data in the visitor's browser. Swap it for a real backend to go live. */
var DB=(function(){
  var KEY='kerala-plan-v5',subs={},data=null;
  try{data=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  if(!data)data=seedData();
  ['posts','comments','likes','shares','updates'].forEach(function(k){data[k]=data[k]||[]});
  function save(){try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){}}
  function snap(n){return{docs:data[n].map(function(o){return{id:o.id,data:function(){return Object.assign({},o)}}})}}
  function emit(n){save();(subs[n]||[]).forEach(function(f){f(snap(n))});}
  function uid(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}
  window.addEventListener('storage',function(e){if(e.key!==KEY)return;try{data=JSON.parse(e.newValue)||data}catch(x){}Object.keys(subs).forEach(function(n){(subs[n]||[]).forEach(function(f){f(snap(n))})});});
  return{reset:function(){data=seedData();save();Object.keys(subs).forEach(function(n){(subs[n]||[]).forEach(function(f){f(snap(n))})});},
  collection:function(n){return{
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
  ['index.html#top','Home'],
  ['index.html#all','Topics',CATS.map(function(c){return['index.html#topic/'+c.id,c.name,c.id]})],
  ['index.html#all','All posts'],
  ['index.html#updates','Updates'],
  ['index.html#about-how','How it works'],
  ['index.html#about-rules','House rules']
];
function header(){
  var items=MENU.map(function(m){
    var dd=m[2]?'<ul class="dd">'+m[2].map(function(s){return '<li><a href="'+s[0]+'">'+(s[2]?ICON[s[2]]:'')+s[1]+'</a></li>'}).join('')+'</ul>':'';
    return '<li><a href="'+m[0]+'" data-nav="'+m[0].split('#')[1]+'">'+m[1]+'</a>'+dd+'</li>';
  }).join('');
  return '<a class="skip" href="#main">Skip to content</a>'+
  '<div class="topbar"><div class="wrap">'+
    '<div class="l"><span>Government of Kerala</span><span lang="ml">കേരള സർക്കാർ</span>'+
      '<span><svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"/></svg>0471 254 0208</span></div>'+
    '<div class="r" role="group" aria-label="Text size"><a href="contact.html#rti" style="margin-right:.6rem">RTI</a><a href="#main" style="margin-right:.8rem">Screen reader access</a>'+
      '<button type="button" data-fs="13px" aria-label="Smaller text">A-</button><button type="button" data-fs="15px" aria-label="Default text size">A</button><button type="button" data-fs="17px" aria-label="Larger text">A+</button></div>'+
  '</div></div>'+
  '<header class="hdr"><div class="wrap">'+
    '<a class="logo" href="index.html" aria-label="Plan Keralam home"><img src="assets/img/logo-plankeralam.png" alt="Plan Keralam" width="230" height="105"><span class="sub"><b>State Planning Board</b>Government of Kerala</span></a>'+
    '<a class="hbtn m" href="index.html#new" aria-label="New post">+ Post</a>'+
    '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>'+
    '<nav class="nav" id="nav" aria-label="Main"><ul>'+items+'</ul></nav>'+
    '<a class="hbtn" href="index.html#new">+ New post</a>'+
  '</div></header>';
}
function footer(){
  var t=CATS.map(function(c){return '<li><a href="index.html#topic/'+c.id+'">'+c.name+'</a></li>'}).join('');
  return '<footer class="ftr"><div class="wrap top">'+
    '<div><a class="logo" href="index.html" aria-label="Plan Keralam home"><img src="assets/img/logo-plankeralam-light.png" alt="Plan Keralam" width="230" height="105"><span class="sub"><b>State Planning Board</b>Government of Kerala</span></a>'+
      '<p>The State Planning Board shapes roads, schools, hospitals, water and more. This is where you tell it what daily life looks like on the ground.</p>'+
      '<p style="font-size:.85rem">Kerala State Planning Board, Pattom, Thiruvananthapuram, Kerala 695 004 · 0471 254 0208</p></div>'+
    '<div><h4>Plan Keralam</h4><ul><li><a href="index.html#all">Discussion</a></li><li><a href="index.html#new">Share your view</a></li><li><a href="index.html#updates">Board updates</a></li><li><a href="index.html#about-how">How it works</a></li><li><a href="index.html#about-rules">House rules</a></li></ul></div>'+
    '<div><h4>Topics</h4><ul class="cols2">'+t+'</ul></div>'+
    '<div><h4>State Planning Board</h4><ul><li><a href="about.html">About the Board</a></li><li><a href="plans.html">Plans</a></li><li><a href="publications.html">Publications</a></li><li><a href="notices.html">Notices &amp; Tenders</a></li><li><a href="contact.html">Contact &amp; RTI</a></li></ul></div>'+
  '</div><div class="bot"><div class="wrap"><span>© '+new Date().getFullYear()+' Kerala State Planning Board, Government of Kerala</span><span><a href="about.html">About the Board</a> · <a href="contact.html#rti">RTI</a> · <a href="contact.html">Contact</a></span></div></div></footer>'+
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
  {type:'News',date:'2026-11-03',title:'Plan Keralam: citizens invited to share priorities for the 15th Plan',body:'Share concerns, ideas and opinions on nine topics, from water and sanitation to governance and services.'},
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
    S.likes_n={};S.liked={};S.ccount={};S.shares_n={};
    S.likes.forEach(function(v){S.likes_n[v.t]=(S.likes_n[v.t]||0)+1;if(v.u===KP.UID)S.liked[v.t]=1;});
    S.shares.forEach(function(v){S.shares_n[v.t]=(S.shares_n[v.t]||0)+1;});
    S.comments.forEach(function(c){S.ccount[c.post]=(S.ccount[c.post]||0)+1;});
  },
  hot:function(S,p){return((S.likes_n[p.id]||0)+1+0.5*(S.ccount[p.id]||0)+(S.shares_n[p.id]||0))/Math.pow((Date.now()-p.ts)/36e5+2,1.4);},
  getName:function(){try{return localStorage.getItem('kp-name')||''}catch(e){return''}},
  setName:function(n){try{localStorage.setItem('kp-name',n)}catch(e){}},
  docs:function(s){return s.docs.map(function(d){var o=Object.assign({},d.data());o.id=d.id;return o;});}
};
})();
