import addlist from "./add.js";

const form=document.getElementById("formDialog")
const add=document.getElementById("add")
const submit=document.getElementById("submit")
const remove=document.getElementById("remove")

let itemsArray = localStorage.getItem('form-title') ? (localStorage.getItem('form-title')) : [];

add.addEventListener('click',()=>{
    form.showModal();
})

submit.addEventListener('click',()=>{
    //getting values from dialog
    const title=document.getElementById("form-title").value;
    //storing values in local storage
    localStorage.setItem("form-title",title);
    const datastore=localStorage.getItem("form-title");
    itemsArray.push(datastore);
    console.log(itemsArray);
})

submit.addEventListener('click',addlist())

remove.addEventListener('click',()=>{
    localStorage.removeItem("lol");
    console.log("button is pressed")
})


