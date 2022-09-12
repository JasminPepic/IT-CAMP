// // definicija objekta, dva nacina

// // const a = {};

// // const b = new Objekt();

// //-------------

// // const auto = {
// //   vlasnik: "Jasmin",
// //   brojKonja: 87,
// //   boja: "crvena",
// //   servis: [1998, 1999, 2000],
// // };

// // console.log(auto["vlasnik"]); //ili  console.log(auto, vlasnik);

// // auto.godiste = 1997; //dodavanje u objekat  auto['godiste'] = 1997;

// // delete auto.vlasnik;

// // console.log(auto);

// // var longestPalindrom = function(s) {
// //     const map = {};

// //     for( let i = 0; i < s.length; i++){
// //         map[s[i]] = map[s[i]] + 1;
// //     }else{
// //         map[s[i]] = 1;
// //     }

// //     console.log(map);
// // }

// // longestPalindrom(s:'AsdakjshdAJSGHdjahKGSJKFASJfh')

// //http://csbin.io/callbacks

// // Challenge 1
// function addTwo(num) {
//   return num + 2;
// }
// // To check if you've completed it, uncomment these console.logs!
// // console.log(addTwo(3));
// // console.log(addTwo(10));
// // Challenge 2
// function addS(word) {
//   return word + "s";
// }
// // uncomment these to check your work
// // console.log(addS('pizza'));
// // console.log(addS('bagel'));
// // Challenge 3
// function map(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i]));
//   }
//   return newArray;
// }
// // console.log(map([1, 2, 3], addTwo));
// // Challenge 4
// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i]);
//   }
// }
// // see for yourself if your forEach works!
// // Challenge 5
// function mapWith(array, callback) {
//   const newArray = [];
//   forEach(array, (num) => newArray.push(callback(num)));
//   return newArray;
// }
// console.log(mapWith([1, 2, 3], addTwo));

// // Challenge 6
// function reduce(array, callback, initialValue) {
//   let prev;
//   let brojac;

//   if (typeof initialValue === "undefined") {
//     prev = array[0];
//     brojac = 1;
//   } else {
//     prev = initialValue;
//     brojac = 0;
//   }

//   for (let i = brojac; i < array.length; i++) {
//     prev = callback(prev, array[i]);
//   }

//   return prev;
// }

// // Challenge 7
// function checkSameValue(arr1, arr2) {
//   const newArray = [];
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.includes(arr2[i])) {
//       newArray.push(arr2[i]);
//     }
//   }
//   return newArray;
// }
// function intersection(arrays) {
//   return reduce(arrays, checkSameValue);
// }
// console.log(
//   intersection([
//     [5, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// );

// //-----------------

// kopiraj niz i pomnozi svaki clan niza sa 2

function copyArrayAndMultiplyBy2(array) {
  const newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }
  return newArray;
}

const array = [1, 2, 3];
const result = copyArrayAndMultiplyBy2(array);
