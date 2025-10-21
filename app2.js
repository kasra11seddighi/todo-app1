const openmodalButton = document.querySelector(".open-modal-button");
const modalBox = document.querySelector(".modal-screen");
const cancelButton = document.querySelector(".cancel");
const crossButton = document.querySelector(".size-6");
const createButton = document.querySelector(".create");
const input = document.querySelector(".input");
const todosContainer = document.querySelector(".todos-container");

function showModal () {
modalBox.classList.remove("hidden")
} 

function removeModal () {
    modalBox.classList.add("hidden")
} 

 function removeTodo(event) {
  const removeDiv = event.target.parentElement.parentElement;
  removeDiv.remove();
}

function addTodo () {
let inputTodo =input.value; 
todosContainer.insertAdjacentHTML("beforeend", 
  `<article class="todo">
    <div class="todo-data">
      <p>${inputTodo}</p>
    </div>
    <div class="todo-buttons">
      <button class="delete" onclick="removeTodo(event)">حذف</button>
    </div>
  </article>`
);
removeModal();
input.value= "";
} 

function keydown1 (event) 
{
if(event.key === "Enter") {
    addTodo()
}
}
openmodalButton.addEventListener("click" , showModal);
cancelButton.addEventListener("click" , removeModal);
crossButton.addEventListener("click" , removeModal);
createButton.addEventListener("click", addTodo);
document.body.addEventListener("keydown" , keydown1 );