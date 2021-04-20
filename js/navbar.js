// This is a hack, please let me know if this breaks in some setting // William
// https://stackoverflow.com/questions/57176001/setting-active-class-when-loading-navbar-through-jquery



function addNavBar() {

    let navigation = {
        "Home": "index.html",
        "Flavour": "flavour.html",
        "Clicker": "clicker.html",
        "Survey": "survey.html"
    };

    let navbar = document.getElementById("navbar");
    
    for (let key in navigation) {
        let value = navigation[key];
        let element = document.createElement("a");
        element.textContent = key;
        element.href = value;
        navbar.appendChild(element);
        console.log(key);
        console.log(value)
    }

    setCorrectNavBarItemAsActive();

}

function setCorrectNavBarItemAsActive() {
    let array = document.getElementById("navbar").children;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.className += (element.hasAttribute("href") && element.href.includes(location.pathname)) ? "active" : ""
    }
}