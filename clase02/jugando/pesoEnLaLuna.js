const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');

const tamanos = {
    max: 20,
    min: 10,
}

peso.addEventListener('input', calbackInput);
// peso.addEventListener('input', calcularPeso);
// peso.addEventListener('input', comprobar);

function calbackInput() {
    calcularPeso()
    comprobar()
}

function calcularPeso() {
    const res = peso.value;
    const resLuna = Number(res) / 6;
    resultado.textContent = resLuna;
}

function comprobar() {
    const tamanoPeso = peso.value.length;
    if(tamanoPeso < tamanos.min || tamanoPeso > tamanos.max) {
        // tamaño > 10 && tamaño < 20
        peso.classList.add('error')
    } else {
        peso.classList.remove('error')
    }
}
