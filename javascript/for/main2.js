document.addEventListener('DOMContentLoaded', function() {

    const numMedicionesInput = document.getElementById("numMediciones");
    const iniciarRegistroBtn = document.getElementById("iniciarRegistroBtn");
    const registroInputsDiv = document.getElementById("registroInputs");
    const medicionesContainer = document.getElementById("medicionesContainer");
    const calcularPromedioBtn = document.getElementById("calcularPromedioBtn");
    const lista = document.getElementById("listaDB");
    const prom = document.getElementById("promedioDB");

    let mediciones = [];

    iniciarRegistroBtn.addEventListener("click", function() {
        const numMediciones = parseInt(numMedicionesInput.value);

        if (isNaN(numMediciones) || numMediciones < 1) {
            prom.textContent = "Error: Ingresa un número válido de mediciones (mayor o igual a 1).";
            prom.className = "error";
            return;
        }

        // Limpiar inputs previos
        medicionesContainer.innerHTML = "";

        // Crear inputs dinámicos
        for (let i = 0; i < numMediciones; i++) {
            const input = document.createElement("input");
            input.type = "number";
            input.min = "0";
            input.placeholder = `Medición ${i + 1}:`; // ✔️ CORRECTO
            input.classList.add("medicionInput");
            medicionesContainer.appendChild(input);
        }

        registroInputsDiv.style.display = "block";
        prom.textContent = "Aún no hay datos suficientes.";
        prom.className = "";
    });

    calcularPromedioBtn.addEventListener("click", function() {
        mediciones = [];
        const medicionInputs = document.querySelectorAll(".medicionInput");

        let sum = 0;

        for (let i = 0; i < medicionInputs.length; i++) {
            const input = medicionInputs[i];
            const valor = parseFloat(input.value);

            console.log(`Valor del input ${i + 1}:`, valor); // ✔️ CORRECTO

            if (!isNaN(valor)) {
                mediciones.push(valor);
                sum += valor;
            }
        }

        if (mediciones.length === 0) {
            prom.textContent = "Error: Ingresa al menos una medición válida.";
            prom.className = "error";
            return;
        }

        const promedio = (sum / mediciones.length).toFixed(2);

        lista.textContent = mediciones
            .map((v, i) => `Medición ${i + 1}: ${v} dB`)
            .join(", ");

        prom.textContent = `Promedio de ruido: ${promedio} dB`;
        prom.className = "success"; // Aplica color verde
    });
});
