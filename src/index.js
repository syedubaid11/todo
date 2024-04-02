import addlist from "./add.js";

const form=document.getElementById("formDialog")
const add=document.getElementById("add")
const submit=document.getElementById("submit")
const remove=document.getElementById("remove")

let itemsArray =["hello","check"];
const key=itemsArray[0];

console.log(key)


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
    localStorage.removeItem(key);
    console.log("button is pressed")
})


