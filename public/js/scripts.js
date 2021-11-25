// Modal variables
let btn_quickMessage = document.querySelector(".btn-messagge");
let contenModal = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let btn_colseModal = document.querySelector(".close-modal-btn");

let modeState = 0;
//DOM objects
let navbar = document.querySelector('.navbar');
let navlink = document.querySelector('.nav-link');

let homeLine = document.querySelector('.home-line');

let rootElement = document.querySelector(":root");
let mode = document.querySelector("#switch-mode");
let mixBlent = document.querySelector('.mix-blend');
let svg = document.querySelector('.svg-img');



function changeMode() {
  mode.classList.toggle("active");
  if (modeState == 1) {
    lightMode()
  }else if (modeState == 0) {
    darkMode()
  } 
}

function darkMode() {
  // :root 
  rootElement.style.setProperty("--main-bg-dark", "#0c1024");
  rootElement.style.setProperty("--bottom-home-D", "#0c1024fb");
  // navbar 
  navbar.style.background = '#0b0623';
  rootElement.style.setProperty("--nav-links", "#00ffff")

  canvas.style.display ='unset';
  mixBlent.style.display = 'unset';

  svg.style.opacity = 0;
  
  
  
}
function lightMode() {
  rootElement.style.setProperty("--main-bg-dark", "#ffffff");
  rootElement.style.setProperty("--bottom-home-D", "none");
  // navbar 
  navbar.style.background = 'none';
  rootElement.style.setProperty("--nav-links", "#ffffff")

  canvas.style.display ='none';
  mixBlent.style.display = 'none';

  svg.style.opacity = 1;
}
mode.addEventListener("click", function (e) {
  if (modeState == 0) {
    modeState = 1;
  } else if (modeState) {
    modeState = 0;
  }
  changeMode();
  e.preventDefault();
});

function colseModal() {
  modal.classList.remove("show-modal");
  setTimeout(function () {
    contenModal.classList.remove("show-modal-container");
  }, 400);
}
function openModal() {
  contenModal.classList.add("show-modal-container");
  modal.classList.add("show-modal");
}

function name(params) {}

btn_quickMessage.addEventListener("click", function (e) {
  openModal();
  e.preventDefault();
});

btn_colseModal.addEventListener("click", function (e) {
  colseModal();
  e.preventDefault();
});

window.addEventListener("click", function (e) {
  if (e.target == contenModal) {
    colseModal();
  }
});
