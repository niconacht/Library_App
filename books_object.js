function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.report = function(){
    return `${title} by ${author}, ${pages}, ${read}`;
  }
}
const book1 = new Book ("Ulysses", "James Joyce", 1000, "read twice");
console.log(book1.report());
