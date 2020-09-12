let soyUnaVariable = false
const ajax = new XMLHttpRequest();

ajax.open('GET', 'api/json.json');

ajax.addEventListener('load', ajaxCallback);

ajax.send();

function ajaxCallback() {
    if (ajax.status === 200) {
        const respuesta = ajax.response;
        const respuestaParseada = JSON.parse(respuesta);
        // console.log(respuestaParseada.data[0].nombre)
        // soyUnaVariable = true
        // console.log(soyUnaVariable)

        crearHistorial(respuestaParseada.data)
    }
}


function crearHistorial(data) {
    const elementos = data.filter((item)=> !item.deleted );
    const elementosMapeados = elementos.map(item => crearMensaje(item));
    mostrar(elementosMapeados);
}

function mostrar(el) {
    const mensajes = el.reduce((acu, item)=> {
        acu.appendChild(item)
        return acu;
    }, document.createDocumentFragment())
    document.body.appendChild(mensajes);
}


function crearMensaje(msj) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('contenedor');

    const nombre = document.createElement('p');
    nombre.classList.add('nombre');
    nombre.textContent = msj.nombre;

    const contenido = document.createElement('p');
    contenido.classList.add('contenido');
    contenido.textContent = msj.mensaje;

    contenedor.appendChild(nombre);
    contenedor.appendChild(contenido);

    return contenedor;
}




let obj = {
    "data": [
        {
            "nombre": "Carlitos",
            "mensaje": "Hola bb",
            "deleted": true
        },
        {
            "nombre": "Carlitos",
            "mensaje": "Como estás?",
            "deleted": false
        },
        {
            "nombre": "Carlitos",
            "mensaje": "Hola bbbbbbbbbbbbbb",
            "deleted": true
        },
        {
            "nombre": "Carlitos",
            "mensaje": "respondemeeee!!!!!!",
            "deleted": false
        }
    ]
}

// console.log(JSON.stringify(obj))


/**
 * La tareita
 * 
 * Consuman una api (igual que hicimos hoy)
 * 
 * La api debería preveerles un array con muchos productos
 * 
 * Muestren, ni necesidad de mostrarlo muy lindo, los productos. Y... channnn... 
 * 
 * Crear un boton de filtro a gusto
 * 
 */