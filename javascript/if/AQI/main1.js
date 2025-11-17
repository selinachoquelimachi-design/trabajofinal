function clasificarAQI() {
  const valorInput = document.getElementById("valorAqi");
  const valorAQI = Number(valorInput.value);
  const msgError = document.getElementById("msgError");
  const resultado = document.getElementById("resultado");
  const card = document.getElementById("card");

  resultado.classList.remove("visible");
  msgError.textContent = "";

  if (isNaN(valorAQI) || valorAQI < 0) {
    msgError.textContent = "Ingrese un número válido mayor o igual a 0.";
    return;
  }

  let clasificacion = "";
  let consejo = "";
  let colorClase = "";

  if (valorAQI <= 50) {
    clasificacion = "Bueno";
    consejo = "La calidad del aire es satisfactoria. Actividades al aire libre seguras.";
    colorClase = "bueno";
  } 
  else if (valorAQI <= 100) {
    clasificacion = "Moderado";
    consejo = "Personas sensibles deben limitar ejercicio intenso al aire libre.";
    colorClase = "moderado";
  } 
  else if (valorAQI <= 150) {
    clasificacion = "Dañino para grupos sensibles";
    consejo = "Niños, ancianos y personas con problemas respiratorios deben tener cuidado.";
    colorClase = "sensible";
  } 
  else if (valorAQI <= 200) {
    clasificacion = "Dañino";
    consejo = "Evitar actividades al aire libre por periodos prolongados.";
    colorClase = "danino";
  } 
  else if (valorAQI <= 300) {
    clasificacion = "Muy dañino";
    consejo = "Evitar actividades al aire libre; permanecer en interiores si es posible.";
    colorClase = "muy-danino";
  } 
  else {
    clasificacion = "Peligroso";
    consejo = "Emergencia de salud. Seguir instrucciones de las autoridades.";
    colorClase = "peligroso";
  }

  card.className = "card " + colorClase;

  resultado.innerHTML = `
    <h3>${clasificacion}</h3>
    <p>Valor AQI: <strong>${valorAQI}</strong></p>
    <p>${consejo}</p>
  `;

  setTimeout(() => resultado.classList.add("visible"), 50);
  valorInput.value = "";
}

document.getElementById("valorAqi").addEventListener("keydown", e => {
  if (e.key === "Enter") clasificarAQI();
});
