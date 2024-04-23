/*Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.*/


const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array,param1,param2){
let change = array[param1];
array[param1] = array[param2];
array[param2] = change;
}

swap(fantasticFour,0,3)

console.log(fantasticFour)

//En este ejemplo, la función intercambiarElementos() toma tres argumentos: el array en el que se realizará el intercambio, y los índices de los elementos que se intercambiarán. Luego, dentro de la función, se realiza el intercambio de los elementos usando una variable temporal para almacenar temporalmente el valor de uno de los elementos mientras se realiza el intercambio.