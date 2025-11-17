let temperaturas = [];
let fiebreCount = 0;

function registrar() {
    let temp = parseFloat(document.getElementById("tempInput").value);

    if (isNaN(temp)) {
        alert("⚠️ Ingresa una temperatura válida.");
        return;
    }

    if (temp === 0) {
        mostrarResultados();
        return;
    }

    if (temp < 30 || temp > 45) {
        alert("⚠️ Temperatura fuera del rango humano (30°C - 45°C)");
        return;
    }

    // Guardar la temperatura
    temperaturas.push(temp);

    // Contar fiebre con WHILE
    fiebreCount = 0;
    let i = 0;

    while (i < temperaturas.length) {
        if (temperaturas[i] >= 38) {
            fiebreCount++;
        }
        i++;
    }

    // Limpiar y volver a enfocar
    document.getElementById("tempInput").value = "";
    document.getElementById("tempInput").focus();
}

function mostrarResultados() {
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");

    document.getElementById("totalTemps").textContent = temperaturas.length;
    document.getElementById("totalFiebre").textContent = fiebreCount;

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    temperaturas.forEach((t, index) => {
        let clase = "normal";

        if (t >= 38 && t < 39) clase = "febricula";
        if (t >= 39) clase = "fiebre";

        lista.innerHTML += `
            <div class="list-item ${clase}">
                Paciente ${index + 1}: ${t.toFixed(1)}°C
            </div>
        `;
    });
}

function reiniciar() {
    temperaturas = [];
    fiebreCount = 0;

    document.getElementById("tempInput").value = "";
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step1").classList.remove("hidden");
    document.getElementById("tempInput").focus();
}
