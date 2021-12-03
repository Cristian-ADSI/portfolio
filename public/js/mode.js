(function () {
  let mode = document.querySelector("#switch-mode");
  let modeState = 0;
  let body = document.querySelector("body");
  let sectionTitle = document.querySelector('.section-title');
  let degree = document.querySelector(".degree");
  let navbar = document.querySelector(".navbar");
  let btnMessagge = document.querySelector("#btn-messagge");
  let titleBlue = document.querySelectorAll(".title-blue");
  let svg = document.querySelector(".svg");
  let presentCard = document.querySelector(".presentation-card");
  let hobbies = document.querySelectorAll(".hobbies");
  let studyCard = document.querySelectorAll(".card");

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
    body.style.background = "var(--white-color)";
    degree.style.opacity = 0;
    canvas.style.opacity = 0;
    svg.style.opacity = 1;
    titleBlue.forEach((element) => {
      element.style.color = "var(--second-color)";
    });
    navbar.classList.add("light");
    btnMessagge.classList.add("light");
    presentCard.classList.add("light");
    hobbies.forEach((element) => {
      element.classList.add("light");
    });
    studyCard.forEach((element) => {
      element.classList.add("light");
    });
  }

  function darkMode() {
    body.style.background = "var(--second-dark)";
    degree.style.opacity = 1;
    svg.style.opacity = 0;
    canvas.style.opacity = 1;
    titleBlue.forEach((element) => {
      element.style.color = "var(--main-color)";
    });
    navbar.classList.remove("light");
    btnMessagge.classList.remove("light");
    presentCard.classList.remove("light");
    hobbies.forEach((element) => {
      element.classList.remove("light");
    });
    studyCard.forEach((element) => {
      element.classList.remove("light");
    });
  }


})();
