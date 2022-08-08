profit = Number(prompt("Unesite profit"));
gubitak = Number(prompt("Unesite gubitak"));
if (profit > gubitak) {
  console.log("Zaradili ste " + (profit - gubitak));
} else if (gubitak > profit) {
  console.log("Izgubili ste " + (gubitak - profit));
} else {
  console.log("Krompir brate");
}
