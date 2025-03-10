//Recuperamos los elementos
const form = document.querySelector("#todo_form");
const input = document.querySelector("#todo_input");
const todoList = document.querySelector("#todo_list");
const error = document.querySelector("#error");

//Creamos la función de añadir todo
const createTodo = (text) => {
  const li = document.createElement("li");
  //Creamos una etiqueta "sin contenido semántico" para almacenar el texto y darle la funcionalidad de completar las tareas
  const span = document.createElement("span");
  span.textContent = text;
  //Le añadimos a cada uno de estos "span" un evento click que marque como completadas las tareas
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });
  //Creamos un botón con la funcionalidad de borrar el li por completo
  const btn = document.createElement("btn");
  btn.textContent = "🗑️";
  btn.addEventListener("click", () => {
    li.remove();
  });
  //Añadimos el span y el botón al li
  li.appendChild(span);
  li.appendChild(btn);
  //Añadimos el li al todoList
  todoList.appendChild(li);
};

//Vamos a controlar el evento submit del formulario
form.addEventListener("submit", (ev) => {
  //Evitamos que el formulario al hacer submit recargue la pagina, quitandole su comportamiento por defecto
  ev.preventDefault();
  //Si tuviera algun error en el campo de errores lo vaciamos para no acumularlos
  error.textContent = "";
  if (input.value === "") {
    error.textContent = "Por favor, inserta un todo";
    return;
  }
  //Le pasamos por argumento el valor a la función createTodo
  createTodo(input.value);
  //Vaciamos el input para escribir otra cosa
  input.value = "";
});
