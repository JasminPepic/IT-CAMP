prviUgao = Number(prompt("Unesite velicinu prvog ugla"));
drugiUgao = Number(prompt("Unesite velicinu drugog ugla"));
treciUgao = Number(prompt("Unesite velicinu treceg ugla"));
if (prviUgao + drugiUgao + treciUgao === 180) {
  console.log("Mozemo formirati trougao");
} else {
  console.log("Zbir unutrasnjih uglova je 180°, ne mozemo formirati trougao");
}
