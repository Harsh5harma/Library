class BookBg{
    constructor(name,author,pages,status){
        let b = document.createElement('div');
        b.className="dabook";
        b.style.backgroundImage="url(./images/book.svg)";
        b.innerHTML=`<div class="ykb"><div class="y">Name: ${name}</div>
        <div class="y">Author: ${author}</div><div class="y">Pages: ${pages}</div>
        <div class="y">Status: ${status}</div>
        </div>`;
        this.bookDiv = b;
    }
}
let main = document.getElementsByClassName('books');
let dune = Object.create(new BookBg("Dune","Frank",778,"Read"));
let sapiens = Object.create(new BookBg("Sapiens","Frank",778,"Read"));

const Books = [dune,sapiens];

Books.forEach(book=>{
    console.log("I love");
    main[0].appendChild(book.bookDiv);
})



