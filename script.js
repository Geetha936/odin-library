myLibrary =[]
const addButton = document.getElementById("addBook")
const dialog = document.getElementById("dialog")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
const cardcontainer = document.getElementById("card-container");
addButton.addEventListener("click",() =>{
    dialog.showModal();
})
submit.addEventListener("click",() =>{
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    dialog.close();
    form.reset();
    displayBooks(myLibrary);
});
class Book{
    constructor(title, author, pages , read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}}
function displayBooks(myLibrary) {
    cardcontainer.innerHTML = "";
    myLibrary.forEach((element,index) => {
        const car = createCard(element,index);
        cardcontainer.appendChild(car);
    });
}
function addBookToLibrary(Book){
    myLibrary.push(Book);
}
displayBooks(myLibrary);
function deleteBook(index){
    myLibrary.splice(index,1);
    displayBooks(myLibrary);
}
// create card to display books 
function createCard(Book,index){
    const card = document.createElement('div');
    card.className = "card";
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    const cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    cardTitle.textContent = "Title "+Book.title;
    const cardAuthor = document.createElement('p');
    cardAuthor.textContent ="Author :" + Book.author;
    const pages = document.createElement('p');
    pages.textContent ="Total Pages:" +Book.pages;
    const read = document.createElement('p');
    read.textContent ="Read Book ?:" + Book.read;
    const buttondiv = document.createElement('div');
    buttondiv.className = "btn-group";
    const changeReadstatus = document.createElement("button");
    changeReadstatus.textContent= "Change Read Status";
    changeReadstatus.addEventListener("click", () =>{
        myLibrary[index].read = !Book.read;
        displayBooks(myLibrary);
    })
    const deletecard = document.createElement("button");
    deletecard.textContent= "Delete Book";
    deletecard.addEventListener("click", () =>{
        deleteBook(index);
    })
    buttondiv.appendChild(changeReadstatus);
    buttondiv.appendChild(deletecard);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardAuthor);
    cardBody.appendChild(pages);
    cardBody.appendChild(read);
    cardBody.appendChild(buttondiv);
    card.appendChild(cardBody);
    return card;
}


    