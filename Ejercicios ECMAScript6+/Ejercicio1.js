/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/

const funcion11 = (a,b) => {
    a = 10;
    b = 5;
    console.log(a + b)
}
funcion11()

const funcion12 = (a) => (b) => console.log(a + b);
const sumA = funcion12(10);
sumA(5);

const funcion13 = (a,b) =>{
    return (a + b)
}
console.log(funcion13(10,5))