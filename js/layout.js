let imgMenu = document.getElementById("cMenu");

imgMenu.addEventListener("click", function (e) {
    let aside = document.getElementsByTagName("aside");
    let scRes = window.matchMedia("(max-width: 500px)");

    let aFooter = document.getElementById("aFooter");
    aFooter.style.top = `${window.innerHeight - aFooter.offsetHeight}px`;


    if(scRes.matches) {
        aside[0].style.width = "60vw";
        e.stopPropagation();
    } else {
        aside[0].style.width = "25vw";
        e.stopPropagation();
    }
}, true);

//========================================================
let aside = document.getElementsByTagName("aside");

aside[0].addEventListener("click", function(e) {
    e.stopPropagation();
})

document.body.addEventListener("click", function(e) {
    let aside = document.getElementsByTagName("aside");
    aside[0].style.width = "0vw";
})

window.onscroll = function () {
    let aside = document.getElementsByTagName("aside");
    aside[0].style.width = "0vw";
}