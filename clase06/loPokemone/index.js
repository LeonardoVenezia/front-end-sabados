// https://pokeapi.co/api/v2/pokemon/NOMBRE_POKEMON

const boton = document.querySelector('#buscar');
const buscador = document.querySelector('#buscador');
const pokemon = document.querySelector('#pokemon');

boton.addEventListener('click', buscar)

// sprites.front_default

function buscar() {
    const nombrePokemon = buscador.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        .then((res)=> res.json())
        .then((json)=> mostrarPokemon(json.sprites.front_default))
        .catch((err)=> errorHandler(err, nombrePokemon) )
}

function mostrarPokemon(img) {
    pokemon.innerHTML = `<img src="${img}" >`;
}

function errorHandler(err, nombrePokemon) {
    pokemon.innerHTML = `<p>${nombrePokemon} no existe</p>`;
    console.warn(err)
}
