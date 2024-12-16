for (let i = 0; i < 3; i++) {
  console.log("El valor de i es:", i);
}

// i = 0 -> SE CUMPLE -> ME LLEVO UNA ->"El valor de i es: 0"
// i = 1 -> SE CUMPLE -> ME LLEVO UNA -> "El valor de i es: 1"
// i = 2 -> SE CUMPLE -> ME LLEVO UNA -> "El valor de i es: 2"
// i = 3 -> NO SE CUMPLE -> SE ROMPE EL BUCLE

const alumnos = ["Juan Antonio", "George", "Aarón", "Clarance", "Aroa", "Iker"];

for (let i = 0; i < alumnos.length; i++) {
  const alumno = alumnos[i];
  console.log(alumno);
}

// i = 0 -> ES MENOR QUE 3 -> ME LLEVO UNA -> alumnos[0] -> Juan Antonio
// i = 1 -> ES MENOR QUE 3 -> ME LLEVO UNA -> alumnos[1] -> George
// i = 2 -> ES MENOR QUE 3 -> ME LLEVO UNA  -> alumnos[2] -> Aarón
// i = 3 -> NO ES MENOR QUE 3 -> SE ACABA EL BUCLE

for (const alumno of alumnos) {
  console.log(alumno);
}

//

const numeros = [10, 10, 2, 5, 14, 5.6];

let counter = 0;

/* for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  counter += numero;
  console.log(counter);
} */

for (const numero of numeros) {
  counter += numero;
}

console.log(counter);

//

const notas = [
  { nombre: 'Plástica', nota: 9 },
  { nombre: 'Ciencias Sociales', nota: 7 },
  { nombre: 'Plástica', nota: 5 },
  { nombre: 'Educación Física', nota: 6 },
  { nombre: 'Ciencias Sociales', nota: 10 },
  { nombre: 'Lengua', nota: 1 },
  { nombre: 'Música', nota: 9 },
  { nombre: 'Matemáticas', nota: 8 }
]

let totalNotas = 0;

for (const nota of notas) {
  totalNotas += nota.nota;
}

console.log("La media de tu curso es:", totalNotas / notas.length)
