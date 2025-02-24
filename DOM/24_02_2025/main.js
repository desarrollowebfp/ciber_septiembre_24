//Recuperamos los nodos del documento HTML
const todoInput = document.querySelector("#todoInput");
const todoBtn = document.querySelector("#todoBtn");
const todosContainer = document.querySelector("#todosContainer");

//Definimos la función de agregar un TODO
const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("Escribe algo");
  } else {
    const li = document.createElement("li");
    //Recuperamos la fecha actual
    const date = new Date();
    const formattedDate = date.toLocaleString();
    li.textContent = todoText + " - " + formattedDate;
    //Añadimos la funcionalidad de borrar en cada uno de los li
    li.addEventListener("click", () => {
      li.remove();
    })
    todosContainer.appendChild(li);
    //Limpiamos el campo del input
    todoInput.value = ""
  }
};

//Añadimos la función de añadir TODO al botón
todoBtn.addEventListener("click", addTodo);
//Añadir la invocación de la función de añadir TODO mediante la tecla Enter
todoInput.addEventListener("keyup", (ev) => {
  if (ev.key === "Enter") {
    addTodo();
  }
});


//Hacerlo mediante un formulario
//Memorizar
//Botones para ordenar por fecha o por orden alfabetico
//Diferenciar los completados