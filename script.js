const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Saturn", "Mars", "Jupiter"],
    answer: "Mars"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion(index) {
  const q = questions[index];
  document.getElementById("question").textContent = q.question;
  
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => selectOption(btn, q.answer);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedBtn, correctAnswer) {
  const allButtons = document.querySelectorAll(".option-btn");
  allButtons.forEach(btn => btn.disabled = true);

  if (selectedBtn.textContent === correctAnswer) {
    selectedBtn.style.backgroundColor = "#4caf50";
    selectedBtn.style.color = "white";
    score++;
  } else {
    selectedBtn.style.backgroundColor = "#f44336";
    selectedBtn.style.color = "white";
    allButtons.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.style.backgroundColor = "#4caf50";
        btn.style.color = "white";
      }
    });
  }

  document.getElementById("nextBtn").style.display = "block";
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
    document.getElementById("nextBtn").style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
}

// Initialize quiz
showQuestion(currentQuestion);
