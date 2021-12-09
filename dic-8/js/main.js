
/*let form = document.querySelector( "form" )

form.addEventListener("submit", event => leerFormulario( event ))

function leerFormulario(event) {
    let userName = document.getElementById("username").value
    let email = form.querySelector("#email").value
    let password = document.getElementById("password").value
    
    let userData = {
        userName : userName,
        email: email,
        password: password
    } 
    enviarInformacion( JSON.stringify( userData ) )

    event.preventDefault()
}*/

/*fetch( "url", {
    method: "METODO",
    headers: {
        'Content-Type' : 'application/json'
    },
    body: {
        'info': "Informacion en formato JSON"
    }
})
*/
/*function enviarInformacion( data ) {
    console.log( data )

    fetch( "./register", {
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: data
    })
    .then( response => response.json() )
    .then( data => console.log(data) )
    .catch( error => alert( error ) )
}
*/


/*
ASINCRONO: No ocurre en tiempo real. Las respuestas pueden procesarse de forma diferida

BLOQUEANTE: No nos permite continuar

NO BLOQUEANTE: Nos devuelve el control independientemente del resultado de la tarea

PARALELISMO: Tareas que ocurren de forma simultanea

*/

/*document.addEventListener( "DOMContentLoaded", () => fetchData() )

function fetchData( pokemon = "bulbasaur" ) {
    console.log( "1" )

    let url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`
    fetch( url )
    .then( response => response.json() )
    .then( data =>  console.log( data ))

    console.log("2")

}
*/

/*(function () {
    console.log(1)
    setTimeout(() => console.log(2) , 5000);
    setTimeout(() => console.log(3), 3000);  
    console.log( 4 )

})()
*/


/*
async function funcionAsincrona() {
    console.log( 1 )
    
    let url = `https://pokeapi.co/api/v2/pokemon/pikachu`
    //Espera a que una promesa se resuelva
    await   fetch( url )
            .then( response => response.json() )
            .then( data =>  console.log( data ))

    console.log( 2 )
}

funcionAsincrona()

*/


/*const promesa = new Promise( ( resolve, reject ) => {
   //codigo de la promesa
   //resolve()  en caso de que todo haya salido bien
   //reject()  en caso de que haya algun error
})*/

const promesa = ( numero ) => new Promise( (resolve, reject) =>{
    setTimeout(() => {    
        if( (numero % 2) === 0 ){
            resolve( "Es par!, todo OK" )
        }else{
            reject( "Ups, algo salió mal" )
        }
    }, 2000);
})


/*
promesa( 11 )
.then( resultado => console.log( resultado ) )
.catch( error => console.error( error )  )
*/


async function funcionAsincrona(number) {
    try {
        console.log(1)
        let resultadoPromesa = await promesa(number)
        console.log( resultadoPromesa )
        console.log(2)
        
    } catch (error) {
        console.error( error);
    }

}
funcionAsincrona( 15 )
