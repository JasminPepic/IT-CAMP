// let x = 6;
// console.log(x);
// console.log("Hello" + "\n  + "Hello");  \n novi red

broj = 5;
unos = Number(prompt("Unesite broj"));

while (unos !== 0) {
  if (broj === unos) {
    console.log("Pogodili ste broj");
    break;
  }
  if (unos > broj) {
    console.log("Broj je veci");
  } else {
    console.log("Broj je manji");
  }
  unos = Number(prompt("Unesite novi broj"));
}
