(function () {
  let mode = document.querySelector("#switch-mode");
  let modeState = 0;
  let body = document.querySelector("body");
  let sectionTitle = document.querySelectorAll(".section-title");
  let subTitle = document.querySelectorAll(".section-subtitle");
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
    body.classList.add("light");
    degree.classList.add("light");
    canvas.classList.add("light");
    svg.classList.add("light");
    navbar.classList.add("light");
    btnMessagge.classList.add("light");
    presentCard.classList.add("light");


    sectionTitle.forEach((element) => {
      element.classList.add("light");
    });
    subTitle.forEach((element) => {
      element.classList.add("light");
    });
    titleBlue.forEach((element) => {
      element.style.color = "var(--second-violet)";
    });
    hobbies.forEach((element) => {
      element.classList.add("light");
    });
    studyCard.forEach((element) => {
      element.classList.add("light");
    });
  }

  function darkMode() {
    body.classList.remove("light");
    degree.classList.remove("light");
    canvas.classList.remove("light");
    svg.classList.remove("light");
    navbar.classList.remove("light");
    btnMessagge.classList.remove("light");
    presentCard.classList.remove("light");

    sectionTitle.forEach((element) => {
      element.classList.remove("light");
    });
    subTitle.forEach((element) => {
      element.classList.remove("light");
    });
    titleBlue.forEach((element) => {
      element.style.color = "var(--first-blue)";
    });
    hobbies.forEach((element) => {
      element.classList.remove("light");
    });
    studyCard.forEach((element) => {
      element.classList.remove("light");
    });
  }
})();
