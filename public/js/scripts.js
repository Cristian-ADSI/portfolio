// ----------------Modal----------------
let btn_quickMessage = document.querySelector(".btn-messagge");
let contenModal = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let btn_colseModal = document.querySelector(".close-modal-btn");

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

//----------------Dark&light 'Variables'----------------
let mode = document.querySelector("#switch-mode");
let modeState = 0;
let rootElement = document.querySelector(":root");
let navbar = document.querySelector(".navbar");
let navlink = document.querySelector(".nav-link");
let mixBlent = document.querySelector(".mix-blend");
let btnMessagge = document.querySelector('.btn-messagge');
let svg = document.querySelector(".svg-img");

mode.addEventListener("click", function (e) {
  if (modeState == 0) {
    modeState = 1;
  } else if (modeState) {
    modeState = 0;
  }
  changeMode();
  e.preventDefault();
});

function changeMode() {
  mode.classList.toggle("active");
  if (modeState == 1) {
    lightMode();
  } else if (modeState == 0) {
    darkMode();
  }
}

function lightMode() {
  rootElement.style.setProperty("--main-bg-dark", "#ffffff");
  rootElement.style.setProperty("--bottom-home-D", "none");
  
  //home
  canvas.style.display = "none";
  mixBlent.style.display = "none";
  svg.style.opacity = 1;
  navbar.classList.add('dark');
  btnMessagge.classList.add('dark');
}
function darkMode() {
  // :root
  rootElement.style.setProperty("--main-bg-dark", "#0c1024");
  rootElement.style.setProperty("--bottom-home-D", "#0c1024fb");
  // navbar
  
  //home
  canvas.style.display = "unset";
  mixBlent.style.display = "unset";
  
  svg.style.opacity = 0;
  navbar.classList.remove('dark');
  btnMessagge.classList.remove('dark');

}

