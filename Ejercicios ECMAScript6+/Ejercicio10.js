/*Dado el siguiente javascript usa forof y forin para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];


const average = "";
for (const user of users) {//aquí coge cada usuario
  let suma = 0; // las variables deben colocarse fuera de for in para que vayan sumando en cada vuelta, si las colocamos dentro del for in se reinicia su valor en cada vuelta del for in y siempre valdrán cero
  let quantitySound = 0;
    for (const favoritesSound in user.favoritesSounds) {  // aquí accedemos al objeto
      suma += +user.favoritesSounds[favoritesSound].volume; //sacamos el volumen por usuario
      quantitySound++;
     } // con el + delante de un string numérico lo transformamos en un number sin usar parseInt parseFloat pero no se pueden usar propiedades como .length
     console.log(user.name + ":" + suma/quantitySound);
      }

  

