// Modal variables
let btn_quickMessage = document.querySelector(".btn-messagge");
let contenModal = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let btn_colseModal = document.querySelector(".close-modal-btn");

//Dark $ Light Mode
let mode = document.querySelector("#switch-mode");
let modeState = 0;
let rootElement = document.querySelector(":root");

function changeMode() {
  mode.classList.toggle("active");
  if (modeState == 1) {
    lightMode()
  }else if (modeState == 0) {
    darkMode()
  } 
}

function darkMode() {
  rootElement.style.setProperty("--main-bg-dark", "#0c1024");
}
function lightMode() {
  rootElement.style.setProperty("--main-bg-dark", "#ffffff");
  rootElement.style.setProperty("--main-bg-dark", "#ffffff");
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
