class BookBg{
    constructor(){
        let b = document.createElement('div');
        b.style="width:289px; height: 347px;";
        let bimg = document.createElement('img');
        b.style.backgroundImage="url(./images/book.svg)";
        b.style.border="1px solid black";
        this.bookDiv = b;
    }
}
let main = document.getElementsByClassName('books');
let dune = Object.create(new BookBg());
let sapiens = Object.create(new BookBg());
const Books = [dune,sapiens];




