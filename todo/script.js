var editId = "";
var editI = 0;
const form = document.getElementById("note-form");
form.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

var todo = JSON.parse(localStorage.getItem("todo")) || [];
function addNote(e) {
  console.log("Inside add note");
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;
  todo.push({
    title: title,
    description: description,
    id: new Date().valueOf(),
  });
  console.log(todo);
  localStorage.setItem("todo", JSON.stringify(todo));
  location.reload();
}

function deleteNote(id) {
  console.log("Inside delete note");
  console.log(id);
  todo = todo.filter((todo) => todo.id !== id);
  console.log(todo);
  localStorage.setItem("todo", JSON.stringify(todo));
  location.reload();
}

function showModal(id, i, title, desc) {
  document.getElementById("editNote").style.height = "100vh";
  document.getElementById("editTitle").value = title;
  document.getElementById("editDesc").value = desc;
  editId = id;
  editI = i;
}

function editNote(id, i) {
  console.log("Inside edit note");
  console.log(id);
  editTodo = todo.filter((todo) => todo.id === id);
  console.log(editTodo);
  editTodo = editTodo[0];
  editTodo.title = document.getElementById("editTitle").value;
  editTodo.description = document.getElementById("editDesc").value;
  console.log(editTodo);
  todo[i] = editTodo;
  console.log(todo);
  localStorage.setItem("todo", JSON.stringify(todo));
  location.reload();
}

var displayDiv = "";
for (i = 0; i < todo.length; i++) {
  displayDiv += `
         
                <div class="todo-card">
                    <h2>
                        ${todo[i].title}
                    </h2>
                    <p>
                        ${todo[i].description}
                    </p>
                    <div class="d-flex align-items-center justify-content-around">
                        <button class="btn btn-danger" onclick='deleteNote(${todo[i].id})'>
                            Delete
                        </button>
                        <button class="btn btn-primary" onclick='showModal(${todo[i].id},${i},"${todo[i].title}","${todo[i].description}")'>Edit</button>
                    </div>
                </div>
            `;
}
document.getElementById("todos").innerHTML = displayDiv;
