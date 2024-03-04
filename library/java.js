
const body = document.querySelector('body')
const subbuton = document.querySelector('dialog button')
const dialog = document.querySelector('dialog')
const dialogButton = document.querySelector('dialog + button')
const form = document.getElementById('libraryForm')
const myLibrary = ["mybook","book2","book3"]


//prototype function for books
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//cycle through the array and add to element as text
function addBookToLibrary(){
    for (i = 0; i< myLibrary.length; i++){
    const books = document.createElement('p')
    books.textContent = myLibrary[i]
    document.body.appendChild(books)
    }
}

dialogButton.addEventListener('click', ()=>{
    dialog.showModal();
})
document.getElementById('form').addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    addBookToLibrary();
    dialog.close()
})
