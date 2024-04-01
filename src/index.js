import addlist from "./add.js";

const form=document.getElementById("formDialog")
const add=document.getElementById("add")
const submit=document.getElementById("submit")
const remove=document.getElementById("remove")





add.addEventListener('click',()=>{
    form.showModal();
})

submit.addEventListener('click',()=>{
    //getting values from dialog
    const title=document.getElementById("form-title").value;
    //storing values in local storage
    localStorage.setItem("form-title",title);

   
})

remove.addEventListener('click',()=>{
    localStorage.removeItem("lol");
    console.log("button is pressed")
})



