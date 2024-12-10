const refresco = {
  marca: "Coca Cola",
  precio: 2,
  color: "Rojo",
  disponible: true,
  ingredientes: ["Azucar", "Agua", "Colorante"],
};

//Metodos para acceder a las propiedades
console.log(refresco.color);
console.log(refresco["color"]);

//Crear propiedades
refresco.origen = "USA";
console.log(refresco);

//Editar propiedades
refresco.origen = "UK";
console.log(refresco)

//Borrar una propiedad
delete refresco.disponible;
console.log(refresco);
