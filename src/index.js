const form=document.getElementById("formDialog")
const add=document.getElementById("add")
const submit=document.getElementById("submit")

add.addEventListener('click',()=>{
    form.showModal();
})



function store(){
        //getting values from dialog
        const title=document.getElementById("form-title").value;
        const details=document.getElementById("form-text").value;

        //storing values in local storage
        const titleStore=localStorage.setItem("form-title",title);
        const detailsStore=localStorage.setItem("form-text",details);
 
}
submit.addEventListener('click',store());
    



class todolist{
    constructor(Date,textcontent){
        this.Date=Date;
        this.textcontent=textcontent;
    }
}


