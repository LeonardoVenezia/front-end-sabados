const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');

peso.addEventListener('input', calcularPeso);

function calcularPeso() {
    const res = peso.value;
    const resLuna = Number(res) / 6;
    resultado.textContent = resLuna;
}