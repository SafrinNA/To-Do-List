const addButton=document.getElementById("add-to-list");
const myList=document.getElementById("list");
const input=document.getElementById("input");
const deleteList=document.getElementById("remove-all");
addButton.addEventListener("click", ()=>{
  const item=document.createElement("li");
  item.innerText=input.value;
  
  item.addEventListener("click", (e)=>{
    item.remove()
  })
input.value="";
  
  myList.appendChild(item);
})
deleteList.addEventListener("click", ()=>{
  myList.innerHTML=''
})