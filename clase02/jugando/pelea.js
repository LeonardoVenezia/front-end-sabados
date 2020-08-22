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

function pelea() {
    if ( rojo.vida > 0 ) {
        rojo.vida = rojo.vida - azul.fuerza;
        vidaUpdate();
    } else {
        alert(azul.mensaje)
        azul.elemento.removeEventListener('click', pelea);
    }
}

azul.elemento.addEventListener('click', pelea);


vidaUpdate()