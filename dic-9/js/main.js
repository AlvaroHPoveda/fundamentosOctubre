"use stric"

const URL = "https://rickandmortyapi.com/api/"
const main = document.querySelector( "main" )

document.addEventListener( "DOMContentLoaded", () => consumirAPI()  )

async function consumirAPI() {
    
    let data = await fetch( `${URL}character` )
                .then( response => response.json() )
                .then( data => data )
                .catch( error => console.error("UPS! ALGO SALIO MUY MAL", error) )

    mostrarPersonajes( data )

}

function mostrarPersonajes( personajesData ) {
    console.log( personajesData )

    let fragmento = ""

    personajesData.results.map( (personaje, index) => {

        //console.log( personaje )
        //let name = personaje.name
        //let image = personaje.image 

        const { name, image, species } = personaje

        //console.log( name, image )

        fragmento +=   `
                        <article class="character-card">
                            <div class="avatar-neon">
                                <img src="${ image }" alt="">
                            </div>
                            <h5>${ name }</h5>
                            <p>ESPECIE: <span>${ species }</span> </p>
                        </article>
                    `
    })

    main.innerHTML = fragmento
}


//let frutas = [ "fresa", "manzana", "limon", "sandia" ]

//console.log( frutas[0] )
//let fruta1 = frutas[0]
//let fruta2 = frutas[1]

//const [ fruta1, fruta2, fruta3 ] = [...frutas]

//console.log( fruta1, fruta2, fruta3 )