// var variable = 10
// let otraVariable = "string"
// const constante = {clave:'valor'}

const dia = 'domingo'

const numero = 1000;
const string = 'oraciones largas o cortas' // ""
const string2 = `Hoy es ${dia}`

// console.log(string2)

const booleano = true // false
const array = ['string', 89, [false, "hola"], "otra cosa"];

// console.log(array[2][1])

const objeto = {
    clave: 'valor',
    nombre: 'Ricardo',
    edad: 10,
}

// console.log(objeto.edad)
// console.log(objeto['nombre'])

// console.log(numero.length)
// console.log(objeto.noexiste)

const indefinido = undefined;
const nulo = null;

// indefinido.algo


// condicionales

// if(objeto.edad !== 110 && booleano ) {
//     console.log("dio true")
// } else {
//     console.log("dio falso")
// }

// ciclos
// const arrayEjemplo = [1,2,34,5,6,7,8,9,0]
// for(let i =0; i < arrayEjemplo.length; i++) {
//     console.log(arrayEjemplo[i])
// }

// let iWhile = 0;
// while (iWhile < 10) {
//     console.log(iWhile)
//     iWhile++
// }

// funciones

function nombre(arg, arg2) {
    console.log(`Hola ${arg}`)
    if (!arg2) {
        console.log(`Hola ${arg2}!!!!!`)
    }
}

// nombre("mundo")
// nombre('carlitos', "juanita")
// nombre()

// DOM

// const parrafo = document.getElementById("parrafo")
// const parrafos = document.getElementsByClassName("parrafo")
// const parrafos = document.getElementsByTagName("p")

// const parrafo = document.querySelector('#parrafo');
// const parrafos = document.querySelectorAll('p');

// console.log(parrafo)

// const img = document.querySelector('img');


// img.id = 'id';
// img.alt = 'imagen'
// img.src = 'img.jpg';

// img.classList.add('desactivado');
// img.classList.remove('desactivado');
// img.classList.toggle('desactivado');
// img.classList.toggle('desactivado');

// const img = document.createElement('img');

// img.id = 'id';
// img.alt = 'imagen'
// img.src = 'img.jpg';

// console.log(img)

const div = document.querySelector('div');

// div.appendChild(img);

// document.body.appendChild(img);

// parrafo.textContent = "hola mundo";
// parrafo.innerText = "hola mundo";
// parrafo.innerHTML = "<h1>hola mundo</h1>";
console.log(parrafo.textContent)


// click

const imagen = document.querySelector('img');

imagen.addEventListener('click', callback);

function callback() {
    imagen.classList.toggle('desactivado');
}

// Eventos

const eventos = document.querySelector('#eventos');
const eventos2 = document.querySelector('#eventos2');

// eventos.addEventListener('nombre del evento', referenciaFuncion);
// eventos.removeEventListener('nombre del evento', referenciaFuncion);

// eventos.addEventListener('click', function() {
//     console.log("disparando click")
// })

eventos.addEventListener('click', otroLado)
eventos2.addEventListener('click', otroLado)
// eventos.removeEventListener('click', otroLado)

function otroLado(e) {
    const elemento = e.target;
    elemento.textContent = 'nuevo texto'
}

// eventos.onclick = function() {
//     console.log("onclick");
// }

// eventos.onclick = onclickDos;

// function onclickDos() {
//     console.log("onclick2");
// }