// let myLibrary = [];
// let bookArray = [];

// class Book {
//     constructor(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     }
// }

//Evenhandler functions
//build Object from User Input and store in array, then add new book entry to library-table
// const bookToArray = (e) => {
//   e.preventDefault(); //stop the form from submitting
//     let title = document.getElementById("title").value;
//     let author = document.getElementById("author").value;
//     let pages = document.getElementById("pages").value;
//     let read = document.getElementById("read").checked;

//     let book =  new Book(title, author, pages, read);
//      // check for duplicates
//     if (myLibrary.some(elem => elem.title === book.title && elem.author === book.author)){
//       alert("Looks like you're entering a duplicate. Try again")
//     }

//     else {

//         // db.collection("books").add(book).then(() => {
//         //     console.log("book added");
//         // }).catch(err => {
//         //     console.log(err);
//         // });
        

//       myLibrary.push(book);
//       document.forms[0].reset(); //clear form for next entries
//       showBooks(myLibrary);
//       bookArray.push(myLibrary);
//       myLibrary = [];
//       ;
//     }
// }

// if User marked book as read or unread, eventually change status in Object
const toggleRead = function(e) {

  //find booktitle over parentnode, identify via index in Array, use index  to change read-status
  if(e.target && e.target.id == "readToggle"){
    let checked = e.target.checked;
    let bookTitle = e.target.parentNode.parentNode.firstChild.textContent;
    // let bookName = bookTitle.textContent;
    let index = myLibrary.findIndex(book =>book.title === bookTitle);
    if(checked) {
      myLibrary[index].read = true;
    }
    else {
      myLibrary[index].read = false;
    }
  }
}

//show or hide Inputform on button click
const toggleForm = function(e){
  if(e.target && e.target.id == "form-btn") {
    let bookForm = document.getElementById("book-form");
    if (bookForm.style.display ==="none") {
      bookForm.style.display = "block";
    }
    else {
        bookForm.style.display = "none";
      }
  }
}

// delete book in Array and remove row from table on button click
// const deleteBook = function(e) {
//   if (e.target && e.target.id ==="del-btn"){
//     let currentRow = e.target.parentNode.parentNode;
//     for (let i= 0; i < bookArray.length; i++) {
//       if (bookArray[i].title === currentRow.firstChild.texContent) {
//           bookArray.splice(i,1);
//       }
//     }
//     currentRow.remove();
//     return bookArray;
//   }
// }

// function showBooks(libr){
//   const table = document.getElementById("table-body");
//   for (let i = 0; i < libr.length; i++){
//      let newRow = document.createElement("tr");

//      const delCell = document.createElement("td");
//        delCell.id = "del-btn";

//        const deleteButton = document.createElement("button");
//        deleteButton.textContent = "Delete";
//        deleteButton.classList.add("btn");
//        deleteButton.classList.add("small-btn");
//        deleteButton.id = "del-btn";
     
//      let obj = libr[i];
//      //console.log(obj);
//      for (let [key, value] of Object.entries(obj)) {
//       // console.log(value);
       
//        const newEntry = document.createElement("td");
//          if (key === "read"){
//            let checkbox = document.createElement("input");
//            checkbox.id = "readToggle";
//            checkbox.setAttribute("type", "checkbox");
//            if (value ===  false) {
//              checkbox.checked = false;
//            }
//            else {
//              checkbox.checked = true;
//            }
//            newEntry.appendChild(checkbox);
//          }
//          else {
//            newEntry.textContent = value;
//          }
//          newRow.appendChild(newEntry); 
//      }
//      delCell.appendChild(deleteButton);
//      newRow.append(delCell);
//      table.appendChild(newRow);
     
//    }
// }
//EventHandlers
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("add-btn").addEventListener("click", bookToArray);
// });
//if user changes checkbox update object
//document.addEventListener("change", toggleRead);

document.getElementById("form-btn").addEventListener("click", toggleForm);
//document.addEventListener("click", deleteBook);