const title = document.querySelector("h1");
title.textContent = "Este es el nuevo título";
title.id = "title";

title.remove();

//CREAR ELEMENTOS
const parrafo = document.createElement("p");
parrafo.className = "parrafo";
parrafo.textContent =
  "Esto es un párrafo creado mediante DOM e inyectado dinámicamente en el body del documento";

document.body.appendChild(parrafo);

//

const aboutMeSection = document.querySelector("#aboutme");

/* const h2 = document.createElement("h2");
h2.textContent = "About Me";
aboutMeSection.appendChild(h2);

const description = document.createElement("p");
description.textContent = "Esta es mi primera página creada mediante DOM";
description.className = "parrafo";
aboutMeSection.appendChild(description);

const img = document.createElement("img");
img.src = "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg";
img.alt = "Avatar de avatar";
aboutMeSection.appendChild(img); */

const avatarSrc =
  "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg";
const avatarAlt = "Avatar de avatar";

aboutMeSection.innerHTML = `
<h2>${100 + 20 * 2}</h2>
<p>Esta es mi primera página creada mediante DOM</p>
<img src="${avatarSrc}" alt="${avatarAlt}"/>
`;

const alimentos = ["Palmeras", "Yogur", "Coca Cola", "Pan", "Agua", "Manzana"];

for (const alimento of alimentos) {
  
  const p = document.createElement("p");
  p.className = "parrafo";
  p.textContent = alimento;
  console.log(p)
  aboutMeSection.appendChild(p);
}