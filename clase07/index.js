

// repaso
// fn constructoras


// function Usuario(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.saludar = function(arg) {
//         console.log(`Hola soy ${this.nombre}. Buen día ${arg}`)
//     }
// }

// const juan = new Usuario('Juan', 'Perez')


// console.log(juan)
// juan.saludar('Leo')

// const boton = document.querySelector('#boton');
// const nombre = document.querySelector('#nombre');
// const apellido = document.querySelector('#apellido');

// boton.addEventListener('click', crearUsuario)

// let listaUsuarios = [];

// function crearUsuario() {
//     const nuevoUsuario = new Usuario(nombre.value, apellido.value);
//     listaUsuarios.push(nuevoUsuario)
//     console.log(listaUsuarios)
//     nombre.value = '';
//     apellido.value = '';
// }

// const ejemplo = {
//     nombre: "Ana",
//     saludar: function() {
//         console.log('hola, soy ' + this.nombre)
//     }
// }

// ejemplo.saludar()



// const uno = {
//     nombre: "pepito",
//     edad: 70,
// }

// const dos = {
//     nombre: null,
//     edad: 18,
// }



/////// PROTOTIPOS


// function Constructora(a, b) {
//     this.a = a;
//     this.b = b;
// }

// Constructora.prototype = {
//     c: 'C',
// }

// const ejemplo = new Constructora('A', 'B');
// const ejemplo2 = new Constructora('A2', 'B2');
// const ejemplo3 = new Constructora('A3', 'B3');

// Constructora.prototype = {
//     c: 'C',
// }

// console.log(ejemplo)
// console.log(ejemplo2)
// console.log(ejemplo3)

// function Arquero(distancia, punteria, ataque) {
//     this.distancia = distancia;
//     this.punteria = punteria;
//     this.ataque = ataque;
// }

// function Mele(armadura, ataque) {
//     this.armadura = armadura;
//     this.ataque = ataque;
//     this.agarre = function() {
//         console.log('Te estoy agarrando')
//     };
// }

// const prototipo = {
//     atacar: function() {
//         console.log(`Te estoy haciendo ${this.ataque} daños!`)
//     }
// }

// Arquero.prototype = prototipo;
// Mele.prototype = prototipo;

// function Enemigo() {
//     this.atacar = function() {
//         console.log(`Te estoy haciendo ${this.ataque} daños!`)
//     }
// }

// Enemigo.prototype = {
//     ejemplo: "ejemplo"
// }

// Arquero.prototype = prototipo;
// Mele.prototype = prototipo;


// const arqEj = new Arquero(100, 50, 70);
// const arqEj2 = new Arquero(100, 50, 70);
// const meleEj = new Mele(100, 50);
// const meleEj2 = new Mele(100, 50);

// const prototipo = new Enemigo();



// arqEj.__proto__ = {
//     protoNuevo: "Acabo de reemplazar al otro proto"
// }

// arqEj.__proto__.modificacion = "esto es una modificación"

// console.log(arqEj)
// console.log(arqEj2)
// console.log(meleEj)
// console.log(meleEj2)

// console.log([])
// Object
// Number
// String
// Array

String.prototype.metodo = function() {
 console.log(this)
}

const cadena = "Soy un string"

// cadena.metodo()


// Clases!!!

class Usuario {
    constructor(nombre, edad) {
        this.nombre= nombre;
        this.edad= edad;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre}`)
    }
    get mayorEdad() {
        return this.edad >= 18;
    }
    set cambioDeNombre(nuevoNombre) {
        this.nombre = nuevoNombre
    }
}

class Administrador extends Usuario {
    constructor(nombre, edad, fullPermisos) {
        super(nombre, edad)
        this.fullPermisos = fullPermisos;
    }

    soyAdmin() {
        console.log(`Soy admin y ${this.fullPermisos ? 'tengo todos los permisos' : 'no tengo los permisos'}`)
    }
}


const admin = new Administrador('Claudia', 45, true);

console.log(admin)
admin.soyAdmin()

// const otraCosa= admin.fullPermisos ? funcionUno() : funcionDos();

// function funcionUno() {
//     return 'valor function uno'
// }

// function funcionDos() {
//     return 'valor function dos'
// }

// console.log(otraCosa)

// const ejemplo = admin.fullPermisos || 'valor default'

// console.log(ejemplo)

// // const juan = new Usuario('Juan', 4)

// // juan.cambioDeNombre = "Juana";

// // console.log(juan)