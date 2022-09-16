function calcular() {
    var quantia = window.document.getElementById("quantia");
    var res = window.document.getElementById("res");
    var escolha = window.document.getElementById("escolha").value;
    var escolha2 = window.document.getElementById("escolha2").value;
    var conversao = 0;
  
    if (escolha == "celsius" && escolha2 == "faren2") {
      conversao = (Number(quantia.value) * 1.8 + 32).toFixed(2);
      res.innerHTML = `${quantia.value} °C é igual a ${celsiusfaren} °F.`;
    } else if (escolha == "celsius" && escolha2 == "kelvin2") {
      conversao = (Number(quantia.value) + 273.15).toFixed(2);
      res.innerHTML = `${quantia.value} °C é igual a ${celsiusfaren} K.`;
    } else if (escolha == "faren" && escolha2 == "celsius2") {
      conversao = ((Number(quantia.value) - 32) * (5 / 9)).toFixed(2);
      res.innerHTML = `${quantia.value} °F é igual a ${celsiusfaren} °C.`;
    } else if (escolha == "faren" && escolha2 == "kelvin2") {
      conversao = ((Number(quantia.value) - 32) * (5 / 9) + 273.15).toFixed(2);
      res.innerHTML = `${quantia.value} °F é igual a ${celsiusfaren} K.`;
    } else if (escolha == "kelvin" && escolha2 == "celsius2") {
      conversao = (Number(quantia.value) - 273.15).toFixed(2);
      res.innerHTML = `${quantia.value} K é igual a ${celsiusfaren} °C.`;
    } else if (escolha == "kelvin" && escolha2 == "faren2") {
      conversao = ((Number(quantia.value) - 273.15) * (9 / 5) + 32).toFixed(2);
      res.innerHTML = `${quantia.value} K é igual a ${celsiusfaren} °F.`;
    } else {
      res.innerHTML = "Escolha Unidades de Temperaturas diferentes";
    }
  }
  