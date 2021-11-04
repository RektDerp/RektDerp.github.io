var btn = false;
var am = 0;
var id;
var fl;
var c = false;
var date;

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

document.getElementById('circleborder').addEventListener('animationend', ()=>{
  document.getElementById('circleborder').classList.remove('pulsating');
});

document.getElementById('maintxt').addEventListener('animationend', ()=>{
  document.getElementById('maintxt').classList.remove('pulsating');
});


document.getElementById("butt").addEventListener("click",() => {
  btn = !btn;
  if(btn){
    id = setInterval(infiloop, 10);
    fl = setInterval(()=>{
      document.getElementById('circleborder').classList.add('pulsating');
      document.getElementById('maintxt').classList.add('pulsating');
      if(c){
        document.getElementById('flashl').classList.add('flashactive');
        c = !c;
      }
      else{
        document.getElementById('flashr').classList.add('flashactive');
        c = !c;
      }
  
    }, (60 / 140) * 1000);
    document.getElementById("butt").className = 'sbtne';
    document.getElementById("btntxt").innerHTML = 'Вырубить';                                                                                                                                  document.title = '♂Bondage gay website♂';
  }
  else {
    clearInterval(id);
    clearInterval(fl);
    document.getElementById("butt").className = 'sbtnd';
    document.getElementById("btntxt").innerHTML = 'Врубить';
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

document.getElementById('flashl').addEventListener('animationend',()=>{
  document.getElementById('flashl').classList.remove('flashactive');
});

document.getElementById('flashr').addEventListener('animationend',()=>{
  document.getElementById('flashr').classList.remove('flashactive');
});

document.getElementById('btnplaypause').addEventListener('click', ()=>{
    if(document.getElementById('playpause').className == 'playing'){
      document.getElementById('playpause').className = 'paused';
      
    }
    else{
      document.getElementById('playpause').className = 'playing';
      document.getElementById('flashr').classList.add('flashactive');
    }
});

setInterval(()=>{
  date = new Date();  
  document.getElementById('datetime').innerHTML = 'Current time and date is: ' + date.toISOString().substring(0,19).replace('T', '_');
}, 500);

document.getElementById('footp').innerHTML = document.getElementById('footp').innerHTML.replace('year', new Date().getFullYear());

