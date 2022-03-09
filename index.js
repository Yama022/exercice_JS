const array = ['Michel', 'André', 'Jean', 'Pierre', 'Marie'];
console.log(array);

// supprime le dernier élément de l'array
function testPop() {
  array.pop();
  console.log('je rentre dedans')
}
// testPop();
console.log(array, 'pop');


const array2 = array;
// push ajoute un élément à la fin de l'array
array2.push('Alfred');
console.log(array2, 'push Alfred');


const array3 = array2;
array3.push('Bernard');
console.log(array3, 'push 2 Bernard');


function testSort(newArray) {
  console.log(array3, 'array3')
  // sort() trie les éléments de l'array
  newArray = array3.sort();
  console.log(newArray, 'sort');
  return newArray;
}
testSort();

console.log(array3, 'array3 après le sort');


// entries() renvoie un tableau d'entrées. Chaque entrée est un tableau de deux éléments. 
// La première entrée contient l'index de l'élément dans l'array. La seconde entrée contient l'élément.
const iterator = array3.entries();

console.log(iterator.next().value, 'array3 après le entries');
console.log(iterator.next().value, 'array3 après le entries');
console.log(iterator.next().value, 'array3 après le entries');


// array3.forEach(elem => console.log(elem, 'elem for each'));

// for (const elem of array3) {
//   console.log(elem, 'elem for of');
// }

// slice() renvoie une copie de l'array.
const arraySlice = array3.slice(0, 4);
const arraySlice1 = array3.slice(1, 4);

console.log(arraySlice, arraySlice1, 'arraySlice');

console.log(array3, 'array3 avant le splice');
// splice() modifie l'array.
const arraySplice = array3.splice(1, 2, 128, 4);
console.log(arraySplice, 'arraySplice');
// je log les 2 index de l'array
console.log(array3, 'array3 apres le splice');


const y = 1;
const x = y;
const z = " ";
// la valeur 'toto' est une valeur johnifiable (on peut la changer sans problème)
const arrayFrom = Array.from(array3, toto => toto + z + y)
console.log(arrayFrom, 'arrayFrom');



// includes() renvoie true si l'array contient l'élément passé en paramètre.
function testInclude() {
  if (array3.includes('Harry')) {
    console.log('Je renvoi bien Harry');
  } else {
    array3.push('Harry');
    console.log(array3, 'array3 après le push Harry');
  }
}
testInclude();


// join() renvoie une chaîne de caractères à partir de l'array.
const join = array3.join(' ');
console.log(join, 'array3 après le join');


const array4 = [1, 2, 35, 47, 587, 22, 7, 8, 19, 1000];
const map1 = array4.map(elem => elem + ' ' + "Coucou");
console.log(map1, 'map1');


let tableauOrig = [
  {clé:1, valeur:10},
  {clé:2, valeur:20},
  {clé:3, valeur: 30}
];
let tableauFormaté = tableauOrig.map(obj => {
  let rObj = {};
  rObj[obj.clé] = obj.valeur;
  return rObj;
});

console.log(tableauOrig, 'tableauOrig');
console.log(tableauFormaté, 'tableauFormaté');
