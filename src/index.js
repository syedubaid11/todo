import addlist from "./add.js";

const add=document.getElementById("add-btn")

let itemsArray =["hello","check"];
const key=itemsArray[0];

console.log(key)

add.addEventListener('click',()=>{
    //getting values from dialog
    const title=document.querySelector("input").value;
    //storing values in local storage
    localStorage.setItem("form-title",title);

})








