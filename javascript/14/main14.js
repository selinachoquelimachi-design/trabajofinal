document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('celestialCode');
    const checkBtn = document.getElementById('checkBtn');
    const resultDiv = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');

    // Barras del diagrama
    const bars = {
        estrella: document.getElementById('barEstrella'),
        planeta: document.getElementById('barPlaneta'),
        cometa: document.getElementById('barCometa'),
        asteroide: document.getElementById('barAsteroide'),
        galaxia: document.getElementById('barGalaxia')
    };

    // Contadores
    let counts = { estrella: 0, planeta: 0, cometa: 0, asteroide: 0, galaxia: 0 };

    checkBtn.addEventListener('click', () => {
        const code = parseInt(codeInput.value);
        let type = '';
        switch (code) {
            case 1: type = 'estrella'; break;
            case 2: type = 'planeta'; break;
            case 3: type = 'cometa'; break;
            case 4: type = 'asteroide'; break;
            case 5: type = 'galaxia'; break;
            default:
                resultDiv.textContent = 'Código inválido (1-5)';
                resultDiv.style.background = '#ff3333';
                resultDiv.classList.remove('hidden');
                return;
        }

        counts[type]++;
        resultDiv.textContent = `Código ${code}: ${type.toUpperCase()}`;
        resultDiv.style.background = bars[type].style.background;
        resultDiv.classList.remove('hidden');

        // Actualizar diagrama
        for (let key in bars) {
            bars[key].style.width = `${counts[key]*20}%`; // ancho proporcional
            bars[key].textContent = `${bars[key].textContent.split(':')[0]}: ${counts[key]}`;
        }

        codeInput.value = '';
        codeInput.focus();
    });

    resetBtn.addEventListener('click', () => {
        counts = { estrella: 0, planeta: 0, cometa: 0, asteroide: 0, galaxia: 0 };
        for (let key in bars) {
            bars[key].style.width = '0%';
            bars[key].textContent = bars[key].textContent.split(':')[0] + ': 0';
        }
        resultDiv.classList.add('hidden');
        codeInput.value = '';
        codeInput.focus();
    });

    codeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkBtn.click();
    });
});
