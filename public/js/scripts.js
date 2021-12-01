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
let title = document.querySelector(":root");
let navbar = document.querySelector(".navbar");
let btnMessagge = document.querySelector("#btn-messagge");
let titleBlue = document.querySelectorAll(".title-blue");
let svg = document.querySelector(".svg");
let presentCard = document.querySelector(".presentation-card");
let hobbies = document.querySelectorAll('.hobbies');
let studyCard= document.querySelectorAll('.card');

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
  canvas.style.opacity = 0;
  rootElement.style.setProperty("--main-bg-dark", "#ffffff");
  rootElement.style.setProperty("--bottom-home-D", "none");
  title.style.setProperty("--title-color", "#0b0437");
  svg.style.opacity = 1;
  titleBlue.forEach((element) => {
    element.style.color = "var(--second-color)";
  });
  // Add light classes
  navbar.classList.add("light");
  btnMessagge.classList.add("light");
  presentCard.classList.add("light");
  hobbies.forEach((element) => {
    element.classList.add ('light');
  });
  studyCard.forEach((element) => {
    element.classList.add ('light');
  });
}

function darkMode() {
  // :root
  rootElement.style.setProperty("--main-bg-dark", "#1a1b54");
  rootElement.style.setProperty("--bottom-home-D", "#1a1b54b6");
  title.style.setProperty("--title-color", "#ffffff");
  svg.style.opacity = 0;
  canvas.style.opacity = 1;
  titleBlue.forEach((element) => {
    element.style.color = "var(--main-color)";
  });
  // Remove light classes
  navbar.classList.remove("light");
  btnMessagge.classList.remove("light");
  presentCard.classList.remove("light");
  hobbies.forEach((element) => {
    element.classList.remove ('light');
  });
  studyCard.forEach((element) => {
    element.classList.remove ('light');
  });
}
