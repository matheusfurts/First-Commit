var nome = window.document.getElementById("nome");
var estatus = window.document.getElementById("estatusaluno");
var nota1 = window.document.getElementById("nota1");
var nota2 = window.document.getElementById("nota2");
var nota3 = window.document.getElementById("nota3");
var nota4 = window.document.getElementById("nota4");

function verificar() {
  var notafinal = (
    (Number(nota1.value) +
      Number(nota2.value) +
      Number(nota3.value) +
      Number(nota4.value)) /4).toFixed(1);

  if (notafinal < 7) {
    estatus.innerHTML = `${nome.value}, você foi reprovado pois sua media final foi ${notafinal} !`;
  } else {
    estatus.innerHTML = `${nome.value}, Você foi aprovada pois sua media final foi ${notafinal} !`;
  }
}
