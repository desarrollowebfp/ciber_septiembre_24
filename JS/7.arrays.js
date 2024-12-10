const alumnos = ["Juan Antonio", "Alejandro", "Alberto", "Aarón", "Adriana"];

//Devuelve la longitud
console.log(alumnos.length);

//Acceder a las posiciones
console.log(alumnos[4]);

//Editar elemento
alumnos[1] = "Eduardo";
console.log(alumnos);

//Push -> Añade al final
alumnos.push("Alejandro");
console.log(alumnos);

//Pop -> Elimina al final
alumnos.pop();
console.log(alumnos);

//Unshift -> Añade al principio
alumnos.unshift("Juan Antonio");
console.log(alumnos);

//Shift -> Elimina al principio
alumnos.shift();
console.log(alumnos);

//Reverse -> Invertir el array
alumnos.reverse();
console.log(alumnos);

//Sort -> Ordena alfabeticamente el array
alumnos.sort();
console.log(alumnos);
const numeros = [1, 34, 3, 12, 6, 111, 98, 87];
numeros.sort((a, b) => a - b);
console.log(numeros);

//IndexOf
console.log(alumnos.indexOf("Antonio"));

//Includes
console.log(alumnos.includes("Adriana"))

const string = "Hola"

console.log(string.length)