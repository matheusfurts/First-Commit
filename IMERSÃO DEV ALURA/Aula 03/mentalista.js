var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentativas = 5;

function Chutar() {
  var chute = Number(window.document.getElementById("valor").value);
  var res = window.document.getElementById("res");
  var tentativas = window.document.getElementById("tentativas");
    
if (chute == numeroSecreto) {
    res.innerHTML = "Acertou!";
    tentativas.innerHTML = `Você tem mais ${numeroTentativas} tentativas!`;
} else if (chute > 10) {
    res.innerHTML = "Digite um número de 0 a 10";
    tentativas.innerHTML = `Você tem mais ${numeroTentativas} tentativas!`;
    numeroTentativas--;
} else if (chute > numeroSecreto) {
    res.innerHTML = `Errou, o número secreto é menor que ${chute} !`;
    tentativas.innerHTML = `Você tem mais ${numeroTentativas} tentativas!`;
    numeroTentativas--;
} else if (chute < numeroSecreto) {
        res.innerHTML = `Errou, o número secreto é maior que ${chute} !`;
    tentativas.innerHTML = `Você tem mais ${numeroTentativas} tentativas!`;
    numeroTentativas--;
}

}
