//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event) {
    alert('Added list!');
    //Prevent form from submitting
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //delete text in todoInput
    todoInput.value = "";
}


    //check button activate
    todoList.addEventListener('click',todoCheck);
    function todoCheck(event) {
        const clicked = event.target;
        if (clicked.classList.contains("complete-btn")) {
            alert('Complete');
            clicked.parentElement.classList.toggle("completed");
        } else if (clicked.classList.contains("trash-btn")) {
            alert('Delete');
            clicked.parentElement.remove();
        }
    }



