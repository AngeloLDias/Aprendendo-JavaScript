var btnVerificar = document.querySelector('#btnVereficar');
var resultado = document.querySelector('.resultado');

window.addEventListener('input', function () {
    var num1 = document.querySelector('#n1').textContent;
    var num2 = document.querySelector('#n2');
    if (num1 == num2.value) {
        resultado.classList.add('rTrue');
        resultado.innerHTML = 'CERTO';
        resultado.classList.remove('rFalse');
        reset();
        somarContador();
    } else {
        resultado.innerHTML = 'ERRADO';
        resultado.classList.add('rFalse');

    }
    0
})

function reset() {
    setTimeout(function () {
        document.getElementById('n2').value = "";
        var num1 = Math.floor(Math.random() * 100);
        document.getElementById('n1').innerHTML = num1;
    }
        , 800)
}

function somarContador() {
    setTimeout(function () {
        var correto = document.querySelector(".corretos");
        var valorInteiro = parseInt(correto.textContent);
        var soma = parseInt(valorInteiro) + parseInt(1);
        correto.textContent = soma;
    }, 450);
    var correto = document.querySelector(".corretos");
    correto.classList.add("animationContador");
    setTimeout(function () {
        correto.classList.remove("animationContador")
    }, 440)
}

function timing() {
    var timeContent = document.querySelector(".numberTime");
    var valorTime = parseInt(timeContent.textContent);
    var timeOut = 0;
        for (var i = 10; i > 0; i--) {
            timeOut++;
            setTimeout(function(){   
                valorTime--;
                timeContent.textContent = valorTime;
            }, timeOut*1000);
        }
}
