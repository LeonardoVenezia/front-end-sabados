// const ajax = new XMLHttpRequest();

// ajax.open('GET', 'https://jsonplaceholder.typicode.com/users');

// ajax.addEventListener('load', crearUsuarios);

// ajax.send()

// function crearUsuarios() {
//     console.log(JSON.parse(ajax.response))
// }

////////// PROMESAS

// const promesa = new Promise((resolve, reject)=> {
//     setTimeout(()=> resolve('hola'), 1000);
// }).then((res)=> console.log(res))


// const placeholder = new Promise(peticionPlaceholder)

// function peticionPlaceholder(resolve, reject) {
//     const ajax = new XMLHttpRequest();
//     ajax.open('get', 'https://jsonplaceholder.typicode.com/user');
//     ajax.addEventListener('load', ()=> {
//         if ( ajax.status === 200 ) {
//             resolve(ajax.response)
//         } else {
//             reject(ajax.status)
//         }
//     })
//     ajax.send()
// }

// placeholder
//     .then((res)=> console.log(res), (err)=> console.log('hubo un error de tipo ' + err))
    // .catch((err)=> console.log('hubo un error de tipo ' + err))


//////// FETCH

// const p1 = fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
// //   .then(json => console.log(json))


// const p2 = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((res)=> res.json())
//     // .then((json)=> console.log(json))

// Promise.all([p1, p2])
//     .then((ambasPromesas) => {
//         console.log(ambasPromesas)
//     })

//// Promise.all

// const p1 = new Promise((resolve, reject)=> {
//     setTimeout(()=> resolve("hola"), 1000)
// })

// const p2 = new Promise((resolve, reject)=> {
//     setTimeout(()=> resolve("chau"), 2000)
// })

// Promise.all([p1, p2])
//     .then((ambasPromesas) => {
//         console.log(ambasPromesas)
//     })


const p2 = fetch('https://pokeapi.co/api/v2/pokemon?limit=0&offset=150')
    .then((res)=> res.json())
    .then((json)=> fetch(json.results[0].url))
    .then((urlResult) => urlResult.json())
    .then((res) => console.log(res))


fetch('urlcualquiera', {
    method: 'POST',
    headers: {headerQueMePidioElLocoDeBE},
    body: {
        nombre: inputNombre.value,
        pass: inputPass.value
    },
})