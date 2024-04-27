var btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
        calcular();
});

    function calcular() {
        var valor1 = parseFloat(document.getElementById('valor1').value);
        var valor2 = parseFloat(document.getElementById('valor2').value);
        var operacao = document.getElementById('op').value;
        var resultado = document.getElementById('resultado');

        if (operacao === 'somar') {
            resultado.value = valor1 + valor2;
        } else if (operacao === 'subtrair') {
            resultado.value = valor1 - valor2;
        } else if (operacao === 'divisao') {
            if (valor2 !== 0) {
                resultado.value = valor1 / valor2;
            } else {
                alert("Não é possível dividir por zero!");
            }
        } else if (operacao === 'multiplicacao') {
            resultado.value = valor1 * valor2;
        }
        else if (operacao === 'elevar') {
            resultado.value = Math.pow(valor1,valor2);
        }

    }