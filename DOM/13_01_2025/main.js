//READ

//QUERYSELECTOR -> RECUPERA UN ELEMENTO
const subtitulo = document.querySelector("h2");
const parrafo = document.querySelector(".parrafo");
//QUERYSELECTORALL -> RECUPERA VARIOS ELEMENTOS
const lis = document.querySelectorAll("li");

//EJEMPLO
const title = document.querySelector("#title");
title.textContent = "Ahora DOM es dinámico";

const animales = ["Perro", "Gato", "Loro", "Pato", "Elefante"];
for (const animal of animales) {
  const p = document.createElement("p");
  p.textContent = animal;
  document.body.appendChild(p);
}
