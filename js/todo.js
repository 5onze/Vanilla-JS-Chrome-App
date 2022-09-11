const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const toDoTitle = document.querySelector('#todo-title');

const TODOS_KEY = 'todos';

//todolist 저장
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//todolist 삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//todolist 추가
function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const label = document.createElement('label');
  label.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '';
  button.addEventListener('click', deleteToDo);
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);
  toDoList.appendChild(li);
}

if (toDoList.innerHTML === null) {
  toDoList.innerHTML = `<li>empty</li>`;
}

//todolist submit 값
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //todo array
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

//todolist 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
