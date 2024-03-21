

class todolist{
    constructor(Date,textcontent){
        this.Date=Date;
        this.textcontent=textcontent;
    }
}



const submit=document.getElementById("submit")
submit.addEventListener('click',()=>{
    const todo=new todolist(submit.innerHTML)
    console.log(todo)
})