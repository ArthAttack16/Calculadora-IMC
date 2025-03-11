const calcular = document.getElementById("calcular");

function imc () {
    const nome = document.getElementById("nome").value;
    const altura = +document.getElementById("altura").value;
    const peso = +document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if (nome !== " " && altura !== " " && peso !== " ") {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = "você está abaixo do peso.";
        }else if (valorIMC < 25) {
            classificacao = "você está com peso ideal. Parabéns!";
        }else if (valorIMC < 30){
            classificacao = "você está levemente acima do peso.";
        }else if (valorIMC < 35){
            classificacao = "você está coom obesidade grau I.";
        }else if (valorIMC < 40){
            classificacao = "você está com obesidade grau II.";
        }else {
            classificacao = "você está com obesidade grau III.  Tenha cuidado!";
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e  ${classificacao}`;
        
    }else {
        resultado.textContent = "Preencha todos os campos!";
    }

}

calcular.addEventListener("click", imc);