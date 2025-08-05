function setResponse() {
  const menu_button = document.getElementById("menu-button");
  const menu_container = document.getElementById("main-menu");
  if (window.innerWidth < 700) {
    menu_button.style.display = "block";
  } else {
    menu_button.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menu_button = document.getElementById("menu-button")
  const menu_container = document.getElementById("main-menu")

  menu_button.addEventListener("click", () => {
    menu_container.classList.add("show")
  })

  menu_container.addEventListener("click", () => {
    menu_container.classList.remove("show")
  }, false)
})

window.addEventListener("DOMContentLoaded", setResponse)
window.addEventListener("resize", setResponse)
