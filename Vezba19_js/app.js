console.log("Hello world");

//Data type - Primitivni i referentni

//Primitivni:
//Brojevi - 12, 59, -65, 52.5

//String - pod znacima navoda. Mogu i "Jasmin" i 'Jasmin'

//Boolean - tacno i netacno - true and false

// unos = prompt{"Unesite broj 5"};

// if (unos == 5){
//     console.log("UNELI STE BROJ 5")
// }

broj1 = Number(prompt("Unesite broj")); //moye i bez Number
broj2 = Number(prompt("Unesite broj"));
broj3 = Number(prompt("Unesite broj"));

// console.log(typeof broj1);
// console.log(typeof broj2);

// if (broj1 < broj2 && broj1 < broj3) {
//   console.log(broj1);
// }
// if (broj2 < broj1 && broj2 < broj3) {
//   console.log(broj2);
// }
// if (broj3 < broj1 && broj3 < broj2) {
//   console.log(broj3);
// }
if (broj1 < broj2 && broj1 < broj3) 
{
  console.log("Najmanji broj" + broj1);
}
else
{
    consol.log("Broj je najveci" + broj1);
}
else if (broj2 < broj3)
{
    consol.log("Najmanji broj" + broj2);
}
else
{
    consol.log("Najmanji broj" + broj3);
}