document.getElementById("btnTriage").addEventListener("click", () => {
    let codigo = parseInt(document.getElementById("codigo").value);
    let resultado = document.getElementById("resultado");

    let categoria = "";
    let claseColor = "";

    switch (codigo) {
        case 1:
            categoria = "ROJO – Atención inmediata (Emergencia).";
            claseColor = "rojo";
            break;

        case 2:
            categoria = "AMARILLO – Urgente, atención rápida.";
            claseColor = "amarillo";
            break;

        case 3:
            categoria = "VERDE – Menos urgente.";
            claseColor = "verde";
            break;

        case 4:
            categoria = "AZUL – Atención no urgente.";
            claseColor = "azul";
            break;

        default:
            categoria = "Código inválido. Ingresa un número del 1 al 4.";
            claseColor = "error";
    }

    resultado.textContent = categoria;
    resultado.className = "resultado " + claseColor;
});
