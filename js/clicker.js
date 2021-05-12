var adder = 1;
var clicks = 0;
var persec = 0.5;
var upp1c = 0;
var upp2c = 0;
var upp3c = 0;
var upp4c = 0;
var upp5c = 0;
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
    let upp1 = document.getElementById("upp1")
    if(clicks >= 15 && upp1c == 0){
        adder = adder + 1
        upp1.style.backgroundColor = "greenyellow"
        clicks = clicks -15
        counter.innerHTML = clicks
        upp1c = upp1c + 1
    }
    else if(clicks < 15 && upp1c == 1) {
        adder = adder
        upp1.style.backgroundColor = "red"
    }
}
function upp2(){
    let upp2 = document.getElementById("upp2")
    if(clicks >=50 && upp2c == 0){
        adder = adder + 1
        upp2.style.backgroundColor = "greenyellow"
        clicks = clicks -50
        counter.innerHTML = clicks
        upp2c = upp2c + 1
    }
    else if(clicks < 50 && upp2c == 1){
        adder = adder
        upp2.style.backgroundColor ="red"
    }
}
function upp3(){
    let upp3 = document.getElementById("upp3")
    if(clicks >=50 && upp3c == 0){
        adder = adder + 1
        upp3.style.backgroundColor = "greenyellow"
        clicks = clicks -50
        counter.innerHTML = clicks
        upp3c = upp3c + 1
    }
    else if(clicks < 50 && upp3c == 1){
        adder = adder
        upp2.style.backgroundColor ="red"
    }
}
function upp5(){
    let upp5 = document.getElementById("upp5")
    if(clicks >= 10 && upp5c == 0){
        clicks = clicks - 10
        counter.innerHTML = clicks
        document.getElementById("clickerGame").src = "https://www.cloetta.se/imagecache/7ik10o5uxbre0fy1emgm/07310350132904_C1N1.jpg"
        setInterval(()=>{clicks = clicks + persec
        counter.innerHTML = clicks},1000)   
        upp5.style.backgroundColor = "greenyellow"
        upp5c = upp5c + 1
    }
}


