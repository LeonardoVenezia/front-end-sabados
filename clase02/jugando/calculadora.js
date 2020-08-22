const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const sumar = document.querySelector('#sumar');
const resultado = document.querySelector('#resultado');

sumar.addEventListener('click', sumarFn);

function sumarFn() {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const result = value1 + value2;
    resultado.textContent = result;
}