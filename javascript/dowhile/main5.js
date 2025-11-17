let historialRegistros = [];
let monitoreoActivo = true;
const NIVEL_ALERTA = 3.0; 

function registrarNivel() {
    if (!monitoreoActivo) {
        return;
    }

    const input = document.getElementById("nivel-rio");
    const divRegistros = document.getElementById('registros');
    const pAlerta = document.getElementById('alerta');

    const nivelStr = input.value.trim();
    let nivelProcesado;
    let mensaje = "";

    input.value = '';
    input.focus();

    do {
        nivelProcesado = parseFloat(nivelStr);

        // ---- ERROR 1 corregido ----
        if (nivelStr === "" || isNaN(nivelProcesado) || nivelProcesado < 0) {
            mensaje = "❌ Error: Ingrese un número de nivel válido y positivo.";
            break;
        }

        historialRegistros.push(nivelProcesado);

        if (nivelProcesado > NIVEL_ALERTA) {
            monitoreoActivo = false;

            // ---- ERROR 2 corregido ----
            mensaje = `🚨 ¡ALERTA! El nivel de ${nivelProcesado.toFixed(2)} m supera los ${NIVEL_ALERTA} m. Monitoreo detenido.`;
        } else {
            mensaje = "Nivel normal. Continúe registrando...";
        }

    } while (false);

    if (historialRegistros.length > 0) {
        divRegistros.innerText = historialRegistros
            // ---- ERROR 3 corregido ----
            .map((lvl, i) => `[#${i + 1}] Nivel: ${lvl.toFixed(2)} m`)
            .join('\n');
    } else {
        divRegistros.innerText = "No se registraron mediciones.";
    }

    pAlerta.innerText = mensaje;
    pAlerta.className = "estado-alerta " + 
        (monitoreActivo && historialRegistros.length > 0 
            ? "normal" 
            : (monitoreActivo ? "normal" : "alerta")
        );

    if (!monitoreActivo && nivelProcesado > NIVEL_ALERTA) {
        document.getElementById("btn-registrar").disabled = true;
        document.getElementById("btn-finalizar").disabled = true;
        pAlerta.className = "estado-alerta alerta";
    }
}

function finalizarMonitoreo() {
    monitoreoActivo = false;
    document.getElementById("btn-registrar").disabled = true;
    document.getElementById("btn-finalizar").disabled = true;

    document.getElementById('alerta').innerText = "Monitoreo Finalizado por el usuario. 🛑";
    document.getElementById('alerta').className = "estado-alerta";
}
