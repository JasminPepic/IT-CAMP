// let imena = ["jasmin", "adnan", "emina", "5", "qqwrf"];

// console.log(imena);

// console.log(imena[0]);
// console.log(imena[1]);
// console.log(imena[2]);
// console.log(imena[3]);
// console.log(imena[4]);

// for (i = 0; i < imena.length; i++) {
//   console.log(imena[i]);
// }

// for (i = imena.length - 1; i >= 0; i--) {
//   console.log(imena[i]);
// }
// imena.length;

// const niz = ["ime", "prezime"];
// let imeprezime = "";

// for (i = 0; i < 1; i++) {
//   console.log(niz[i] + " " + niz[i + 1]);            prvi nacin
// }

// for (const el of niz) {
//   imeprezime += el + " ";    drugi nacin
// }
// console.log(imeprezime);

// broj = 5;
// unos = Number(prompt("Unesite broj"));

// while (unos !== 0) {
//   if (broj === unos) {
//     console.log("Pogodili ste broj");
//     break;
//   }
//   if (unos > broj) {
//     console.log("Broj je veci");
//   } else {
//     console.log("Broj je manji");
//   }
//   unos = Number(prompt("Unesite novi broj"));
// }

// let array = [];

// while (true) {
//   let unos = Number(prompt("unesi broj"));
//   if (unos % 3 === 0 && unos % 5 === 0) {
//     break;
//   } else {
//     array.push(unos);
//   }
// }
// console.log(array);

// let unos = String(prompt("Unesite recenicu"));
// let niz1 = [];
// let niz2 = [];
// // let unos1 = unos.replace(/\s+/g, "");
// // {
// //   niz1.push(unos1[i]);
// // }
// console.log(niz1);
// for (let i = 0; i < unos.length; i++) {
//   niz2.push(unos[i]);
// }
// for (let i = 0; i < unos.length - 1; i++) {
//   if (niz1[i == niz2[i]]) {
//     console.log("Polindrom");
//   } else {
//     console.log("Nije polindrom");
//     break;
//   }
// }

let unos = prompt("Unesite recenicu");
let niz1 = [];
let niz2 = [];

for (i = 0; i < unos.length; i++) {
  niz1.push(unos[i]);
}
console.log(niz1);

for (i = unos.length - 1; i >= 0; i--) {
  niz2.push(unos[i]);
}
console.log(niz2);
if (niz1 == niz2) {
  console.log("palindrom");
} else {
  console.log("nije palindrom");
}
