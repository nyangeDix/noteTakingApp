console.log("..launching app");

let newNote = document.getElementById('newNote');
let closeModal = document.getElementById('closeModal');
const modal = document.querySelector('.modal-container');

let content = document.querySelector('.card-container');

newNote.addEventListener('click', getModal);
closeModal.addEventListener('click', closeModalNow);
content.addEventListener('click', (e) => {
    if(e.target.classList[1] === 'delete') {
        let childEl = e.target.parentElement.parentElement;
        content.removeChild(childEl);
    }
});


//get modal
function getModal() {
    modal.style.display = "block";
}

function closeModalNow() {
    modal.style.display = "none";
}