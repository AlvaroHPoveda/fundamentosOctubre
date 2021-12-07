

let arregloNumeros = [ 1, 2, 3 ] 
let objetoUsuario = {
    nombre : "Brenda",
    edad: 26
}

let arregloJSON = JSON.stringify( arregloNumeros )

console.log( arregloNumeros )
console.log( arregloJSON )

console.log( objetoUsuario )
let JSONUsuario = JSON.stringify( objetoUsuario )
console.log( JSONUsuario )
console.log( JSON.stringify( "Una cadena de texto" ) )
console.log("Otra cadena")



let cadenaArreglo = '[ "Brenda", "Jorge", "Daniel" ]'

console.log( cadenaArreglo )
console.log( JSON.parse( cadenaArreglo ) )

console.log( JSON.parse( "100" ) )
//console.log( JSON.parse( "Me gustan los gatos" ) )
console.log( JSON.parse( `"Esto es un texto"` ) )



//Agregar informacion
localStorage.setItem( "userInformation", JSONUsuario )

//Consultar informacion

let informacionLocal = JSON.parse( localStorage.getItem( "userInformation" ) )
console.log( informacionLocal )

//Eliminar una propiedad
localStorage.removeItem( "userInformation" )

//Elimina toda la informacion
//localStorage.clear()

let carrito = [ 'Chocolates', 'Helado', 'Vino' ]
let carritoJSON = JSON.stringify( carrito )

localStorage.setItem( "carritoCompras", carritoJSON );

function agregarProducto( nuevoProducto ) {
    let carritoActual = JSON.parse( localStorage.getItem( "carritoCompras" ) )
    carritoActual.push( nuevoProducto )
    let carritoActualJSON = JSON.stringify( carritoActual )
    localStorage.setItem( "carritoCompras", carritoActualJSON )
}

agregarProducto( "Caramelos" )
agregarProducto( "Galletas" )

