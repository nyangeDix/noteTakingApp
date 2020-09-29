console.log("..launching app");

let newNote = document.getElementById('newNote');
let closeModal = document.getElementById('closeModal');
const modal = document.querySelector('.modal-container');
let content = document.querySelector('.card-container');
let addNewNote = document.getElementById('addNote');
let header = document.querySelector('.heading-input');
let note = document.getElementById('note-p');

//event listeners
newNote.addEventListener('click', getModal);
closeModal.addEventListener('click', closeModalNow);
content.addEventListener('click', deleteNote);
addNewNote.addEventListener('click', () => {
    let headerValue = header.value;
    let noteValue = note.value;

    if(headerValue === "" && noteValue === "") {
        alert("Data is gold");
    }  else {
        addNote(headerValue, noteValue);
        closeModalNow();
    }
});

//add new note
function addNote(newHheader, newNote) {

    let note = `
    <div class="note-card">
    <div class="card-heading">
        <h5>${newHheader}</h5>
        <img src="./imgs/icons/delete.svg" class="icon delete" alt="delete icon">
    </div>
    <div class="card-content">
        <p>${newNote}</p>
    </div>
    </div>
    `;
    let position = 'afterbegin';
    content.insertAdjacentHTML(position, note);
}


//delete note
function deleteNote(e) {
    if(e.target.classList[1] === 'delete') {
        let childEl = e.target.parentElement.parentElement;
        content.removeChild(childEl);
    }
}

//get modal
function getModal() {
    modal.style.display = "block";
}

//close modal
function closeModalNow() {
    modal.style.display = "none";
}