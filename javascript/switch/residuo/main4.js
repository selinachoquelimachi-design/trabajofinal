function clasificarResiduo() {
    const valor = parseInt(document.getElementById("codigo").value);
    const texto = document.getElementById("tipo");
    let tipo = "";
    
    // Opcional: limpiar clases de color anteriores
    texto.className = 'resultado-texto'; // Asegura que solo tenga la clase base

    switch (valor) {
        case 1: 
            tipo = "Orgánico 🍃"; 
            texto.style.color = "#66bb6a"; // Verde para orgánico
            break;
        case 2: 
            tipo = "Plástico ♻️"; 
            texto.style.color = "#29b6f6"; // Azul para plástico
            break;
        case 3: 
            tipo = "Papel / Cartón 📦"; 
            texto.style.color = "#ffca28"; // Amarillo para papel
            break;
        case 4: 
            tipo = "Vidrio 🍾"; 
            texto.style.color = "#4db6ac"; // Teal para vidrio
            break;
        default: 
            tipo = "Código inválido. Por favor, ingresa un número del 1 al 4.";
            texto.style.color = "#ef5350"; // Rojo para código inválido
    }

    texto.innerText = tipo;
    document.getElementById("codigo").value = "";
    document.getElementById("codigo").focus(); // Enfocar para el siguiente ingreso
}