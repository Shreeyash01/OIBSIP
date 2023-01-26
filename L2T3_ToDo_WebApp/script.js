const input=document.querySelector("#newItemInp")
const list=document.querySelector("#newListItems")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let newItem = input.value

    if(!newItem){
        alert("Please fill out New Item");
        return
    }

    const item=document.createElement("div");
    item.classList.add("item");

    const item_check=document.createElement("input")
    item_check.setAttribute("type","checkbox")

    const item_content=document.createElement("p");
    item_content.innerText=newItem;

    const item_delete=document.createElement("button");
    item_delete.classList.add("deleteBtn");
    item_delete.innerHTML=`<i class="fa-solid fa-trash"></i>`;

    item.appendChild(item_check)
    item.appendChild(item_content);
    item.appendChild(item_delete);

    list.appendChild(item);

    input.value=""

    item_delete.addEventListener("click",()=>{
        list.removeChild(item);
    });
});