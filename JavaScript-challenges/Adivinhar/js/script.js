function verificar(){
    // var cont = document.querySelector('#contador').textContent;
    var num1 = document.getElementById('n1').innerHTML;
    var num2 = document.getElementById('n2').value;
    if(num1 == num2){
        alert('ACERTOU');
        // contar()
    }
    else{
        alert('ERROU');
    }
    reset();
}

function reset(){
    document.getElementById('n2').value = "";
    var r = Math.floor(Math.random() * 100);
    document.getElementById('n1').innerHTML = r;
}

// function contar(){
//     document.getElementById('contador').value = +1;
// };

