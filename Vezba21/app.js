// *
// **
// ***
// ****

// broj = prompt("unesi");
// zvezda = "";
// for (i = 1; i <= broj; i++) {
//   console.log(zvezda);
//   zvezda = zvezda + i; //zvezda += "*"
// }

// 1
// 22
// 333
// 4444

// red = prompt("Unesite red");

// for (i = 1; i <= red; i++) {
//   str = "";
//   for (j = 1; j <= i; j++) {
//     str += i;
//   }
//   console.log(str);
// }

//   *
//  * *
// * * *

unos = Number(prompt("Unesi broj"));
brojZ = "";
for (i = 1; i <= unos; i++) {
  space = "";
  for (j = 1; j <= unos - i; j++) {
    space += " ";
  }
  brojZ += "* ";
  console.log(space + brojZ);
}
