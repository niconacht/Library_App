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


function showBooks(arr){
   for (let i = 0; i < arr.length; i++){
      const table = document.getElementById("table-body");
      let newRow = document.createElement("tr");
      table.appendChild(newRow);
  
      const vals = Object.values(arr[i]);
      for (const val in vals){
          const newEntry = document.createElement("td");
          newEntry.textContent = val;
          newRow.appendChild(newEntry);

      }
      
  
    }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", bookToArray);
});