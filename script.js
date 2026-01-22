const config = window.VALENTINE_CONFIG;

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
  setupMusicPlayer();
});

// QUESTIONS
function showNextQuestion(n) {
  document.querySelectorAll(".question-section").forEach(q =>
    q.classList.add("hidden")
  );
  document.getElementById("question" + n).classList.remove("hidden");
}

function moveButton(btn) {
  btn.style.position = "fixed";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

// 💖 FLOATING EMOJIS (REAL FLOATING FIXED)
function createFloatingEmojis() {
  const container = document.querySelector(".floating-elements");

  const emojis = [
    ...config.floatingEmojis.hearts,
    ...config.floatingEmojis.bears,
    ...config.floatingEmojis.frog,
    ...config.floatingEmojis.sunflower
  ];

  for (let i = 0; i < 35; i++) {
    const span = document.createElement("span");
    span.className = "floating-emoji";
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.animationDuration = 10 + Math.random() * 15 + "s";
    span.style.opacity = 0.8;

    container.appendChild(span);
  }
}

// 💘 CELEBRATION
function celebrate() {
  document.querySelectorAll(".question-section").forEach(q =>
    q.classList.add("hidden")
  );

  const c = document.getElementById("celebration");
  c.classList.remove("hidden");

  document.getElementById("celebrationTitle").textContent =
    config.celebration.title;
  document.getElementById("celebrationMessage").textContent =
    config.celebration.message;
  document.getElementById("celebrationEmojis").textContent =
    config.celebration.emojis;
}

// 🎵 MUSIC PLAYER (SAFE VERSION)
function setupMusicPlayer() {
  const musicControls = document.getElementById("musicControls");
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  const musicSource = document.getElementById("musicSource");

  if (!config.music.enabled) return;

  musicSource.src = config.music.musicUrl;
  bgMusic.volume = config.music.volume || 0.5;
  bgMusic.load();

  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = config.music.stopText;
    } else {
      bgMusic.pause();
      musicToggle.textContent = config.music.startText;
    }
  });
}
