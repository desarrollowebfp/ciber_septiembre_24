//Recupero los elementos de mi formulario
const userForm = document.querySelector("#userForm");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const loginBtn = document.querySelector("#loginBtn");

//Añadimos un escuchador de eventos de tipo submit al formulario
userForm.addEventListener("submit", (ev) => {
  //Prevenimos el comportamiento por defecto del evento submit, que es recargar la web
  ev.preventDefault();
  //Vamos a customizar el modo de mostrar la respuesta de formulario
  if (usernameInput.value !== "" && passwordInput.value !== "") {
    userForm.style.display = "none";
    document.querySelector("#result").innerHTML = "Welcome " + usernameInput.value;
  } else {
    alert("Error en el login")
  }
});

//Recuperamos los botones de ver y ocultar
const seeBtn = document.querySelector("#seeBtn");
const hideBtn = document.querySelector("#hideBtn");

seeBtn.addEventListener("click", () => {
  passwordInput.type = "text";
});

hideBtn.addEventListener("click", () => {
  passwordInput.type = "password";
});

//Eventos input
usernameInput.addEventListener("input", () => {
  if (usernameInput.value.length >= 4) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
});
