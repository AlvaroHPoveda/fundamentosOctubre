

/*
Declaracion de una funcion 
function nombreDeLaFuncion(params) {
    //instrucciones
    return 
}

nombreDeLafuncion( argumentos )
*/


/*
const nombreDeLaVariable =  function (parametros){
    //instrucciones
    return 
}

nombreDeLaVariable( argumento )

const funcionFlechaConParametros = ( parametro1, parametro2 ) => {
    //instrucciones
    return 
} 

const funcionFlechaConUnSoloParametro = parametro => {
    //instrucciones
    return 
}

const funcionFlechaConReturnImplicito = (parametro, parametro2) => //valorDeRetorno 

*/


//const sumarDosNumeros = ( num1, num2 ) => num1 + num2

/*
const sumarDosNumeros = ( num1, num2 ) => {
    return num1 + num2
}

let resultado = sumarDosNumeros( 10, 5 )
console.log( resultado )


if( true ){
    console.log("es verdad")
}

if( false )  console.log("es verdad")

//Operador ternario
//condicion ? instrucciones en caso de que la condicion sea true : las instrucciones en caso de que sea false 

if( 2 < 5 ){
    console.log("es menor")
}else{
    console.log("es mayor")
}

2 < 5 ? console.log("es menor") : console.log( "es mayor" )

saludar("Brenda")


function saludar( nombre ) {
    console.log( `Hola ${nombre}!` )
}

const darInformacion = (nombre, edad) => console.log( `Me llamo ${nombre} y tengo ${edad} años`)

darInformacion("Brenda", 26)
*/

//CALLBACK


/*function mostrarInformacion(nombre, edad){
    console.log( `Me llamo ${nombre} y tengo ${edad} años`)
}

function obtenerInformacion( callback ) {
    let nombre = prompt( "Ingresa tu nombre" )
    let edad = prompt("Ingresa tu edad")

    callback( nombre, edad )
}

obtenerInformacion( mostrarInformacion )
*/

/*
function obtenerInformacion( callback ){
    let nombre = prompt( "Ingresa tu nombre" )
    let edad = prompt("Ingresa tu edad")

    callback( nombre, edad )  
}


obtenerInformacion( (nombre, edad) => console.log( `Me llamo ${nombre} y tengo ${edad} años`))
*/

//FUNCION AUTOINVOCADA
//Es invocada automaticamente sin ser llamada

/*(function (){
    //instrucciones
    return
})()
*/

/*
let variable = "algo";

(function(){
    alert("Hola mundo!")
})()
*/

/*
function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
console.log( suma5 )
var suma10 = creaSumador(10);

console.log( suma5(2) );  // muestra 7
console.log(suma10(2)); // muestra 12 
*/


//FUNCIONES DE ORDEN SUPERIOR
//Funciones que aceptan otras funciones como parametros o retornan funciones


let numbers = [ 2, 4, 6, 7, 8, 12 ]

let pares = []

let resultado = numbers.forEach( ( elemento, indice, array ) =>{
    if( elemento % 2 === 0 ) pares.push( elemento )
})

console.log( resultado )
console.log( pares )

let resultadoMap = numbers.map( (elemento, indice, array) =>{
  if( elemento % 2 === 0 ) return elemento  
})

console.log( resultadoMap )

let resultadoFilter = numbers.filter( (elemento, indice, array) => ( elemento % 2 ) === 0)
console.log( resultadoFilter )


let resultadoReduce = numbers.reduce( (acumulador, valorActual, indice, arreglo) => acumulador + valorActual, 0)

console.log( resultadoReduce )
