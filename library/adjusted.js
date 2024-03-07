const body = document.querySelector('body');
const subbuton = document.querySelector('dialog button');
const dialog = document.querySelector('dialog');
const dialogButton = document.querySelector('dialog + button');
const form = document.getElementById('libraryForm');
const cardsContainer = document.querySelector('.cards-container');
let ITR;
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

function Book(title,author,pages,bchecked){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bchecked = bchecked;
}

dialogButton.addEventListener('click', ()=>{
    dialog.showModal();
})

function addBookToLibrary(){
    while(cardsContainer.children.length < myLibrary.length){
        if(ITR == undefined)
        {
            ITR = 0;
        }
        i = ITR;
        const card = document.createElement('div');
        card.classList.add('cards');

        booktitle = myLibrary[i].title;
        bookpage = myLibrary[i].pages;
        bookauthor = myLibrary[i].author;
        bookchecked = myLibrary[i].bchecked;

        const cardtitle = document.createElement('div');
        cardtitle.textContent = `Title: ${booktitle}`;
        card.appendChild(cardtitle);

        const cardauthor = document.createElement('div');
        cardauthor.textContent = `Author: ${bookauthor}`;
        card.appendChild(cardauthor);

        const cardpages = document.createElement('div');
        cardpages.textContent = `# of Pages: ${bookpage}`;
        card.appendChild(cardpages);

        const bigcheckbox = document.createElement('div');
        const checkbox = document.createElement('INPUT');
        checkbox.setAttribute('type','checkbox');
        checkbox.checked = bookchecked;
        bchecked.checeked = checkbox.checked;
        bigcheckbox.appendChild(checkbox);
        const text = document.createElement('div');
        text.textContent = 'Completed?';
        bigcheckbox.appendChild(text);
        card.appendChild(bigcheckbox);

        const deletButton = document.createElement('BUTTON');
         deletButton.textContent = 'remove';
            deletButton.addEventListener('click',()=>{
            parent = deletButton.parentNode;
            parent.remove();
            myLibrary.pop();
        })

        card.appendChild(deletButton);
        cardsContainer.appendChild(card);
        ITR++;
    }
}

document.getElementById('form').addEventListener("submit",(e)=>{
    e.preventDefault();
    bchecked = document.getElementById('read').checked;
    bTitle = document.getElementById('book-title').value;
    bAuthor = document.getElementById('author').value;
    bPages = document.getElementById('pages').value;
    book = new Book(bTitle,bAuthor,bPages,bchecked);
    myLibrary.push(book);
    addBookToLibrary();
    dialog.close();
})