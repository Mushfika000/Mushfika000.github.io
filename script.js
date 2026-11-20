(function(){
var r=document.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
document.querySelectorAll('.sw button').forEach(function(b){b.onclick=function(){r.setAttribute('data-neon',b.dataset.c);try{localStorage.setItem('neon',b.dataset.c)}catch(e){}}});
try{var s=localStorage.getItem('neon');if(s)r.setAttribute('data-neon',s)}catch(e){}
var P=document.getElementById('pts');
for(var i=0;i<18;i++){var p=document.createElement('span');p.className='pt';p.style.cssText='left:'+(Math.random()*100)+'%;--d:'+(10+Math.random()*14)+'s;--z:'+(2+Math.random()*3)+'px;animation-delay:-'+(Math.random()*20)+'s';P.appendChild(p)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var s=e.target;s.classList.add('in');io.unobserve(s);
s.querySelectorAll('.card').forEach(function(c,k){c.style.transitionDelay=(k*90)+'ms';setTimeout(function(){c.style.transitionDelay='';c.classList.add('done')},1000+k*90)})})},{threshold:.1});
document.querySelectorAll('section').forEach(function(e){io.observe(e)});
var W=['a Software Engineering Student','a Problem Solver','a Future Software Engineer','an Air Rover Scout'],wi=0,ci=0,dl=false,ty=document.getElementById('ty');
function tick(){var w=W[wi];ci+=dl?-1:1;ty.textContent=w.slice(0,ci);var d=dl?35:75;if(!dl&&ci===w.length){dl=true;d=1500}else if(dl&&ci===0){dl=false;wi=(wi+1)%W.length;d=300}setTimeout(tick,d)}
if(rm)ty.textContent=W[0];else tick();
if(fine&&!rm){
var cur=document.createElement('div');cur.className='cur';document.body.appendChild(cur);
var f=document.getElementById('frame'),raf=0,mx=0,my=0;
document.addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;if(!raf)raf=requestAnimationFrame(function(){raf=0;cur.style.transform='translate3d('+mx+'px,'+my+'px,0)';f.style.transform='rotateY('+((mx/innerWidth-.5)*22)+'deg) rotateX('+(-(my/innerHeight-.5)*22)+'deg)'})},{passive:true});
document.querySelectorAll('.card').forEach(function(c){var q=0;
c.addEventListener('pointermove',function(e){if(q)return;q=requestAnimationFrame(function(){q=0;var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform='perspective(800px) rotateY('+x*12+'deg) rotateX('+(-y*12)+'deg) translateZ(6px)'})},{passive:true});
c.addEventListener('pointerleave',function(){c.style.transform=''})})}

var EM='mushfikamayesha@gmail.com',KB=[
{k:['phone','mobile','whatsapp','father*','mother*','parent*','religion','weight','height','blood','birth*','dob','age','old','married','marital','family','nid'],a:"That personal detail is not shared on this portfolio, so I can't answer it. You can email her at "+EM+"."},
{k:['cgpa','salary','expected','relocate','relocation','expectation'],a:"That isn't listed on this portfolio, so I can't answer it and I won't guess. Please contact her directly at "+EM+"."},
{k:['python','java','php','react','node*','django','flutter','android','c++','cpp','machine','ml','data','figma','docker','linux','git'],a:"That isn't listed in her skills on this portfolio, so I can't say she has it. Her listed skills are C Programming, Microsoft Word, PowerPoint, Excel, Adobe Photoshop and Bengali & English typing. This portfolio itself is built with HTML, CSS and JavaScript."},
{k:['contact','email','mail','reach','github','linkedin','hire','message','connect'],a:"Email: "+EM+"\nGitHub: github.com/Mushfika000\nLocation: Bogura Sadar, Bogura, Bangladesh\nNo LinkedIn profile is listed, and her phone number is not shared publicly."},
{k:['skill*','good at','c programming','tools','software','abilities','ability','strength*','communication','leadership'],a:"Computer skills: Microsoft Word, Microsoft PowerPoint, Microsoft Excel, Adobe Photoshop (editing), C Programming Language, Bengali & English typing.\nPersonal skills: Time Management, Design, Leadership, Problem Solving, Good Communication.\nLanguages: Bangla (native), English, Hindi."},
{k:['education','academic*','study','studies','studying','university','diu','batch','hsc','ssc','psc','jsc','school','college','degree','bsc','gpa','result*','grade*','semester'],a:"BSc in Software Engineering, Daffodil International University (Batch 44, ongoing).\nHSC (Science): Government Mujibur Rahman Women's College, Bogura, Rajshahi Board, GPA 4.92.\nSSC (Science): BIAM Model School and College, Bogura, Rajshahi Board, GPA 5.00.\nPSC and JSC: GPA 5.00 each."},
{k:['project*','capstone','banking','bank','inspection','building','built','made','develop*','github'],a:"1. Banking Transaction System (capstone project)\n2. Computer Based Building Inspection System\n3. This personal portfolio website (HTML, CSS, JavaScript)\nMore on GitHub: github.com/Mushfika000\nI don't have more technical details than what the Projects section shows."},
{k:['certificate*','certification*','course*','training','sql','intellipaat','digital marketing','computer basic','jota','joti','jamboree'],a:"Courses: Computer Basic Course (Level 1), Digital Marketing Course, Free SQL Certification Course (Intellipaat Academy), Air Rover Scouting Basic Course, Air Rover Scouting Mate Course.\nEvent: JOTA-JOTI 2026 (Jamboree on the Air - Jamboree on the Internet).\nAcademic certificates: PSC, JSC, SSC (GPA 5.00 each) and HSC (GPA 4.92)."},
{k:['scout*','air rover','rover','mate'],a:"She is an Air Rover Scout member. She completed the Basic Course and the Mate Course in Air Rover Scouting, and took part in JOTA-JOTI 2026 (16-18 October 2026)."},
{k:['experience','internship','intern','job','work','worked','available','opportunity','opportunities','hiring'],a:"She has no professional work experience yet and is looking for a Software Engineering internship. Her projects and Air Rover Scouting activities show her practical experience so far."},
{k:['achievement*','award*','win','won','proud','best'],a:"GPA 5.00 in PSC, JSC and SSC; GPA 4.92 in HSC; participation in the worldwide JOTA-JOTI 2026 Scout event."},
{k:['hobby','hobbies','interest*','free time','fun','like'],a:"Her hobbies are Gardening, Cooking, Watching Movies and Travelling."},
{k:['language*','bangla','bengali','english','hindi','speak'],a:"She speaks Bangla (native), English and Hindi, and types in both Bengali and English."},
{k:['goal*','future','plan*','dream','objective','career','aim'],a:"Her goals are to complete her BSc, build real-world projects, learn web and software development in depth, and start her career as a software engineer. She is currently looking for an internship."},
{k:['cv','resume','download'],a:"You can download her CV with the Download CV button at the top of this page."},
{k:['where','location','live','from','city','bogura'],a:"The location listed on this portfolio is Bogura Sadar, Bogura, Bangladesh."},
{k:['ai','bot','chatgpt','gpt','llm','claude','robot'],a:"This portfolio was built with help from AI tools. I'm a simple assistant built into the website: I answer only from the information on this portfolio, not from the internet."},
{k:['html','css','javascript','js','technology','technologies','tech','stack','website','deployed','responsive'],a:"This portfolio is built with HTML, CSS and JavaScript, with help from AI tools, and works on mobile and laptop."},
{k:['who','about','introduce','introduction','summary','profile','describe','mushfika','zannat','name','yourself'],a:"Mst. Mushfika Zannat is a BSc Software Engineering student at Daffodil International University (Batch 44). She is organised, hard-working, a good listener and learner, and works well in a group or alone. She is also an Air Rover Scout member."},
{k:['thanks','thank','thx','ok','great','nice','wow'],a:"You're welcome! Ask me anything else about her portfolio."},
{k:['hi','hello','hey','salam','assalamu*','hola'],a:"Hello! Ask me about Mushfika's skills, education, projects, certificates, Air Rover Scouting or contact details."}
],FB="I couldn't find that in this portfolio, so I won't guess.\nI can answer about: skills, education, projects, certificates, Air Rover Scouting, achievements, hobbies, goals and contact details.\nFor anything else, email "+EM+".";
function norm(s){return ' '+s.toLowerCase().replace(/[^a-z0-9+ ]+/g,' ').replace(/\s+/g,' ').trim()+' '}
function answer(q){var n=norm(q),best=null,bs=0;KB.forEach(function(e){var s=0;e.k.forEach(function(w){var st=w.slice(-1)==='*',x=st?w.slice(0,-1):w,h=st?n.indexOf(' '+x)>-1:n.indexOf(' '+x+' ')>-1;if(h)s+=w.indexOf(' ')>-1?2:1});if(s>bs){bs=s;best=e}});return best?best.a:FB}
var chat=document.getElementById('chat'),fab=document.getElementById('askFab'),chm=document.getElementById('chm'),ci=document.getElementById('ci'),started=false;
function add(c,t){var d=document.createElement('div');d.className='msg '+c;d.textContent=t;chm.appendChild(d);chm.scrollTop=chm.scrollHeight;return d}
function ask(q){q=q.trim();if(!q)return;add('me',q);var b=add('bot','');b.innerHTML='<span class="dots"><span></span><span></span><span></span></span>';setTimeout(function(){b.textContent=answer(q);chm.scrollTop=chm.scrollHeight},rm?0:550)}
function openChat(){chat.hidden=false;fab.hidden=true;if(!started){started=true;add('bot',"Hi! I'm Mushfika's portfolio assistant.\nI can answer about her skills, education, projects, certificates, Air Rover Scouting, goals and contact details.\nI can't answer anything that isn't on this portfolio (like her phone number or family details), and I don't give opinions or general knowledge.");
var ch=document.getElementById('chips');['What are her skills?','Tell me about her projects','Certificates','Air Rover Scouting','How to contact her?'].forEach(function(q){var b=document.createElement('button');b.type='button';b.textContent=q;b.onclick=function(){ask(q)};ch.appendChild(b)})}
if(fine)ci.focus()}
function closeChat(){chat.hidden=true;fab.hidden=false}
document.getElementById('askOpen').onclick=openChat;fab.onclick=openChat;document.getElementById('askClose').onclick=closeChat;
document.getElementById('cf').onsubmit=function(e){e.preventDefault();ask(ci.value);ci.value=''};
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!chat.hidden)closeChat()});
document.getElementById('f').onsubmit=function(e){e.preventDefault();
location.href='mailto:mushfikamayesha@gmail.com?subject='+encodeURIComponent(document.getElementById('ms').value||'Portfolio message')+'&body='+encodeURIComponent('From: '+document.getElementById('nm').value+'\n\n'+document.getElementById('tx').value)};
})();
