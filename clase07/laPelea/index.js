const azul = document.querySelector('#azul');
const rojo = document.querySelector('#rojo');


class Luchador {
    constructor(ataque, vida, elemento) {
        this.ataque= ataque;
        this.vida= vida;
        this.elemento = elemento;
    }
    golpear(golpeado) {
        golpeado.vida = golpeado.vida - this.ataque;
        golpeado.elemento.textContent = golpeado.vida;
    }
}
class Azules extends Luchador {
    constructor(ataque, vida, elemento) {
        super(ataque, vida, elemento)
        this.ira = 0;
    }
    golpeEspecial(golpeado) {
        if(this.ira > 4) {
            golpeado.vida = golpeado.vida - (this.ataque * 2);
        } else {
            console.log('Falta ira');
            this.golpear(golpeado);
        }
    }
    golpear(golpeado) {
        golpeado.vida = golpeado.vida - this.ataque;
        golpeado.elemento.textContent = golpeado.vida;
        this.ira++
    }
}

class Rojos extends Luchador {
    constructor(ataque, vida, elemento) {
        super(ataque, vida, elemento)
    }
    sobornoEspecial() {
        console.log("este es mi super billetín")
    }
}

const luchadorAzul = new Azules(10, 100, azul);
const luchadorRojo = new Rojos(10, 100, rojo);

// luchadorAzul.golpear(luchadorRojo)
// luchadorAzul.golpear(luchadorRojo)
// luchadorAzul.golpeEspecial(luchadorRojo)
// luchadorAzul.golpear(luchadorRojo)
// luchadorAzul.golpear(luchadorRojo)
// luchadorAzul.golpeEspecial(luchadorRojo)

// luchadorRojo.golpear(luchadorAzul)
// luchadorRojo.golpear(luchadorAzul)

// console.log(luchadorAzul)

azul.addEventListener('click', ()=> luchadorAzul.golpear(luchadorRojo));
rojo.addEventListener('click', ()=> luchadorRojo.golpear(luchadorAzul));

