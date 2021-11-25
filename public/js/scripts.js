// Modal variables
let btn_quickMessage = document.querySelector(".btn-messagge");
let contenModal = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let btn_colseModal = document.querySelector(".close-modal-btn");

//Dark $ Light Mode
let navbar = document.querySelector('.navbar');
let navlink = document.querySelector('.nav-link');
let rootElement = document.querySelector(":root");
let mode = document.querySelector("#switch-mode");
let mixBlent = document.querySelector('.mix-blend');
let svg = document.querySelector('svg');


let modeState = 0;


function changeMode() {
  mode.classList.toggle("active");
  if (modeState == 1) {
    lightMode()
  }else if (modeState == 0) {
    darkMode()
  } 
}

function darkMode() {
  navbar.style.background = '#0b0623';
  canvas.style.display ='unset';
  mixBlent.style.display = 'unset';
  svg.style.opacity = 0;
  
  rootElement.style.setProperty("--main-bg-dark", "#0c1024");
  rootElement.style.setProperty("--bottom-home-D", "#0c1024fb");
  // rootElement.style.setProperty("--title-color", "#ffffff");
  rootElement.style.setProperty("--main-color", "#00ffff");
  
}
function lightMode() {
  navbar.style.background = 'none';
  canvas.style.display ='none';
  mixBlent.style.display = 'none';
  svg.style.opacity = 1;

  ;
  rootElement.style.setProperty("--main-bg-dark", "#ffffff");
  rootElement.style.setProperty("--bottom-home-D", "none");
  // rootElement.style.setProperty("--title-color", "#0c1024");
  rootElement.style.setProperty("--main-color", "#a759ff");
  rootElement.style.setProperty("--nav-links", "#ffffff")
  homeSyles();
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
