(()=>{const e=document.getElementById("formDialog"),t=document.getElementById("add"),o=document.getElementById("submit");t.addEventListener("click",(()=>{e.showModal()})),o.addEventListener("click",(()=>{const e=document.getElementById("form-title").value,t=document.getElementById("form-text").value;localStorage.setItem("form-title",e),localStorage.setItem("form-text",t)}))})();