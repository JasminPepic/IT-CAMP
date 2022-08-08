// broj = prompt("Unesite broj");
// a = 0;
// for (i = 1; i <= broj; i++) {
//   a = a + i;
// }
// console.log(a);

// -----------------
// sum = 0;
// avg = 0;

// for (i = 1; i <= 10; i++) {
//   broj = Number(prompt("Unesite broj"));
//   sum = sum + broj;
// }
// avg = sum / 10;

// console.log(sum);
// console.log(avg);

// ----------------

// broj = Number(prompt("Unesite broj"));

// for (i = 1; i <= broj; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz");
//   } else if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
// }

// ----------

broj = Number(prompt("Unesite broj"));
for (i = 1; i <= broj; i++) {
  a = i ** 3;
  console.log("Number is" + i + "and the cube is of" + a);
}
