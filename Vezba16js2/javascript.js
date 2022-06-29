let ime = "Jasmin";
let prezime = "Pepic";
let imeIprezime = ime +' ' prezime;
console.log(imeIprezime);

// ovo je isto

let ime = "Jasmin";
let prezime = "Pepic";
let imeIprezime = `$(ime) $(prezime)`;  //novaj se koristi, prvi se ne koristi
console.log(imeIprezime);