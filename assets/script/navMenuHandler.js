const navMenu = document.querySelector(".nav_menu");
const hamburgerButton = document.querySelector(".hamburger-icon");
const closeButton = document.querySelector(".close-icon");
const backdrop = document.querySelector(".backdrop");

let stateNavMenu = false;

const toggleNavMenu = () => {
  navMenu.classList.toggle("toggle-nav_menu");
  hamburgerButton.classList.toggle("toggle-button");
  closeButton.classList.toggle("toggle-button");
  backdrop.classList.toggle("toggle-backdrop");
};

hamburgerButton.addEventListener("click", toggleNavMenu);
closeButton.addEventListener("click", toggleNavMenu);
backdrop.addEventListener("click", toggleNavMenu);

window.addEventListener("load", () => {
  hamburgerButton.classList.add("toggle-button");
});
