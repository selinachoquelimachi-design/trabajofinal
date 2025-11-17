// --- CLASIFICACIÓN ---
document.getElementById("btnClasificar").addEventListener("click", () => {
    const mag = parseFloat(document.getElementById("magnitudInput").value);
    let resultado = document.getElementById("resultado");
    let texto = "";

    if (isNaN(mag)) {
        resultado.textContent = "Por favor ingresa un número válido.";
        return;
    }

    if (mag < -1) {
        texto = "🌟 Extremadamente brillante";
    } else if (mag < 1) {
        texto = "⭐ Muy brillante";
    } else if (mag < 3) {
        texto = "✨ Brillante";
    } else if (mag < 6) {
        texto = "🔭 Débil";
    } else {
        texto = "❌ No visible a simple vista";
    }

    resultado.textContent = texto;
});

// --- MINI JUEGO ---
const rangos = [
    { tipo: "ext", min: -10, max: -1.2 },
    { tipo: "muy", min: -1.1, max: 0.9 },
    { tipo: "bri", min: 1, max: 2.9 },
    { tipo: "deb", min: 3, max: 5.9 },
    { tipo: "noc", min: 6, max: 10 }
];

let valorActualTipo = "";
let valorActual = 0;

function nuevoValor() {
    const r = rangos[Math.floor(Math.random() * rangos.length)];
    valorActualTipo = r.tipo;

    valorActual = (Math.random() * (r.max - r.min) + r.min).toFixed(1);

    document.getElementById("valorJuego").textContent = valorActual;
    document.getElementById("mensajeJuego").textContent = "";
}

nuevoValor();

document.querySelectorAll(".op").forEach(btn => {
    btn.addEventListener("click", () => {
        const respuesta = btn.dataset.resp;
        const msg = document.getElementById("mensajeJuego");

        if (respuesta === valorActualTipo) {
            msg.textContent = "¡Correcto! 🎉";
            msg.style.color = "#00ff88";
        } else {
            msg.textContent = "Incorrecto ❌ Intentar de nuevo";
            msg.style.color = "#ff4444";
        }
    });
});

document.getElementById("btnNuevo").addEventListener("click", nuevoValor);
