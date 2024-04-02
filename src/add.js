
export default function addlist(){
    const div = document.createElement('div');
    div.classList.add('to-do-list');

    const ul = document.createElement('ul');
    ul.classList.add('todo');

    div.appendChild(ul);
    document.body.appendChild(div);

    console.log("check")
}


