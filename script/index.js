var loc = "";
var flg = Boolean(false);
navigator.geolocation.getCurrentPosition((pos)=>{loc = pos.coords.latitude + " " + pos.coords.longitude + " acc " +  pos.coords.accuracy; document.getElementById("txt").innerHTML = loc; flg = true});
console.log(loc);
let data = "Sraka";

(function(){
    const sas = document.querySelector("sas");
    sas.addEventListener("click", () => {console.log("a");});
})();
