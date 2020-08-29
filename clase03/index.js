/// BUBBLE Y CAPTURING
/* 
const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');

uno.addEventListener('click', (e)=> {
    e.stopPropagation()
    console.log(e.target)
    console.log('UNO')
}, true )
dos.addEventListener('click', (e)=> {
    e.stopPropagation()
    console.log(e.target)
    console.log('DOS')
}, true )
tres.addEventListener('click', (e)=> {
    e.stopPropagation()
    console.log(e.target)
    console.log('TRES')
}, true )

*/
// Funciones iteradoras

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

// const diasMapeados = dias.map((item)=> {
//     return `<p>${item}</p>`
// })

// console.log(diasMapeados)

// const diasFiltrados = dias.filter( item => item.length > 6 )

// console.log(diasFiltrados)

// const arrayFind = dias.find((item)=> item === 'jueves');
// const arrayFind = dias.find((item)=> item.nombre === 'jueves' && item.pass === 'redtryu');

// console.log(arrayFind)

// const arraySome = dias.some((item)=> item === 'jueves');

// console.log(arraySome)


// dias.forEach((item, index)=> console.log(item, index))


// const diasReducidos = dias.reduce((accu, item) => {
//     console.log(accu, 'accu')
//     console.log(item, 'item')
//     return accu + item + ' ';
// }, '')

// console.log(diasReducidos)


//////////////////////////////////////////////////

// setTimeout(foo, 3000)

// function foo() {
//     console.log("ejemplo")
// }

function uno() {
     console.log("uno")
}
 function dos() {
    console.log("dos")
}
function tres() {
    console.log("tres")
}

setTimeout(uno, 1000)
setTimeout(dos, 0)
tres()


function a() {
    b()
    c()
}
function b() {
    c()
}
function c() {
    console.log("holaaaaaa");
}

a()
