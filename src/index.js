const form=document.getElementById("formDialog")
const add=document.getElementById("add")

add.addEventListener('click',()=>{
    form.showModal();
})

class todolist{
    constructor(Date,textcontent){
        this.Date=Date;
        this.textcontent=textcontent;
    }
}


