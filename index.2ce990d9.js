var id,date,btn=!1,am=0;function infiloop(){am<100&&spawnTriangle()}function spawnTriangle(){return size=2+15*Math.random(),light=40+45*Math.random(),xpos=56*Math.random()-28,dur=8+5*Math.random(),newDiv=document.createElement("div"),newDiv.classList.add("triangle"),newDiv.style.setProperty("--base",size+"vw"),newDiv.style.setProperty("--light",light+"%"),newDiv.style.setProperty("--xpos",xpos+"rem"),newDiv.style.setProperty("--speed",dur+"s"),newDiv.style.setProperty("z-index",15-size),document.getElementById("circlebg").appendChild(newDiv),crutch=new workaround(newDiv),newDiv.addEventListener("animationend",crutch),newDiv}workaround=class{elem;constructor(e){this.elem=e,am++}handleEvent(){this.elem.remove(),am--}},document.getElementById("butt").addEventListener("click",(()=>{(btn=!btn)?(id=setInterval(infiloop,10),document.getElementById("butt").className="sbtne",document.getElementById("btntxt").innerHTML="Вырубить",document.getElementById("circleborder").style.animation="calc(60s / var(--bpm)) ease-out running infinite pulse",document.getElementById("maintxt").style.animation="calc(60s / var(--bpm)) ease-out running infinite pulse",document.title="♂Bondage gay website♂"):(clearInterval(id),document.getElementById("butt").className="sbtnd",document.getElementById("btntxt").innerHTML="Врубить",document.getElementById("circleborder").style.animation="none",document.getElementById("maintxt").style.animation="none")})),document.getElementById("arrow").addEventListener("click",(()=>{0==document.getElementById("root").style.getPropertyValue("--exp")?(document.getElementById("root").style.setProperty("--exp","17"),document.getElementById("arrow").style.transform="rotate(45deg)"):(document.getElementById("root").style.setProperty("--exp","0"),document.getElementById("arrow").style.transform="rotate(-135deg)")})),document.getElementById("btnplaypause").addEventListener("click",(()=>{"playing"==document.getElementById("playpause").className?document.getElementById("playpause").className="paused":document.getElementById("playpause").className="playing"})),setInterval((()=>{date=new Date,document.getElementById("datetime").innerHTML="Current time and date is: "+date.toISOString().substring(0,19).replace("T","_")}),500),document.getElementById("footp").innerHTML=document.getElementById("footp").innerHTML.replace("year",(new Date).getFullYear());
//# sourceMappingURL=index.2ce990d9.js.map
