
document.getElementById('calcBtn').addEventListener('click', () => {
  const sist = parseInt(document.getElementById('sistolica').value);
  const dias = parseInt(document.getElementById('diastolica').value);
  const result = document.getElementById('resultCalc');
  const pointer = document.getElementById('pointer');
  if (isNaN(sist) || isNaN(dias) || sist <= 0 || dias <= 0) {
    result.textContent = '⚠️ Ingresa valores válidos';
    pointer.style.left = '50%';
    return;
  }

  let categoria, pos;
  if (sist < 120 && dias < 80) {
    categoria = 'Normal'; pos = '16.6%';
  } else if (sist < 130 && dias < 80) {
    categoria = 'Regular'; pos = '50%';
  } else {
    categoria = 'Mal'; pos = '83.3%';
  }

  result.textContent = categoria;
  pointer.style.left = pos;
});

// Test de Riesgo
document.getElementById('quizBtn').addEventListener('click', () => {
  let riesgo = 0;
  for (let i = 1; i <= 3; i++) {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (val) riesgo += parseInt(val.value);
  }

  const nivel = riesgo === 0 ? 'Bajo' : riesgo === 1 ? 'Moderado' : 'Alto';
  document.getElementById('resultQuiz').textContent = `Riesgo: ${nivel}`;
});

// Arrastra y Suelta
let correctas = 0, total = 0;
['good', 'bad'].forEach(id => {
  const zona = document.getElementById(id);
  zona.addEventListener('dragover', e => e.preventDefault());
  zona.addEventListener('drop', e => {
    e.preventDefault();
    const item = document.querySelector('.dragging');
    if (!item) return;
    const tipo = item.dataset.type;

    if ((id === 'good' && tipo === 'good') || (id === 'bad' && tipo === 'bad')) correctas++;
    total++;

    zona.appendChild(item);

    if (total === 4) {
      document.getElementById('gameResult').textContent = `Aciertos: ${correctas}/4`;
    }
  });
});

// Drag & Drop
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', () => item.classList.add('dragging'));
  item.addEventListener('dragend', () => item.classList.remove('dragging'));
});
