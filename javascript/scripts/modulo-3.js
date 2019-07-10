var input = document.querySelector('input');
var buttonAdd = document.querySelector('button#add-task');
var buttonDelete;
var taskList = document.querySelector('#todos ul');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function addTask(text, pos){
    var newTask = document.createElement('li');
    var textTask = document.createTextNode(text);
    var deleteButton = document.createElement('a');
    var textButton = document.createTextNode('Excluir');

    deleteButton.setAttribute('href', '#');
    deleteButton.setAttribute('onclick', 'removeTask(this, ' + pos + ')')

    deleteButton.appendChild(textButton);
    newTask.appendChild(textTask);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
}

function removeTask(e, pos) {
    e.parentElement.remove();
    todos.splice(pos, 1);

    saveToStorage()
}

buttonAdd.onclick = function(){
    if(input.value != ""){
        todos.push(input.value);
        addTask(input.value);
        input.value = '';

        saveToStorage();
    }
}

for(todo of todos){
    var pos = todos.indexOf(todo);
    addTask(todo, pos);
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}