//SCOPE GLOBAL
let x = 10;
x = 3;

if (x) {
  //SCOPE LOCAL
  const y = 5;
}

console.log(y);
