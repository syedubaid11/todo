
const add=document.getElementById("add-btn")
const input=document.getElementById("inputbtn")

let itemsArray =[];


add.addEventListener('click',()=>{

    const title=document.querySelector("input").value;

    localStorage.setItem("form-title",title);

    addlist()
})

function addlist(){
    const text=localStorage.getItem("form-title")

    const div = document.createElement('div');
    div.classList.add('to-do-list');

    const ul = document.createElement('ul');
    ul.classList.add('todo');

    ul.innerHTML=text;

    div.appendChild(ul);
    document.body.appendChild(div);

    console.log("check")
}





