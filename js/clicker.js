var adder = 1;
var clicks = 0;
function addBilar(){
    clicks = clicks + adder
    counter.innerHTML = clicks
    let element = document.getElementById("clickerGame")
    element.classList.remove("clickAni")
    //very important trigger DOM reflow
    element.focus();
    element.classList.add("clickAni")
}

