parent = document.getElementById('parent');

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

//spawnTriangle();

/*
for(let i = 0; i < 100; i++){
  newDiv = document.createElement("div");
  newDiv.classList.add('triangle');
  document.getElementById('parent').appendChild(newDiv);
}


let elements = document.getElementsByClassName('triangle');

var size = 20;
var light;
var xpos;
var dur;


for(let i = 0; i < elements.length; i++){
  size = size - Math.random() * 5;
  light = 40 + Math.random() * 55;
  xpos = Math.random() * 28;
  dur = 5 + Math.random() * 4;
  elements[i].style.setProperty('--base', size + 'vw');
  elements[i].style.setProperty('--light', light + '%');
  elements[i].style.setProperty('--xpos', xpos + 'vw');
  elements[i].style.setProperty('--speed', dur + 's');
  console.log(i + '. size ' + size + ', light ' + light + ', xpos ' + xpos);

  var delegate = function(element){
    element.remove();
  }
  setTimeout(delegate, (dur) * 1000, elements[i]);
};
*/
