//// PROTOTIPOS


function ConstructoraA(a, b) {
    this.a = a;
    this.b = b;
}

ConstructoraA.prototype = {
    hablar: function () {
        console.log(this.a)
    }
}

function ConstructoraB(a, b) {
    this.a = a;
    this.b = b;
    this.hablar = function () {
        console.log(this.a + this.b)
    }
}

ConstructoraB.prototype = {
    hablar: function () {
        console.log(this.a)
    }
}

const obja = new ConstructoraA("Hola mundo", 2020)
const obja2 = new ConstructoraA("chau mundo", 1990)
const objb = new ConstructoraB("1111111111", 2222222)

console.log(obja)
console.log(obja2)
console.log(objb)
objb.hablar()

String.prototype.queSos = function() {
    console.log(this)
}

const palabra = 'palabra';

palabra.queSos()

////////// CLASES

class Clase {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    saludar() {
        console.log(`Mi nombre es ${this.a} ${this.b}`)
    }
    set setear(arg) {
        this.a = arg
    }
    get obtener() {
        return this.b
    }
}

const claseInst = new Clase("A", "B")

// console.log(claseInst)

// claseInst.setear = "hola mundo"

// claseInst.saludar()

// console.log(claseInst.obtener)

class ClaseHijo extends Clase {
    constructor(a,b,c,d) {
        super(a,b)
        this.c = c;
        this.d = d;
    }
}

const hijo = new ClaseHijo('a', 'b', 'c', 'd')
console.log(hijo)

