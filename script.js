const config = window.VALENTINE_CONFIG;

// Set title & text
window.addEventListener("DOMContentLoaded", () => {
  document.title = config.pageTitle;

  document.getElementById("valentineTitle").textContent =
    config.valentineName + ", my love 💖";

  document.getElementById("question1Text").textContent = config.questions.first.text;
  document.getElementById("yesBtn1").textContent = config.questions.first.yesBtn;
  document.getElementById("noBtn1").textContent = config.questions.first.noBtn;
  document.getElementById("secretAnswerBtn").textContent = config.questions.first.secretAnswer;

  document.getElementById("question2Text").textContent = config.questions.second.text;
  document.getElementById("startText").textContent = config.questions.second.startText;
  document.getElementById("nextBtn").textContent = config.questions.second.nextBtn;

  document.getElementById("question3Text").textContent = config.questions.third.text;
  document.getElementById("yesBtn3").textContent = config.questions.third.yesBtn;
  document.getElementById("noBtn3").textContent = config.questions.third.noBtn;

  createFloatingEmojis();
});

// QUESTIONS
function showNextQuestion(n) {
  document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
  document.getElementById("question" + n).classList.remove("hidden");
}

function moveButton(btn) {
  btn.style.position = "fixed";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

// FLOATING EMOJIS 🔥
function createFloatingEmojis() {
  const container = document.querySelector(".floating-elements");

  const emojis = [
    ...config.floatingEmojis.hearts,
    ...config.floatingEmojis.bears,
    ...config.floatingEmojis.frog,
    ...config.floatingEmojis.sunflower
  ];

  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    span.className = "floating-emoji";
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.left = Math.random() * 100 + "%";
    span.style.bottom = "-40px";


    span.style.animationDuration = 6 + Math.random() * 12 + "s";
    span.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(span);
  }
}


// CELEBRATION 💘
function celebrate() {
  document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
  const c = document.getElementById("celebration");
  c.classList.remove("hidden");

  document.getElementById("celebrationTitle").textContent = config.celebration.title;
  document.getElementById("celebrationMessage").textContent = config.celebration.message;
  document.getElementById("celebrationEmojis").textContent = config.celebration.emojis;
}
