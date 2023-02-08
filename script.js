class Book{
    constructor(name,author,pages,status){
        let b = document.createElement('div');
        b.className="dabook";
        b.style.backgroundImage="url(./images/book.svg)";
        //for now I'm using Inner HTML and not changing it because I'm lazy
        //In the future, NEVER use InnerHTML ever.
        b.innerHTML=`<div class="ykb"><div class="y">Name: ${name}</div>
        <div class="y">Author: ${author}</div><div class="y">Pages: ${pages}</div>
        <div class="y">Status: ${status}</div>
        </div>
        <input type="button" class="yr" value="remove">`;
        this.bookDiv = b;
    }
}
let main = document.getElementsByClassName('books');
let dune = Object.create(new Book("Dune","Frank",778,"Read"));
let sapiens = Object.create(new Book("Sapiens","Frank",778,"Read"));

const Books = [dune,sapiens];

Books.forEach(book=>{
    main[0].appendChild(book.bookDiv);
})

let nameform = document.getElementById('bname');
let authform = document.getElementById('aname');
let pageform = document.getElementById('pages');
let statform = document.getElementById('status');
let submitform = document.getElementById('addbtn')
let remove = document.querySelectorAll('.yr');
let rc = (e)=>{
    e.target.parentNode.remove();
    remove = document.querySelectorAll('.yr');
}
let formInputs = [nameform,authform,pageform,statform];
submitform.addEventListener('click',()=>{
    let arr = []
    formInputs.forEach(x=>{
        arr.push(x.value);
    });
    let tbook = Object.create(new Book(arr[0],arr[1],arr[2],arr[3]));
    if(arr[0]!=""&&arr[1]!=""&&arr[2]!=""&&arr[3]!=""){
        Books.push(tbook);
        main[0].appendChild(tbook.bookDiv);
        remove = document.querySelectorAll('.yr');
        remove[remove.length-1].addEventListener('click',rc);
    }
});


remove.forEach((btn)=>{
    btn.addEventListener('click',rc);
});





