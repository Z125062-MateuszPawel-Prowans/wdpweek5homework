let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const timerDisplay = document.getElementById("question-timer");
const timerProgress = document.getElementById("timer-progress");
const questionsProgress = document.getElementById("progress-bar");

const timerTime = 12;
let timerInterval = null;
let timeLeft = 0;

fetch("/wdpweek5homework/part2/questions.json")
  .then(res => res.json())
  .then(data => {
    questions = data;
    shuffle(questions);
    showQuestion();
  });

function showQuestion() {
  clearOptions();
  document.getElementById("question-count").textContent =
  `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  const q = questions[currentQuestionIndex];
  questionText.textContent = q.question;

  questionsProgress.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

  q.options.forEach((option, index) => {
    let btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(btn);
});
  startTimer();
}

function startTimer() {
  if(timerInterval) {
    clearInterval(timerInterval);
  }
  timeLeft = timerTime;
  let timerLoop = () => {
    timeLeft--;
    timerDisplay.innerHTML = `Time left: ${timeLeft}s`;
    timerProgress.style.width = `${(timeLeft / timerTime) * 100}%`;

    if(timeLeft <= 10) {
      timerDisplay.style.color = "red";
      timerProgress.style.backgroundColor = "red";
      timerDisplay.style.animation = "shaking 0.3s infinite";
    } else {
      timerDisplay.style.removeProperty("color");
      timerProgress.style.removeProperty("background-color");
      timerDisplay.style.removeProperty("animation");
    }

    if(timeLeft <= 0) {
      timerDisplay.innerHTML = "Time's up!";
      timerProgress.style.width = "0%";

      timerDisplay.style.removeProperty("animation");
    }

    if (timeLeft <= 0) {
      stopTimer();
      checkAnswer(-1);
    }
  };
  timerLoop();
  timerInterval = setInterval(timerLoop, 1000);

}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}

function checkAnswer(selectedIndex) {
  const correct = questions[currentQuestionIndex].answer;
  if (selectedIndex === correct) {
    score++;
  }
  stopTimer();
  nextBtn.disabled = false;
  Array.from(optionsContainer.children).forEach((btn, i) => {
    btn.disabled = true;
    
    if (i === correct) btn.classList.add("correct");
    else if (i === selectedIndex && i !== correct || selectedIndex==-1) btn.classList.add("incorrect");
  });
}

function clearOptions() {
  optionsContainer.innerHTML = "";
  nextBtn.disabled = true;

}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});


function showResult() {
  document.querySelector(".quiz-box").innerHTML = `<h2>Your score: ${score} / ${questions.length}</h2>`;
}

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}