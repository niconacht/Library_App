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
    console.log(myLibrary);
    showBooks(myLibrary);
}


function showBooks(libr){
   const table = document.getElementById("table-body");
   for (let i = 0; i < libr.length; i++){
      let newRow = document.createElement("tr");
      table.appendChild(newRow);
      let obj = libr[i];
      console.log(obj);
      for (let [key, value] of Object.entries(obj)) {
        console.log(value);
    
          const newEntry = document.createElement("td");
          newEntry.textContent = value;
          newRow.appendChild(newEntry);

      }
    }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", bookToArray);
});