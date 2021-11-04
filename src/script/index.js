var btn = false;
var am = 0;
var id;

workaround = class{
  elem;
  constructor(e){
    this.elem = e;
    am++;
  }
  handleEvent(){
    this.elem.remove();
    am--;
    //console.log('destroyed');
  }
}

function infiloop(){
  if(am < 100){
    spawnTriangle();
  }
}

document.getElementById("butt").addEventListener("click",() => {
  btn = !btn;
  if(btn){
    id = setInterval(infiloop, 10);
    document.getElementById("butt").className = 'sbtne';
    document.getElementById("btntxt").innerHTML = 'Вырубить';
    document.getElementById('circleborder').style.animation = 'calc(60s / var(--bpm)) ease-out running infinite pulse';
    document.getElementById('maintxt').style.animation = 'calc(60s / var(--bpm)) ease-out running infinite pulse';
  }
  else {
    clearInterval(id);
    document.getElementById("butt").className = 'sbtnd';
    document.getElementById("btntxt").innerHTML = 'Врубить';
    document.getElementById('circleborder').style.animation = 'none';
    document.getElementById('maintxt').style.animation = 'none';
  }
});

function spawnTriangle(){
  size = 2 + Math.random() * 15;
  light = 40 + Math.random() * 45;
  xpos = -28 + Math.random() * 56;
  dur = 8 + Math.random() * 5;

  newDiv = document.createElement("div");
  newDiv.classList.add('triangle');
  newDiv.style.setProperty('--base', size + 'vw');
  newDiv.style.setProperty('--light', light + '%');
  newDiv.style.setProperty('--xpos', xpos + 'rem');
  newDiv.style.setProperty('--speed', dur + 's');
  newDiv.style.setProperty('z-index', 15 - size);
  //console.log('size ' + size + ', light ' + light + ', xpos ' + xpos);
  document.getElementById('circlebg').appendChild(newDiv);
  crutch = new workaround(newDiv);
  newDiv.addEventListener('animationend', crutch);

  return newDiv;
}

document.getElementById('arrow').addEventListener('click',()=>{
  if(document.getElementById('root').style.getPropertyValue('--exp') == 0){
    document.getElementById('root').style.setProperty('--exp', '17');
    document.getElementById('arrow').style.transform = 'rotate(45deg)';
  }
  else {
    document.getElementById('root').style.setProperty('--exp', '0');
    document.getElementById('arrow').style.transform = 'rotate(-135deg)';
  }
});

document.getElementById('btnplaypause').addEventListener('click', ()=>{
    if(document.getElementById('playpause').className == 'playing'){
      document.getElementById('playpause').className = 'paused';
    }
    else{
      document.getElementById('playpause').className = 'playing';
    }
});

var date;

setInterval(()=>{
  date = new Date();  
  document.getElementById('datetime').innerHTML = 'Current time and date is: ' + date.toISOString().substring(0,19).replace('T', '_');
}, 500);


document.getElementById('footp').innerHTML = document.getElementById('footp').innerHTML.replace('year', new Date().getFullYear());