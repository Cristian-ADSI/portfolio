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
