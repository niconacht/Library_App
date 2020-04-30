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
     // check for duplicates
    if (myLibrary.some(elem => elem.title === book.title && elem.author === book.author)){
      alert("Looks like you're entering a duplicate. Try again")
    }

    else {

      myLibrary.push(book);
      document.forms[0].reset(); //clear form for next entries
      console.log(myLibrary);
      showBooks(myLibrary);
    }
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
          if (key === "read"){
            let checkbox = document.createElement("input");
            checkbox.id = "readToggle";
            checkbox.setAttribute("type", "checkbox");
            if (value ===  false) {
              checkbox.checked = false;
            }
            
            else {
              checkbox.checked = true;
            }
            newEntry.appendChild(checkbox);
          
          }
          else {
            newEntry.textContent = value;
          }
          
          newRow.appendChild(newEntry); 
      }
    }
}

const toggleRead = function(e) {

  //find booktitle over parentnode, identify via index in Array, use index  to change read-status
  if(e.target && e.target.id == "readToggle"){
    let checked = e.target.checked;
    let bookTitle = e.target.parentNode.parentNode.firstChild.textContent;
    console.log(bookTitle)
    // let bookName = bookTitle.textContent;
    let index = myLibrary.findIndex(book =>book.title === bookTitle);
    console.log(index)
    if(checked) {
      myLibrary[index].read = true;
    }
    else {
      myLibrary[index].read = false;
    }
    console.log(myLibrary);

}

}

const toggleForm = function(e){
  if(e.target && e.target.id == "add-btn") {
    let bookForm = document.getElementById("book-form");
    if (bookForm.style.display ==="none") {
      bookForm.style.display = "block";
    }
    else {
        bookForm.style.display = "none";
      }
  }
}
//EventHandlers


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", bookToArray);
});
//if user changes checkbox update object
document.addEventListener("change", toggleRead);

document.getElementById("add-btn").addEventListener("click", toggleForm);
