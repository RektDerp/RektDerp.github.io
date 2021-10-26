
workaround = class{
  elem;
  constructor(e){
    this.elem = e;
  }
  handleEvent(){
    this.elem.remove();
    console.log('destroyed');
  }
}

document.getElementById("butt").addEventListener("click",() => {
  spawnTriangle();
});

function spawnTriangle(){
  size = 2 + Math.random() * 15;
  light = 40 + Math.random() * 55;
  xpos = Math.random() * 28;
  dur = 4 + Math.random() * 5;

  newDiv = document.createElement("div");
  newDiv.classList.add('triangle');
  newDiv.style.setProperty('--base', size + 'vw');
  newDiv.style.setProperty('--light', light + '%');
  newDiv.style.setProperty('--xpos', xpos + 'vw');
  newDiv.style.setProperty('--speed', dur + 's');
  console.log('size ' + size + ', light ' + light + ', xpos ' + xpos);
  document.getElementById('parent').appendChild(newDiv);
  crutch = new workaround(newDiv);
  newDiv.addEventListener('animationend', crutch);

  return newDiv;
}
