/*5.6 Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputFilter = document.querySelector("input"); /*El atributo data-function="toFilterStreamers" es un ejemplo de un atributo de datos personalizado en HTML. Los atributos de datos personalizados permiten a los desarrolladores almacenar información personalizada dentro de los elementos HTML, sin afectar su representación visual ni su comportamiento por defecto. Estos atributos comienzan con el prefijo "data-" seguido de un nombre significativo.*/


/*inputFilter.addEventListener("input", function(){
    const searchStreamer = inputFilter.value.toLowerCase();

    const filteredStreamer = streamers.filter(strName =>{ 
        return strName.name.includes(searchStreamer);});
    console.log(filteredStreamer);
})*/

inputFilter.addEventListener("input", function(){
    const searchStreamer = inputFilter.value.toLowerCase(); 
   const nameFiltered = streamers.filter(streamer => { // con streamer.name entramos en el nombre de cada streamer ya que filter tiene el for incorporado
    return streamer.name.toLowerCase().includes(searchStreamer); //tolowercase es necesario para que todo lo pase a minúsculas y no aparezca un array vacío en la consola. Esto se lee como "devuelve el nombre del streamer en minúscula que incluya la búsqueda del input"
    });
    console.log(nameFiltered);
});
  