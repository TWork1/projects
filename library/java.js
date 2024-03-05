
const body = document.querySelector('body')
const subbuton = document.querySelector('dialog button')
const dialog = document.querySelector('dialog')
const dialogButton = document.querySelector('dialog + button')
const form = document.getElementById('libraryForm')
const cardsContainer = document.querySelector('.cards-container')

const myLibrary = [
    {
        title:"Gone with the Wind",
        author:"Margaret Mitchell",
        pages:"1037",
    },
    {
        title:"Jane Eyre",
        author:"Charlotte Brontë",
        pages:"680",
    }
    
]

//prototype function for books
function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//cycle through the array and add to element as text
function addBookToLibrary(){
    //erase old library
    if (cardsContainer.firstChild){
        for(i=0; i<=cardsContainer.children.length;i++){
                const card = document.querySelector('.cards')
                cardsContainer.removeChild(card)
            }
    }
    //add library cards
    for (i = 0; i< myLibrary.length; i++){
    const card = document.createElement('div')
    card.classList.add('cards')
    booktitle = myLibrary[i].title
    bookpage = myLibrary[i].pages
    bookauthor = myLibrary[i].author
    card.textContent = `Title: ${booktitle}, Author: ${bookauthor}, Pages: ${bookpage}`
    cardsContainer.appendChild(card)
    }
    
}

dialogButton.addEventListener('click', ()=>{
    dialog.showModal();
})

document.getElementById('form').addEventListener("submit",(e)=>{
    e.preventDefault();
    addBookToLibrary();
    dialog.close()
})
