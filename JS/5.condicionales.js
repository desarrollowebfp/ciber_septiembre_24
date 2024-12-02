const hasEstudiado = false;
const hasLimpiado = true;

if (hasEstudiado || hasLimpiado) {
  console.log("Puedes jugar");
} else {
  console.log("Tienes que terminar tus cosas");
}

const score = 8;

//INSUFICIENTE - SUFICIENTE - BIEN - NOTABLE - SOBRESALIENTE

if (score >= 0 && score <= 4) {
  console.log("Insuficiente");
} else if (score == 5) {
  console.log("Suficiente");
} else if (score == 6) {
  console.log("Bien");
} else if (score >= 7 && score <= 8) {
  console.log("Notable");
} else if (score >= 9 && score <= 10) {
  console.log("Sobresaliente");
} else {
  console.log("No computa");
}

//SWITCH

const consola = "PlayStation";

switch (consola) {
  case "PlayStation":
    console.log("Es de Sony");
    break;
  case "Switch":
    console.log("Es de Nintendo");
    break;
  default:
    console.log("No se qué consola es");
    break;
}

//TERNARIO
const age = 18;

age >= 18 ? console.log("Puedes pasar") : console.log("No puedes pasar");

//ESTRICTAMENTE
const x = 10;

if(x == "10"){
  console.log("Correcto")
}