let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
}

const bookToArray = (e) => {
  e.preventDefault(); //stop the form from submitting
   
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let book =  new Book(title, author, pages, read);

    myLibrary.push(book);
    document.forms[0].reset(); //clear form for next entries
    console.log(myLibrary)
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", bookToArray);
});

function showBooks(arr){
   
  const table = document.getElementById("tableBody");
  const newRow = document.createElement("tr");
  const newEntry = document.createElement("td");
  newEntry.textContent
  table.appendChild(newRow);
}