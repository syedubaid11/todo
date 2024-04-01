const ul=document.querySelector("ul");

export default function addlist(){
    const list=document.createElement("li");
    list.innerHTML=localStorage.getItem("form-title")
    ul.appendChild(list);
}