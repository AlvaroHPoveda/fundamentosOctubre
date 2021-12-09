"use strict"

let form = document.querySelector("#search-pokemon")
//let loader = document.getElementById("loader")

document.addEventListener( "DOMContentLoaded", () => fetchData() )
form.addEventListener("submit", event => buscarPokemon(event))

/*
    fetch( "url" )
    .then( function( response ) { //response es la respuesta que devuelve el servidor
        //Codigo a realizar cuando se cumpla la promesa
    })
*/

function fetchData( pokemon = "bulbasaur" ) {
    //loader.style.display = "flex"

    let url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`
    fetch( url )
    .then( response => response.json() )
    .then( data => {
        console.log( data )
        mostrarPokemon( data )
    })

}

function mostrarPokemon( pokemonData ) {
    let contenedor = document.getElementById( "pokemon-wrapper" )
    let img = contenedor.querySelector("img")
    let p = contenedor.querySelector("p")

    img.src = pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.front_default
    p.textContent = pokemonData.name

    setTimeout(() => {   
     //loader.style.display = "none"
    }, 2000);
}

function buscarPokemon(event) {
    //loader.style.display = "flex"

    let input = form.querySelector("input")
    let pokemonName = input.value.toLowerCase()

    fetchData( pokemonName )

    event.preventDefault()
}

function mostrarError() {
    loader.style.display = "none"
    let toast = document.getElementById("toast")
    toast.classList.toggle("escondido")
    setTimeout(() => toast.classList.toggle("escondido"), 
    3000)
}
