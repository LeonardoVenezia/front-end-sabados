const contenedor = document.querySelector('#contenedor');
const reservar = document.querySelector('#reservar');


const respuestaMock = [
    {
        numero: 1,
        disponible: false
    },
    {
        numero: 2,
        disponible: false
    },
    {
        numero: 3,
        disponible: true
    },
    {
        numero: 4,
        disponible: true
    },
    {
        numero: 5,
        disponible: false
    },
    {
        numero: 6,
        disponible: true
    },
    {
        numero: 7,
        disponible: false
    },
    {
        numero: 8,
        disponible: true
    },
]

let butacasSeleccionadas = [];


function crearButaca(item) {
    const butaca = document.createElement('div');
    butaca.id = item.numero;
    butaca.classList.add('butaca');
    if (!item.disponible) {
        butaca.classList.add('reservada');
    } else {
        butaca.addEventListener('click', seleccionarButaca)
    }
    butaca.dataset.numero = item.numero;
    // butaca.dataset.reservando = item.reservando;
    contenedor.appendChild(butaca);
}

function seleccionarButaca(e) {
    const numero = e.target.dataset.numero;
    // const reservando = e.target.dataset.reservando;
    // const elemento = e.target;
    e.target.classList.toggle('reservando');

    // if (reservando === 'true') {
    //     butacasSeleccionadas = butacasSeleccionadas.filter((item) => item !== numero);
    //     elemento.dataset.reservando = false;
    // } else {
    //     elemento.dataset.reservando = true;
    //     butacasSeleccionadas.push(numero);
    // }

    
    if (butacasSeleccionadas.some(item => item === numero)) {
        butacasSeleccionadas = butacasSeleccionadas.filter((item) => item !== numero);
    } else {
        butacasSeleccionadas.push(numero);
    }



}

// crearButaca({
//     numero: 8,
//     disponible: true,
//     // reservando: false,
// })


respuestaMock.forEach((item)=> crearButaca(item))

reservar.addEventListener('click', ()=> console.log(butacasSeleccionadas))
