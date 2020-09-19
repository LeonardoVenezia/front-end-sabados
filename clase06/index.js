// let ajax = new XMLHttpRequest();

// ajax.open('get', 'url');

// ajax.addEventListener('load', ()=>{
//     let ajax = new XMLHttpRequest();

//     ajax.open('get', 'url');

//     ajax.addEventListener('load', ()=>{
//         let ajax = new XMLHttpRequest();

//         ajax.open('get', 'url');

//         ajax.addEventListener('load', ()=>{
//             console.log(ajax.response)
//         });

//         ajax.send()
//     });

//     ajax.send()
// });

// ajax.send()

// console.log(ajax.response)

// const promesa = new Promise((resolve, reject)=>{
//     const ajax = new XMLHttpRequest();

//     ajax.open('get', 'https://jsonplaceholder.typicode.com/todos/1');
    
//     ajax.addEventListener('load', ()=>{
//         if(ajax.status === 200) {
//             resolve(ajax.response);
//         } else {
//             reject('Ocurrió un error, intenta de vuelta');
//         }
//     });
    
//     ajax.send()
// })

// promesa
//     .then((res)=> {
//         const respuesta = JSON.parse(res)
//         console.log(respuesta)

//         const promesa = new Promise((resolve, reject)=> {
//             const ajax = new XMLHttpRequest();

//             ajax.open('get', `https://jsonplaceholder.typicode.com/todos/${respuesta.id + 20}`);
            
//             ajax.addEventListener('load', ()=>{
//                 if(ajax.status === 200) {
//                     resolve(ajax.response);
//                 } else {
//                     reject('Ocurrió un error, intenta de vuelta');
//                 }
//             });
            
//             ajax.send()
//         })
//         return promesa
//     })
//     .then((res2)=> {
//         const respuesta = JSON.parse(res2)
//         console.log(respuesta)
//     })


    // function pepito() {
    //     un monton de codigo ajax
    // }

    // pepito()
    // console.log("aaaaaaaaa")


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((res)=> res.json())
//     .then((obj) => console.log(obj))

// const promesa1 = fetch(bla bal bal) 

// Promise.all([promesa1, promesa2])

///////////////

function pepito() {
    let a = "lalala"
    function otraFunc() {
        console.log(a)
    }
    otraFunc()
}
pepito()
// console.log(a)

if (true) {
    var variable = "soy una variable global"
    let otraVar = "otra var"
}

console.log(variable)
// console.log(otraVar)

// for(var i=0; i<10; i++) {
//     console.log(i)
// }

// console.log(i)

function funcClousure(arg) {
    return function otraFunc(arg2) {
        return arg + arg2;
    }
}

const anios = funcClousure(10)
const meses = funcClousure(120)

const karina = anios(5)
const candela = anios(9)

const karinaMeses = anios(60)
const candelaMeses = anios(108)

console.log(karinaMeses)
console.log(candelaMeses)

////// scope

function uno() {
    let numero = 10;
    function suma() {
        console.log(numero + 10);
    }
    suma()
}

window.uno()

const obj = {
    numero: 10,
    hechizado: true,
    metodo: function(arg) {
        let hola = 'hola ' + arg
        console.log(this.numero)
        console.log(hola)
    }
}

obj.metodo('Leo');


///////function constructora

function Usuario(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log('hola, soy ' + this.nombre)
    }
    this.decirEdad = function() {
        console.log('Tengo ' + this.edad + ' años')
    }
    this.cumplirAños = function() {
        this.edad++
    }
}
// const ajax = new XMLHttpRequest()
// const promesa = new Promise((resolve ,reject)=>{})
// const objeto = new Object()
// console.log(objeto)

const ana = new Usuario('Ana', 20);
const martin = new Usuario('Martin', 22);
const vanina = new Usuario('Vanina', 30);
const bebe = new Usuario('NN', 0);

vanina.decirEdad()
vanina.cumplirAños()
vanina.decirEdad()

// console.log(ana, 'ana')
// console.log(martin, 'martin')
// console.log(vanina, 'vanina')
// console.log(bebe, 'bebe')
// const acita = {
//     Usuario: Usuario
// }

// acita.Usuario('Ana', 20)

// acita.delete.Usuario

