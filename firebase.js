const table = document.getElementById("table-body");
const form = document.getElementById("book-form");



const addBook = (book, id) => {
    const checked = () => {
        if (book.read) {
            return "checked";
        }
    }
    let html = `
    <tr data-id="${id}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><label class="checkbox"><input type="checkbox" class="readToggle" data-status=${checked()} ${checked()}></label></td>
        <td class="del-btn"><button class="small-btn ">Delete</button></td><!-- Delete Button-->
    </tr>
    `;
    table.innerHTML+= html
}

const deleteBook = (id) => {
    const books = document.querySelectorAll("tr");
    books.forEach(title => {
        if(title.getAttribute("data-id") === id) {
            title.remove();
        }
    })

}

db.collection("books").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === "added") {
            console.log("add")
            addBook(doc.data(), doc.id);
        }
        else if(change.type === "removed") {
            deleteBook(doc.id);

        }
    })
});



//add documents

document.getElementById("add-btn").addEventListener("click", e => {
    event.preventDefault(); 
    const book = {
         title : form.title.value,
         author : form.author.value,
         pages : form.pages.value,
         read : form.read.checked
    };

    db.collection("books").add(book).then(() => {
        console.log("book added");
        document.getElementById("book-form").reset();
    }).catch(err => {
        console.log("error");
    })
});




//delete Elements

table.addEventListener("click", e => {
   // console.log(e);
   if (e.target.tagName ==="BUTTON") {
       const id = e.target.parentElement.parentElement.getAttribute("data-id");
       db.collection("books").doc(id).delete().then(()=>{
           console.log("book deleted");
       })
   }
});




//change checkbox

table.addEventListener("click", e => {
    if(e.target.className === "readToggle") {
        const id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");
        let status = e.target.getAttribute("data-status");
        if(status === "checked") {
            status = "";
        }
        else {
            status = "checked";
        }
        
        
        if (status === "checked") {
            db.collection("books").doc(id).update({
                read: true
            })
        }
        else {
            db.collection("books").doc(id).update({
                read: false
            })

        }
    }   
});   
    

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
  
  document.getElementById("form-btn").addEventListener("click", toggleForm);
  //document.addEventListener("click", deleteBook);