let modal = document.querySelector("#modal");
let openButton = document.querySelector("#open-modal-btn");
let closeButton = document.querySelector("#close-modal-btn");
let overlay = document.querySelector("#overlay");

//When you click on the openButton everthing open
openButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});
//When you click on the closeButton everthing clears
closeButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
//When you click on the overlay everthing clears
overlay.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
