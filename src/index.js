const form=document.getElementById("formDialog")
const add=document.getElementById("add")
const submit=document.getElementById("submit")



add.addEventListener('click',()=>{
    form.showModal();
})

submit.addEventListener('click',()=>{
    //getting values from dialog
    const title=document.getElementById("form-title").value;
    //storing values in local storage
    localStorage.setItem("form-title",title);

})

const todocards=document.getElementById('displaytodo');
todocards.innerHTML=localStorage.getItem("form-title");

