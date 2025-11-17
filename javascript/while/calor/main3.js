document.addEventListener('DOMContentLoaded', function() {
    const temperaturaInput = document.getElementById("temperatura");
    const ingresarTemperaturaBtn = document.getElementById("ingresarTemperaturaBtn");
    const listaTemperaturas = document.getElementById("listaTemperaturas");
    const focosCalor = document.getElementById("focosCalor");
    const visualizacionTemperaturas = document.getElementById("visualizacionTemperaturas");

    let temperaturas = [];
    let contadorFocosCalor = 0;

    ingresarTemperaturaBtn.addEventListener("click", function() {
        deshabilitarInput();
        procesarTemperaturas();
    });

    function deshabilitarInput() {
        temperaturaInput.disabled = true;
        ingresarTemperaturaBtn.disabled = true;
    }

    async function procesarTemperaturas() {
        let temperatura;
        while (true) {
            temperatura = parseInt(prompt("Ingresa la temperatura (°C). Ingresa 0 para finalizar:"));

            if (isNaN(temperatura)) {
                alert("Por favor, ingresa una temperatura válida.");
                continue;
            }

            if (temperatura === 0) {
                break; // Finalizar la entrada de temperaturas
            }

            temperaturas.push(temperatura);
            if (temperatura > 45) {
                contadorFocosCalor++;
            }
        }

        mostrarResultados();
    }

    function mostrarResultados() {
        listaTemperaturas.innerText = "Temperaturas ingresadas: " + temperaturas.join("°C, ") + "°C";
        focosCalor.innerText = "Focos de calor (temperaturas > 45°C): " + contadorFocosCalor;

        temperaturas.forEach(temperatura => {
            mostrarTemperaturaConColor(temperatura);
        });
    }

    function mostrarTemperaturaConColor(temperatura) {
        const tempDiv = document.createElement("div");
        tempDiv.innerText = temperatura + "°C";
        tempDiv.classList.add("temperatura-item");

        if (temperatura <= 25) {
            tempDiv.classList.add("frio");
        } else if (temperatura <= 45) {
            tempDiv.classList.add("normal");
        } else {
            tempDiv.classList.add("caliente");
        }

        visualizacionTemperaturas.appendChild(tempDiv);
    }
});