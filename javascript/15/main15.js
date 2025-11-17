document.addEventListener('DOMContentLoaded', () => {
    const luxInput = document.getElementById('luxInput');
    const addBtn = document.getElementById('addBtn');
    const recordsDiv = document.getElementById('records');
    const resultsDiv = document.getElementById('results');
    const totalCount = document.getElementById('totalCount');
    const avgLuxSpan = document.getElementById('avgLux');
    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const guessResult = document.getElementById('guessResult');
    const resetBtn = document.getElementById('resetBtn');

    let luxValues = [];

    addBtn.addEventListener('click', () => {
        let val;
        do {
            val = luxInput.value.trim().toLowerCase();
            if(val === '') break;

            if(val === 'no') {
                if(luxValues.length>0) showResults();
                luxInput.value='';
                return;
            }

            const num = parseFloat(val);
            if(isNaN(num) || num<0) break;

            luxValues.push(num);

            const div = document.createElement('div');
            div.classList.add('record');
            if(num<5) div.classList.add('night');
            else if(num<=50) div.classList.add('evening');
            else div.classList.add('day');

            div.textContent = `Lux: ${num} → ${num<5?'Noche profunda': num<=50?'Atardecer/Interior':'Día brillante'}`;
            recordsDiv.appendChild(div);

            luxInput.value='';
        } while(false);
    });

    function showResults() {
        resultsDiv.classList.remove('hidden');
        const sum = luxValues.reduce((a,b)=>a+b,0);
        const avg = sum/luxValues.length;
        totalCount.textContent = luxValues.length;
        avgLuxSpan.textContent = avg.toFixed(2);
    }

    guessBtn.addEventListener('click', () => {
        const guess = parseFloat(guessInput.value);
        if(isNaN(guess)) return;
        const avg = luxValues.reduce((a,b)=>a+b,0)/luxValues.length;
        const diff = Math.abs(avg - guess);
        if(diff<3) guessResult.textContent="¡Excelente! Muy cercano al promedio.";
        else if(diff<7) guessResult.textContent="Bien, un poco lejos del promedio.";
        else guessResult.textContent="Lejos del promedio. Intenta de nuevo.";
    });

    resetBtn.addEventListener('click', () => {
        luxValues=[];
        recordsDiv.innerHTML='';
        resultsDiv.classList.add('hidden');
        luxInput.value='';
        guessInput.value='';
        guessResult.textContent='';
        luxInput.focus();
    });

    luxInput.addEventListener('keypress', e => { if(e.key==='Enter') addBtn.click(); });
});
