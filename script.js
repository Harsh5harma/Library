//makes an object with the book.svg background and also serves as the prototype for other objects
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

//adding 2 default books here
let main = document.getElementsByClassName('books');
let dune = Object.create(new Book("Dune","Frank",778,"Read"));
let sapiens = Object.create(new Book("Sapiens","Frank",778,"Read"));

const Books = [dune,sapiens];

Books.forEach(book=>{
    main[0].appendChild(book.bookDiv);
})

//getting form data from the add new book form, I'm sure there are better ways? I just don't care enough to check rn
let nameform = document.getElementById('bname');
let authform = document.getElementById('aname');
let pageform = document.getElementById('pages');
let statform = document.getElementById('status');
let submitform = document.getElementById('addbtn')
let remove = document.querySelectorAll('.yr');

//callback function to remove the book from the dom
let rc = (e)=>{
    e.target.parentNode.remove();
    remove = document.querySelectorAll('.yr');
}
let formInputs = [nameform,authform,pageform,statform];

//adds the book and does some ugly fuckery, also adds event listeners on the remove buttons of the new 
//objects.I don't know how to do this without using inefficient work arounds.
//REVISIT THIS SECTION AND REDO IT some time (idk when)
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

//Adds event listeners for the default 2 books? Do I really need this? Yes. Can it be done better? Idk. Am I stupid? Yes.
remove.forEach((btn)=>{
    btn.addEventListener('click',rc);
});





