document.getElementById("btnSpO2").addEventListener("click", () => {

    let continuar;
    let valores = [];
    
    // DO WHILE para registrar mediciones
    do {
        let spo2 = prompt("Ingresa la saturación SpO₂ (%):");

        if (spo2 !== null && spo2 !== "" && !isNaN(spo2)) {
            valores.push(parseInt(spo2));
        }

        continuar = prompt("¿Registrar otra medición? (si/no)").toLowerCase();

    } while (continuar === "si");

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    let barra = document.getElementById("barra");

    if (valores.length === 0) {
        resultado.textContent = "No ingresaste ninguna medición.";
        barra.style.width = "0%";
        barra.className = "barra";
        return;
    }

    // Promedio de mediciones
    let suma = valores.reduce((a, b) => a + b, 0);
    let promedio = Math.round(suma / valores.length);

    resultado.textContent = `Promedio de SpO₂: ${promedio}%`;

    // Ajustar barra visual
    barra.style.width = promedio + "%";

    if (promedio >= 95) {
        barra.className = "barra normal";
    } else if (promedio >= 90) {
        barra.className = "barra riesgo";
    } else {
        barra.className = "barra bajo";
    }
});
