const nav = document.getElementById("nav");
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", function () {
  nav.classList.add("right-0");
});

close.addEventListener("click", function () {
  nav.classList.remove("right-0");
});

nav.addEventListener("click", function () {
  nav.classList.remove("right-0");
});

// YEAR DYNAMIC
const year = document.querySelector(".year");
const getYear = new Date().getFullYear();
year.innerText = getYear;

// LOADER OFF
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  loader.classList.add("hidden");
});
