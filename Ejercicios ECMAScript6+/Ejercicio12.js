/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.*/


function findArrayIndex(array, param) {
for (let index = 0; index < array.length; index++) {
   if (param === array[index]) {
    return array.indexOf(param)
   } 
}
}



const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log((findArrayIndex(mainCharacters ,"Luke")));
console.log((findArrayIndex(mainCharacters ,"Rey")));
console.log((findArrayIndex(mainCharacters ,"Obi-Wan")));
console.log((findArrayIndex(mainCharacters ,"Chewbacca")));