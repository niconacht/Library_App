
let myLibrary = [];
class Book {
  constructor(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  }
  report() {
    return return `${title} by ${author}, ${pages}, ${read}`;
  }
};

const book1 = new Book ("Ulysses", "James Joyce", 1000, "read twice");
console.log(book1.report());

//button click open form, create new book instance
//store in input in object
//add object to array
//display book in table


function addBookToLibrary(input) {
  // do stuff here
}