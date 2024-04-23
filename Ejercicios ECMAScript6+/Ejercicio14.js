/*Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random()*/

function rollDice(numero){
    return Math.floor(Math.random()*numero + 1); // floor es para que redondee hacia abajo el número decimal ya que random genera un número aleatorio decimal entre 0 y 1, se multiplica por las caras del dado este número entre cero para que siempre salga múltiplo de ese mismo, aquí sería entre de 0 a 5.9999 y uno para que siempe sea múltiplo de seis y se le suma 1 para que nunca pueda salir cero y también salga seis si el resultado es 5.xxxx
}

console.log(rollDice(6));