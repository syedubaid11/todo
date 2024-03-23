const form=document.getElementById("formDialog")
const add=document.getElementById("add")
const submit=document.getElementById("submit")

add.addEventListener('click',()=>{
    form.showModal();
})


submit.addEventListener('click',()=>{
    //getting values from dialog
    const title=document.getElementById("form-title").value;
    const details=document.getElementById("form-text").value;

    //storing values in local storage
    localStorage.setItem("form-title",title);
    localStorage.setItem("form-text",details);

})


    




class todolist{
    constructor(Date,textcontent){
        this.Date=Date;
        this.textcontent=textcontent;
    }
}


