/* Public Pulse: three-question demo poll with live tallies and optional voice notes.
   Starting tallies are sample data. Choices and recordings stay in this tab only. */
(function(){
var TOPICS=[
 {id:'health',name:'Health',forum:'health',qs:[
  ['Which health service needs most attention locally?',[['Family health centre staffing',35],['Specialist care closer to home',26],['Medicine availability',24],['Emergency transport',16]]],
  ['What would make it easier to see a doctor?',[['Evening OP hours',31],['Online appointment booking',28],['More doctors at family health centres',27],['Mobile clinics for remote areas',15]]],
  ['Which group needs more support first?',[['Elderly people living alone',38],['People with kidney or heart disease',25],['Mothers and newborns',20],['People with mental health needs',18]]]]},
 {id:'jobs',name:'Jobs',forum:'housing',qs:[
  ['What would help young people find good jobs in Kerala?',[['Skills linked to local industries',33],['More start-up and IT parks',27],['Apprenticeships with employers',24],['Timely government job notifications',17]]],
  ['Which skill should every student learn?',[['Digital and AI basics',36],['Spoken English and communication',25],['Trades: electrical, plumbing, repair',22],['Money management',18]]],
  ['What would help small businesses most?',[['Easier loans',34],['Single-window licences',29],['Local markets and fairs',21],['Training in online selling',17]]]]},
 {id:'climate',name:'Climate & water',forum:'environment',qs:[
  ['What climate risk worries you most where you live?',[['Flooding',37],['Summer drinking-water shortage',28],['Landslides',19],['Extreme heat',17]]],
  ['How should Kerala secure drinking water?',[['Rainwater harvesting in every building',34],['Protect wells and ponds',29],['Expand piped supply',24],['Reuse grey water',14]]],
  ['What should be done first before the monsoon?',[['Clear drains and culverts',39],['Repair river bunds',24],['Early-warning alerts by phone',22],['Move people out of high-risk zones',16]]]]},
 {id:'transport',name:'Transport',forum:'roads',qs:[
  ['Which change would improve your daily commute most?',[['More frequent buses',36],['Better roads and footpaths',27],['Last-mile feeder autos',21],['Safer cycling lanes',17]]],
  ['Affordability or sustainability: what matters more?',[['Low fares',38],['Both, with subsidies',28],['Electric buses',26],['Faster journeys',9]]],
  ['Where should rail investment go first?',[['More MEMU suburban trains',35],['Better station access',24],['Freight to cut truck traffic',22],['High-speed corridor',20]]]]}
];
var root=document.getElementById('pulse-card');if(!root)return;
var S={t:0,q:0,done:false,choice:{},notes:{},rec:null};
function key(){return TOPICS[S.t].id+':'+S.q;}
function el(tag,attrs,html){var e=document.createElement(tag);for(var k in attrs||{}){if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),attrs[k]);else if(attrs[k]!=null&&attrs[k]!==false)e.setAttribute(k,attrs[k]===true?'':attrs[k]);}if(html!=null)e.innerHTML=html;return e;}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]});}
function counts(){var q=TOPICS[S.t].qs[S.q],c=q[1].map(function(o){return o[1]}),ch=S.choice[key()];if(ch!=null)c[ch]++;return c;}
function pct(n,t){return t?(Math.round(n/t*1000)/10).toFixed(1)+'%':'0%';}
var MIC='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>';

function stopRec(){if(S.rec&&S.rec.mr&&S.rec.mr.state!=='inactive')S.rec.mr.stop();}
function render(){
  var T=TOPICS[S.t];root.textContent='';
  var top=el('div',{class:'pc-top'});top.append(el('span',{class:'pc-lbl'},'Choose a topic to explore'),el('span',{class:'pc-live'},'<i></i>Live demo result'));
  var chips=el('div',{class:'pc-chips',role:'group','aria-label':'Topic'});
  TOPICS.forEach(function(t,i){chips.append(el('button',{type:'button','aria-pressed':String(i===S.t),onclick:function(){stopRec();S.t=i;S.q=0;S.done=false;render();}},esc(t.name)));});
  root.append(top,chips);
  if(S.done){renderDone();return;}
  var q=T.qs[S.q],c=counts(),tot=c.reduce(function(a,b){return a+b},0),ch=S.choice[key()];
  var prog=el('div',{class:'pc-prog'});prog.append(el('span',null,'Question '+(S.q+1)+' of 3'),el('span',null,esc(T.name)));
  var bars=el('div',{class:'pc-bars','aria-hidden':'true'});for(var i=0;i<3;i++)bars.append(el('span',{class:i<=S.q?'on':''}));
  var h=el('h2',{class:'pc-q',id:'pc-q'},esc(q[0]));
  var fs=el('fieldset',{class:'pc-opts','aria-labelledby':'pc-q'});
  q[1].forEach(function(o,i){
    var lab=el('label',{class:'pc-opt'+(ch===i?' sel':'')});
    var inp=el('input',{type:'radio',name:'pc-'+key(),value:String(i)});inp.checked=ch===i;
    inp.addEventListener('change',function(){S.choice[key()]=i;render();var f=root.querySelector('input:checked');if(f)f.focus();});
    lab.append(inp,el('span',{class:'t'},esc(o[0])),el('span',{class:'p'},pct(c[i],tot)),el('span',{class:'bar'},'<i style="width:'+(tot?c[i]/tot*100:0)+'%"></i>'));
    if(ch===i)lab.append(el('span',{class:'you'},'Your choice'));
    fs.append(lab);
  });
  root.append(prog,bars,h,fs,voice(ch!=null));
  var foot=el('div',{class:'pc-foot'});
  foot.append(el('button',{type:'button',class:'pc-next',onclick:next},S.q<2?'Next question':'See my results'),el('span',{class:'pc-count'},tot+' preview responses'));
  var st=el('p',{class:'pc-status',role:'status','aria-live':'polite',id:'pc-status'},ch==null?'Question '+(S.q+1)+' of 3. Choose one answer to continue.':'Thanks. You can add a voice note or go to the '+(S.q<2?'next question.':'results.'));
  root.append(foot,st,el('p',{class:'pc-fine'},'The starting tally is sample data. Voice notes remain in this tab and disappear on refresh; nothing is uploaded.'));
}
function next(){
  if(S.choice[key()]==null){var s=document.getElementById('pc-status');s.textContent='Please choose one answer to continue.';var f=root.querySelector('.pc-opt input');if(f)f.focus();return;}
  stopRec();
  if(S.q<2){S.q++;render();var f=root.querySelector('.pc-opt input');if(f)f.focus();}
  else{S.done=true;render();}
}
function renderDone(){
  var T=TOPICS[S.t],box=el('div',{class:'pc-done'});
  box.append(el('div',{class:'pc-prog'},'<span>Your results</span><span>'+esc(T.name)+'</span>'),el('div',{class:'pc-bars','aria-hidden':'true'},'<span class="on"></span><span class="on"></span><span class="on"></span>'));
  box.append(el('h3',null,'Thank you. Here is how your view compares.'));
  var ol=el('ol');
  T.qs.forEach(function(q,qi){
    var k=T.id+':'+qi,ch=S.choice[k];if(ch==null)return;
    var c=q[1].map(function(o){return o[1]});c[ch]++;var tot=c.reduce(function(a,b){return a+b},0);
    var li=el('li',null,'<b>'+esc(q[0])+'</b>You chose “'+esc(q[1][ch][0])+'”, along with '+pct(c[ch],tot)+' of preview responses.'+(S.notes[k]?' Voice note saved in this tab.':''));
    ol.append(li);
  });
  box.append(ol);
  var row=el('div',{class:'row'});
  var nt=TOPICS[(S.t+1)%TOPICS.length];
  row.append(el('a',{class:'pc-next',href:'#topic/'+T.forum,style:'text-decoration:none'},'Discuss in the forum'),
    el('button',{type:'button',class:'pc-ghost',onclick:function(){S.t=(S.t+1)%TOPICS.length;S.q=0;S.done=false;render();}},'Try '+esc(nt.name)));
  box.append(row,el('p',{class:'pc-fine',style:'margin-top:1rem'},'Illustrative results. No public vote is submitted.'));
  root.append(box);
}

/* voice note */
function voice(enabled){
  var k=key(),box=el('div',{class:'pc-voice'});
  var head=el('div',{class:'pc-vh'});head.append(el('span',{class:'pc-mic','aria-hidden':'true'},MIC),el('div',null,'<b>Tell us why you chose this</b><small>Optional voice note for this question · up to 60 seconds</small>'));
  box.append(head);
  var row=el('div',{class:'pc-vrow'}),hint=el('p',{class:'pc-vhint'});
  var supported=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&window.MediaRecorder);
  var live=S.rec&&S.rec.key===k;
  if(S.notes[k]&&!live){
    row.append(el('audio',{controls:true,src:S.notes[k],preload:'metadata','aria-label':'Your voice note'}),
      el('button',{type:'button',class:'pc-rec',onclick:function(){URL.revokeObjectURL(S.notes[k]);delete S.notes[k];render();}},'Delete'));
    hint.textContent='Saved in this tab only. It disappears when you refresh.';
  }else{
    var btn=el('button',{type:'button',class:'pc-rec'+(live?' live':''),disabled:!enabled||!supported},live?'Stop recording':'Record opinion');
    btn.addEventListener('click',function(){live?stopRec():start(k);});
    row.append(btn);
    if(live)row.append(el('span',{class:'pc-timer',id:'pc-timer'},fmt(S.rec.sec)));
    hint.textContent=!supported?'Voice notes are not supported in this browser.':(!enabled?'Choose an answer to enable recording. The note stays in this tab.':(live?'Recording… press Stop when you are done.':'Your browser will ask for microphone permission.'));
  }
  box.append(row,hint);return box;
}
function fmt(s){return '0:'+(s<10?'0':'')+s+' / 1:00';}
async function start(k){
  var stream;
  try{stream=await navigator.mediaDevices.getUserMedia({audio:true});}
  catch(e){var h=root.querySelector('.pc-vhint');if(h)h.textContent='Microphone access was blocked. You can still answer without a voice note.';return;}
  var chunks=[],mr=new MediaRecorder(stream);
  S.rec={key:k,mr:mr,sec:0};
  mr.ondataavailable=function(e){if(e.data.size)chunks.push(e.data)};
  mr.onstop=function(){
    clearInterval(S.rec&&S.rec.iv);stream.getTracks().forEach(function(t){t.stop()});
    if(chunks.length){if(S.notes[k])URL.revokeObjectURL(S.notes[k]);S.notes[k]=URL.createObjectURL(new Blob(chunks,{type:mr.mimeType||'audio/webm'}));}
    S.rec=null;render();
  };
  mr.start();
  S.rec.iv=setInterval(function(){if(!S.rec)return;S.rec.sec++;var t=document.getElementById('pc-timer');if(t)t.textContent=fmt(S.rec.sec);if(S.rec.sec>=60)stopRec();},1000);
  render();
}
render();
})();
