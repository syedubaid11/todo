import addtolocalStorage from "./addtolocalStorage";

const add=document.getElementById("add-btn")
const input=document.getElementById("inputbtn")

let todos=[];


add.addEventListener('click',()=>{

    const title=document.querySelector("input").value;
    addTodo(input.value)

})

function addTodo(item){
    if(item!==''){
        const todoObj={
            name:item,
        }
        todos.push(todoObj)
        addtolocalStorage(todoObj);

        input.value=''
    }

}

function renderTodo(todos){

    todos.forEach(function(item) {


    const div = document.createElement('div');
    div.classList.add('to-do-list');

    const ul = document.createElement('ul');
    ul.classList.add('todo');

    ul.innerHTML=item.name;

    div.appendChild(ul);
    document.body.appendChild(div);
    });
    

}




function getfromlocalStorage(){
    const reference=localStorage.getItem('todos');
    if(reference){
        todos=JSON.parse(reference)
        renderTodos(reference)
    }
}
getfromlocalStorage();




