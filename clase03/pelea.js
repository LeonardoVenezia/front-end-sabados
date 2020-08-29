const azul = {
    vida: 100,
    fuerza: 10,
    elemento: document.querySelector('#azul'),
    elementoVida: document.querySelector('#vidaAzul'),
    mensaje: "Has morido",
}

const rojo = {
    vida: 100,
    fuerza: 10,
    elemento: document.querySelector('#rojo'),
    elementoVida: document.querySelector('#vidaRojo'),
    mensaje: "En tu cara azulito",
}


function vidaUpdate() {
    azul.elementoVida.textContent = azul.vida;
    rojo.elementoVida.textContent = rojo.vida;
}

const colores = {
    azul: "azullll",
    rojo: "rojoooo"
}

function pelea() {

    // console.log(colores[this.dataset.peleador])

    let golpeador;
    let golpeado;
    if (this.dataset.peleador === "azul") {
        golpeado = rojo;
        golpeador = azul;
    } else {
        golpeado = azul;
        golpeador = rojo;
    }

    golpeado.vida = golpeado.vida - golpeador.fuerza;
    vidaUpdate();

    if ( golpeado.vida <= 0 ) {
        alert(golpeador.mensaje)
        golpeador.elemento.removeEventListener('click', pelea);
    }
}

azul.elemento.addEventListener('click', pelea);
rojo.elemento.addEventListener('click', pelea);


vidaUpdate()



// for (var i = 0; i<10; i++) {
//     console.log(i)
// }

// console.log(i)


// const obj = {
//     vida: 100
// }

// const obj2 = obj;

// obj2.vida = 50;

// console.log(obj)