
const openmodalbtn = document.getElementById("openmodalbtn");
const modaloverlay = document.getElementById("modaloverlay");
const modal = document.getElementById("modal");


const modalclose = modal.querySelector(".modal__close");

function handleOpenModal() {
    modaloverlay.classList.add("opened");
    modal.classList.add("opened");
}

function handleCloseModal() {
    modaloverlay.classList.remove("opened");
    modal.classList.remove("opened");
}


openmodalbtn.addEventListener("click", handleOpenModal);
modalclose.addEventListener("click", handleCloseModal);