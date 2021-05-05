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
function upp1(){
    
    if(clicks >= 150 && adder == 1){
        adder = adder + 1
        document.getElementById("upp1").style.backgroundColor = "greenyellow"
        clicks = clicks -150
    }
    else if(adder == 2){
        document.getElementById("upp1").style.backgroundColor = "greenyellow"
    }
    else {
        adder = adder
        document.getElementById("upp1").style.backgroundColor = "red"
    }
}


