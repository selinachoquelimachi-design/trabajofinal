document.addEventListener('DOMContentLoaded', () => {
    const diameterInput = document.getElementById('diameterInput');
    const addBtn = document.getElementById('addBtn');
    const resultsDiv = document.getElementById('results');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const stepGame = document.getElementById('stepGame');
    const barLarge = document.getElementById('barLarge');
    const restartBtn = document.getElementById('restartBtn');
    const gameButtons = document.querySelectorAll('.gameBtn');
    const gameResult = document.getElementById('gameResult');

    let craters = [];
    let largeCount = 0;

    addBtn.addEventListener('click', () => {
        const val = parseFloat(diameterInput.value);
        if (isNaN(val) || val < 0) return;

        if (val === 0) {
            // Terminar registro
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            displayResults();
            stepGame.classList.remove('hidden');
            return;
        }

        craters.push(val);
        if (val > 50) largeCount++;
        diameterInput.value = '';
        diameterInput.focus();
    });

    function displayResults() {
        resultsDiv.innerHTML = `Se registraron ${craters.length} cráteres.<br>
                                Cráteres grandes (>50 km): ${largeCount}`;
        // Mostrar diagrama
        const percent = (largeCount / craters.length) * 100;
        barLarge.style.width = percent + '%';
    }

    restartBtn.addEventListener('click', () => {
        craters = [];
        largeCount = 0;
        barLarge.style.width = '0%';
        resultsDiv.innerHTML = '';
        diameterInput.value = '';
        step1.classList.remove('hidden');
        step2.classList.add('hidden');
        stepGame.classList.add('hidden');
    });

    // Mini-juego lunar
    gameButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = parseInt(btn.dataset.answer);
            if (answer === 545) {
                gameResult.textContent = "¡Correcto! South Pole–Aitken es el cráter más grande.";
                gameResult.style.color = "#00ff00";
            } else {
                gameResult.textContent = "Incorrecto. Intenta otra vez.";
                gameResult.style.color = "#ff3333";
            }
        });
    });
});
