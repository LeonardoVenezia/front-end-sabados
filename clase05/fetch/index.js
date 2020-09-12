let miUsuario = 1;
let posteos;
// const user1 = document.querySelector('#user1');
// const user2 = document.querySelector('#user2');

// user1.addEventListener('click', ()=> {
//     miUsuario = 1
//     filtrarPorUsuarios()
// })
// user2.addEventListener('click', ()=> {
//     miUsuario = 2
//     filtrarPorUsuarios()
// })

const select = document.querySelector('#select');
const selectedUser = document.querySelector('#selectedUser');

select.addEventListener('click', usuarioSeleccionado);

function usuarioSeleccionado() {
    miUsuario = Number(selectedUser.value);
    filtrarPorUsuarios()
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        posteos = posts;
        filtrarPorUsuarios()
    })

function filtrarPorUsuarios() {
    const postUsuario = posteos.filter( item => item.userId === miUsuario);
    mostrar(postUsuario)
}

function mostrar(posts) {
    const contenido = posts.reduce((acu, item) => {
        const html = `
        <div class="postContainer">
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        </div>
        `
        return acu + html;
    }, '')
    document.querySelector('#contenedor').innerHTML = contenido;
}