document.addEventListener('DOMContentLoaded', () => {
    const numPlanetasInput = document.getElementById('numPlanetas');
    const startBtn = document.getElementById('startBtn');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const inputsContainer = document.getElementById('inputsContainer');
    const calcBtn = document.getElementById('calcBtn');
    const resultsDiv = document.getElementById('results');
    const restartBtn = document.getElementById('restartBtn');

    startBtn.addEventListener('click', () => {
        const num = parseInt(numPlanetasInput.value);
        if (isNaN(num) || num < 1) return alert('Ingresa un número válido de planetas.');

        step1.classList.add('hidden');
        step2.classList.remove('hidden');

        inputsContainer.innerHTML = '';
        for (let i = 1; i <= num; i++) {
            const div = document.createElement('div');
            div.innerHTML = `
                <label>Distancia del planeta ${i} (millones de km):</label><br>
                <input type="number" min="0" class="distInput" placeholder="Ej: 150">
            `;
            inputsContainer.appendChild(div);
        }
    });

    calcBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.distInput');
        let suma = 0;
        let valid = true;

        inputs.forEach((input, idx) => {
            const val = parseFloat(input.value);
            if (isNaN(val) || val < 0) {
                input.style.borderColor = 'red';
                valid = false;
            } else {
                input.style.borderColor = '';
                suma += val;
            }
        });

        if (!valid) return alert('Corrige los valores resaltados.');

        const promedio = suma / inputs.length;
        resultsDiv.innerHTML = `El promedio de distancia de los planetas es: ${promedio.toFixed(2)} millones de km.`;

        step2.classList.add('hidden');
        step3.classList.remove('hidden');
    });

    restartBtn.addEventListener('click', () => {
        step3.classList.add('hidden');
        step1.classList.remove('hidden');
        numPlanetasInput.value = '';
    });
});
