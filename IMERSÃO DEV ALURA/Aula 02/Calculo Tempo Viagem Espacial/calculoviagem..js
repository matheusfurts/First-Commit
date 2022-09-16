function calcular() {
    var localA = window.document.getElementById("localA").value;
    var localB = window.document.getElementById("localB").value;
    var dist = window.document.getElementById("dist");
    var res = window.document.getElementById("res");
    var calcula = (Number(dist.value) / 9.5).toFixed(2);
    res.innerHTML = `O tempo para ir de ${localA} para ${localB} é de ${calcula} anos luz.`;
  }
  