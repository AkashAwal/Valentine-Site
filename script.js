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
  document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
  document.getElementById("question" + n).classList.remove("hidden");
}

function moveButton(btn) {
  btn.style.position = "fixed";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

// 🌈 FLOATING EMOJIS (PRO VERSION)
function createFloatingEmojis() {
  const container = document.querySelector(".floating-elements");

  const emojis = [
    ...config.floatingEmojis.hearts,
    ...config.floatingEmojis.bears,
    ...config.floatingEmojis.frog,
    ...config.floatingEmojis.sunflower
  ];

  function spawnEmoji() {
    const span = document.createElement("span");
    span.className = "floating-emoji";
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.bottom = "-40px";
    span.style.fontSize = 20 + Math.random() * 15 + "px";
    span.style.animationDuration = 8 + Math.random() * 12 + "s";

    container.appendChild(span);

    // remove after animation (memory safe)
    setTimeout(() => span.remove(), 25000);
  }

  // continuous spawn 💘
  setInterval(spawnEmoji, 500);
}

// 💘 CELEBRATION
function celebrate() {
  document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
  const c = document.getElementById("celebration");
  c.classList.remove("hidden");

  document.getElementById("celebrationTitle").textContent = config.celebration.title;
  document.getElementById("celebrationMessage").textContent = config.celebration.message;
  document.getElementById("celebrationEmojis").textContent = config.celebration.emojis;
}

// 🎵 MUSIC PLAYER (PRO)
function setupMusicPlayer() {
  const musicControls = document.getElementById("musicControls");
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  const musicSource = document.getElementById("musicSource");

  if (!config.music.enabled || !musicControls) return;

  musicSource.src = config.music.musicUrl;
  bgMusic.volume = config.music.volume || 0;
  bgMusic.load();

  function fadeInMusic() {
    const fade = setInterval(() => {
      if (bgMusic.volume < 0.5) {
        bgMusic.volume += config.music.fadeSpeed || 0.01;
      } else {
        clearInterval(fade);
      }
    }, 50);
  }

  if (config.music.autoplay) {
    bgMusic.play().then(() => {
      fadeInMusic();
      musicToggle.textContent = config.music.stopText;
    }).catch(() => {
      musicToggle.textContent = config.music.startText;
    });
  }

  musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      fadeInMusic();
      musicToggle.textContent = config.music.stopText;
    } else {
      bgMusic.pause();
      musicToggle.textContent = config.music.startText;
    }
  });
}
