function addItem() {
    const addTodo = document.getElementById("addTodo").value;
    
    if (addTodo === "") {
        alert("Some text is required");
        return;
    }

    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.innerHTML = `<span><input type="checkbox" id="todoCompleted" onclick="done(this)"></span><span id="txt"><strong>${addTodo}</strong></span><button onclick="editTodo(this)">Edit</button><button onclick="removeItem(this)">Remove</button>`;
    list.appendChild(li);

    document.getElementById("addTodo").value = "";
}

var btn = document.getElementById("btn")
btn.addEventListener("click",addItem);

function removeItem(element) {
    element.parentElement.remove();
}

function editTodo(element) {
    const span = element.parentElement.querySelector("strong");
    const currentTask = span.textContent;
    const editedTask = prompt("Edit the task:", currentTask);
    if (editedTask !== null && editedTask.trim() !== "") {
        span.textContent = editedTask;
        addTodoInput.value = editedTask;
    }
}


function done(element) {
    if(element.target.className == "todo") {
    let li = element.target.parentElement;      
    if (!li.classList.contains('completed'))
       li.classList = 'completed'
   else 
   li.classList.remove('completed')
   }
}

