/*Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.*/


const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];

  function findArrayIndex(array, param) {
    for (let index = 0; index < array.length; index++) {
       if (param === array[index]) {
        return array.indexOf(param)
       } 
    }
    }

   function removeItem (array, text){
        let removed = findArrayIndex(array,text);
        for (let index = 0; index < array.length; index++) {
               if (text === array[index]) {
                 array.splice(removed,1)
               }
     }
        return array
    }

console.log(removeItem(mainCharacters ,"Luke"));
console.log((removeItem(mainCharacters ,"Rey")));
console.log((removeItem(mainCharacters ,"Obi-Wan")));
console.log((removeItem(mainCharacters ,"Chewbacca")));
