var btnVerificar = document.querySelector('#btnVereficar');
var resultado = document.querySelector('.resultado');

window.addEventListener('input', function () {
    var num1 = document.querySelector('#n1').textContent;
    var num2 = document.querySelector('#n2');
    if (num1 == num2.value) {
        resultado.classList.add('rTrue');
        resultado.innerHTML = 'CERTO';
        resultado.classList.remove('rFalse');
        reset()
    } else {
        resultado.innerHTML = 'ERRADO';
        resultado.classList.add('rFalse');

    }

})

function reset() {
    document.getElementById('n2').value = "";
    var num1 = Math.floor(Math.random() * 100);
    document.getElementById('n1').innerHTML = num1;
}