broj = Number(prompt("Unesite koliko je stepeni"));
if (broj < 0) {
  console.log("It's freezing");
} else if (broj >= 0 && broj <= 10) {
  console.log("It's very cold");
} else if (broj > 10 && broj <= 20) {
  console.log("It's cold");
} else if (broj > 20 && broj <= 30) {
  console.log("It's normal");
} else if (broj > 30 && broj < 40) {
  console.log("It's hot");
} else if (broj >= 40) {
  console.log("It's very hot");
} else {
  console.log("Error!");
}
