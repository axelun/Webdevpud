var adder = 1;
var clicks = 0;
var persec = 0;
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
    let perclick = document.getElementById("midtxt")
    if(clicks >= 150 && upp1c == 0){
        adder = adder + 1
        upp1.style.backgroundColor = "greenyellow"
        clicks = clicks -150
        counter.innerHTML = clicks
        upp1c = upp1c + 1
        perclick.innerHTML = "Per click: " + adder
    }
    else if(clicks < 150 && upp1c == 1) {
        adder = adder
        upp1.style.backgroundColor = "red"
    }
}
function upp2(){
    let upp2 = document.getElementById("upp2")
    let perclick = document.getElementById("midtxt")
    if(clicks >=300 && upp2c == 0){
        adder = adder + 1
        upp2.style.backgroundColor = "greenyellow"
        clicks = clicks -300
        counter.innerHTML = clicks
        upp2c = upp2c + 1
        perclick.innerHTML = "Per click: " + adder
    }
    else if(clicks < 300){
        adder = adder
        upp2.style.backgroundColor ="red"
    }
}
function upp3(){
    let upp3 = document.getElementById("upp3")
    let perclick = document.getElementById("midtxt")
    if(clicks >=1000 && upp3c == 0){
        adder = adder + 1
        upp3.style.backgroundColor = "greenyellow"
        clicks = clicks -1000
        counter.innerHTML = clicks
        upp3c = upp3c + 1
        perclick.innerHTML = "Per click: " + adder
    }
    else if(clicks < 1000 && upp3c == 1){
        adder = adder
        upp2.style.backgroundColor ="red"
    }
}
function upp4(){
    let upp4 = document.getElementById("upp4")
    let persecshow = document.getElementById("midtxt2")
    if(clicks >= 800 && upp4c ==0){
        clicks = clicks - 800
        counter.innerHTML = clicks
        upp4.style.backgroundColor = "greenyellow"
        if(persec == 0){
           persec = persec + 0.5 
           persecshow.innerHTML = "Per sekund: " + persec
            setInterval(()=>{clicks = clicks + persec
            counter.innerHTML = clicks},1000) 
        }
        else{
            persec = persec + 0.5
            persecshow.innerHTML = "Per sekund: " + persec
        }
    }
}
function upp5(){
    let upp5 = document.getElementById("upp5")
    let persecc = document.getElementById("midtxt2")
    if(clicks >= 1500 && upp5c == 0){
        clicks = clicks - 1500
        counter.innerHTML = clicks
        document.getElementById("clickerGame").src = "https://www.cloetta.se/imagecache/7ik10o5uxbre0fy1emgm/07310350132904_C1N1.jpg"
        document.getElementById("header1").style.backgroundColor = "orange"
        document.getElementById("header2").style.backgroundColor = "orange"
        document.getElementById("bottom").style.backgroundColor = "orange"
        document.getElementById("info").style.backgroundColor = "orange"
        if(persec > 0){
            persec = persec + 1 
            persecc.innerHTML = "Per sekund: " + persec
        }
        else{
            persec = persec + 1
            persecc.innerHTML = "Per sekund: " + persec
            setInterval(()=>{clicks = clicks + persec
            counter.innerHTML = clicks},1000)  
        }
 
        upp5.style.backgroundColor = "greenyellow"
        upp5c = upp5c + 1
    }
}


