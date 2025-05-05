function toggleMenu() {
    const link = document.getElementById("menubutton-link");
    const navbar = document.getElementById("navbar");

    if (navbar.style.display == "none") {
        navbar.style.display = "flex";
        link.innerText = "X";
    } else {
        navbar.style.display = "none";
        link.innerText = "Menu";
    };
};

function setResponse() {
    const menubutton = document.getElementById("menubutton");
    const link = document.getElementById("menubutton-link");
    const navbar = document.getElementById("navbar");

    if (window.innerWidth >= 700) {
        menubutton.style.display = "none";
        navbar.style.display = "flex";
    } else if (window.innerWidth < 700) {
        menubutton.style.display = "block";
        link.innerText = "Menu";
        navbar.style.display = "none";
    };
};

document.addEventListener("DOMContentLoaded", setResponse)
window.addEventListener("resize", setResponse)