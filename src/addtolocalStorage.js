

export default function addtolocalStorage(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
    renderTodos(todos);
}