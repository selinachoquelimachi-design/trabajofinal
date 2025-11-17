let totalPacientes = 0;
let actual = 0;
let temperaturas = [];

function empezar() {
    const num = parseInt(document.getElementById("numPatients").value);

    if (!num || num < 1) {
        alert("⚠️ Ingresa un número válido de pacientes.");
        return;
    }

    totalPacientes = num;
    actual = 1;
    temperaturas = [];

    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");

    document.getElementById("contador").textContent =
        `Paciente ${actual} de ${totalPacientes}`;
}

function guardarTemp() {
    const temp = parseFloat(document.getElementById("temp").value);

    if (isNaN(temp) || temp < 30 || temp > 45) {
        alert("⚠️ Ingresa una temperatura válida (30°C - 45°C).");
        return;
    }

    temperaturas.push(temp);
    document.getElementById("temp").value = "";

    if (actual < totalPacientes) {
        actual++;
        document.getElementById("contador").textContent =
            `Paciente ${actual} de ${totalPacientes}`;
    } else {
        mostrarResultados();
    }
}

function mostrarResultados() {
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.remove("hidden");

    let suma = 0;
    let max = temperaturas[0];
    let min = temperaturas[0];

    for (let i = 0; i < temperaturas.length; i++) {
        suma += temperaturas[i];
        if (temperaturas[i] > max) max = temperaturas[i];
        if (temperaturas[i] < min) min = temperaturas[i];
    }

    const promedio = suma / temperaturas.length;

    document.getElementById("promedio").textContent = promedio.toFixed(1) + "°C";
    document.getElementById("max").textContent = max.toFixed(1) + "°C";
    document.getElementById("min").textContent = min.toFixed(1) + "°C";

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    temperaturas.forEach((t, i) => {
        lista.innerHTML += `<div class="list-item">Paciente ${i + 1}: ${t.toFixed(1)}°C</div>`;
    });
}

function reiniciar() {
    document.getElementById("step3").classList.add("hidden");
    document.getElementById("step1").classList.remove("hidden");

    document.getElementById("numPatients").value = "";
}
