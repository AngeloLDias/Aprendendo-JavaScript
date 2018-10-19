$(document).ready(function () {
    var bairro = document.querySelector('.bairro');
    var localidade = document.querySelector('.localidade');
    var logradouro = document.querySelector('.logradouro');
    var uf = document.querySelector('.uf');
    var VisorCep = document.querySelector('#VisorCep')

    window.addEventListener("input", function () {
        var cep = VisorCep.value
        $.ajax({
            url: 'https://viacep.com.br/ws/' + cep + '/json/',
            type: 'GET',
            dataType: 'JSON',
            success: function (endereco) {
                bairro.value = endereco.bairro;
                localidade.value = endereco.localidade;
                logradouro.value = endereco.logradouro;
                uf.value = endereco.uf;
            },

            erro: function () {
                console.log('erro')
            }

        });

    });
});