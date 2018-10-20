$(document).ready(function () {
    var bairro = document.querySelector('.bairro');
    var localidade = document.querySelector('.localidade');
    var logradouro = document.querySelector('.logradouro');
    var uf = document.querySelector('.uf');
    var nome = document.querySelector('.nome');
    var numero = document.querySelector('.numero');
    var VisorCep = document.querySelector('#VisorCep')

    window.addEventListener("input", function () {
        var cep = VisorCep.value;

        $.ajax({
            url: 'https://viacep.com.br/ws/' + cep + '/json/',
            type: 'GET',
            dataType: 'JSON',
            success: function (endereco) {


                bairro.value = endereco.bairro;
                localidade.value = endereco.localidade;
                logradouro.value = endereco.logradouro;
                uf.value = endereco.uf;

                localStorage.setItem("cep", endereco.cep)
                localStorage.setItem("bairro", endereco.bairro)
                localStorage.setItem("localidade", endereco.localidade)
                localStorage.setItem("logradouro", endereco.logradouro)
                localStorage.setItem("uf", endereco.uf)
                localStorage.setItem("numero", numero.value)
                localStorage.setItem("nome", nome.value)

            },

            erro: function () {
                console.log('erro')
            }

        });

    });
});

document.querySelector('.CEP').textContent = localStorage.cep
document.querySelector('.NOME').textContent = localStorage.nome
document.querySelector('.BAIRRO').textContent = localStorage.bairro
document.querySelector('.LOCALIDADE').textContent = localStorage.localidade
document.querySelector('.LOGRADOURO').textContent = localStorage.logradouro
document.querySelector('.UF').textContent = localStorage.uf
document.querySelector('.NUMERO').textContent = localStorage.numero