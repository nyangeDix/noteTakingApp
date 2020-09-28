console.log("..launching app");

let newNote = document.getElementById('newNote');
let closeModal = document.getElementById('closeModal');
const modal = document.querySelector('.modal-container');

newNote.addEventListener('click', getModal);
closeModal.addEventListener('click', closeModalNow);

//get modal
function getModal() {
    modal.style.display = "block";
}

function closeModalNow() {
    modal.style.display = "none";
}