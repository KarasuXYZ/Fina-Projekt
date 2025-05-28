
const difficultyContainer = document.getElementById('difficultyContainer');
const quizContainer = document.getElementById('quizContainer');
const levelIndicator = document.getElementById('levelIndicator');
const exerciseGrid = document.getElementById('exerciseGrid');
const scoreDisplay = document.getElementById('scoreDisplay');
const submitBtn = document.querySelector('.submit-btn');
const retryBtn = document.querySelector('.retry-btn');
const backBtn = document.querySelector('.back-btn');

let currentDifficulty = null;
let enterHandler = null;
let exercises = [];

// generowanie zadań i ładowanie ich na strone
function generateQuiz(difficulty) {
  exercises = [];
  exerciseGrid.innerHTML = '';
  let ops, max;

  if (difficulty === 'easy') {
    ops = ['+', '-'];
    max = 10;
  } else if (difficulty === 'medium') {
    ops = ['+', '-', '*', '/'];
    max = 10;
  } else if (difficulty === 'hard') {
    ops = ['+', '-', '*', '/'];
    max = 100;
  }

  for (let i = 0; i < 8; i++) {
    let a = Math.floor(Math.random() * (max + 1));
    let b = Math.floor(Math.random() * (max + 1));
    let op = ops[Math.floor(Math.random() * ops.length)];

    // sprawdzamy czy dzielenie jest całkowite
    if (op === '/') {
      b = Math.max(1, b);
      a = b * Math.floor(a / b);
    }

    const expr = `${a} ${op} ${b}`;
    const answer = eval(expr);
    exercises.push({ expr, answer });

    const div = document.createElement('div');
    div.className = 'exercise-item';
    div.innerHTML = `
      <label>${expr} = </label>
      <input type="number" class="answer-input" />
    `;
    exerciseGrid.appendChild(div);
  }
}

// pokazuje wynik, oznacza poprawne/niepoprawne i wyłącza Enter
function checkAnswers() {
  let correctCount = 0;
  const inputs = exerciseGrid.querySelectorAll('.answer-input');

  inputs.forEach((input, idx) => {
    const user = parseFloat(input.value);
    const exp = exercises[idx];
    input.classList.remove('correct', 'wrong');

    if (!isNaN(user) && Math.abs(user - exp.answer) < 1e-6) {
      input.classList.add('correct');
      correctCount++;
    } else {
      input.classList.add('wrong');
    }
  });

  scoreDisplay.textContent = `Twój wynik: ${correctCount} / ${exercises.length}`;
  document.removeEventListener('keydown', enterHandler);
}

// reset quizzu
function generateNewQuiz() {
  scoreDisplay.textContent = '';
  generateQuiz(currentDifficulty);
}

// powrót
function backToMenu() {
  quizContainer.classList.add('fade-out');
  setTimeout(() => {
    quizContainer.classList.remove('fade-in', 'visible', 'fade-out');
    difficultyContainer.classList.remove('fade-out');
    difficultyContainer.classList.add('fade-in');
  }, 500);
}

// enter przesyła odpowiedzi
function enableEnter() {
  enterHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkAnswers();
    }
  };
  document.addEventListener('keydown', enterHandler);
}
function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  levelIndicator.textContent = `Poziom: ${difficulty.toUpperCase()}`;

  difficultyContainer.classList.add('fade-out');
  setTimeout(() => {
    difficultyContainer.classList.remove('fade-in', 'fade-out');
    quizContainer.classList.add('visible', 'fade-in');
    generateQuiz(difficulty);
    scoreDisplay.textContent = '';
    enableEnter();
  }, 500);
}
window.addEventListener('DOMContentLoaded', () => {
  quizContainer.classList.remove('visible', 'fade-in');
  difficultyContainer.classList.add('fade-in');
});
submitBtn.addEventListener('click', checkAnswers);
retryBtn.addEventListener('click', generateNewQuiz);
backBtn.addEventListener('click', backToMenu);
