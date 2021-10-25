document.getElementById("butt").addEventListener("click", function () {
  alert("sas");
});










let elements = document.getElementsByClassName('triangle');

var size = 20;
var light;
var xpos;
var dur;
for(let i = 0; i < elements.length; i++){
  size = size - Math.random() * 5;
  light = 40 + Math.random() * 55;
  xpos = Math.random() * 28;
  dur = 3 + Math.random() * 6;
  console.log(i + '. size ' + size + ', light ' + light + ', xpos ' + xpos);
  elements[i].style.setProperty('--base', size + 'vw');
  elements[i].style.setProperty('--light', light + '%');
  elements[i].style.setProperty('--xpos', xpos + 'vw');
  elements[i].style.setProperty('--speed', dur + 's');
};
