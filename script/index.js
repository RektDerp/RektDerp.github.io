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
  }
  else {
    clearInterval(id);
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
  document.getElementById('parent').appendChild(newDiv);
  crutch = new workaround(newDiv);
  newDiv.addEventListener('animationend', crutch);

  return newDiv;
}
