// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {

  valentineName: "Sanya 💕",

  pageTitle: "Will You Be My Valentine? 💝",

  floatingEmojis: {
    hearts: ["❤️", "💖", "💘", "💝", "💞"],
    bears: ["🐻", "🧸"],
    frog: ["🐸"],
    sunflower: ["🌻"]
  },

  questions: {
    first: {
      text: "Can I steal your heart for a lifetime? 💖",
      yesBtn: "Take it 🥺❤️",
      noBtn: "Not yet 🙈",
      secretAnswer: "It's already yours 😌❤️"
    },
    second: {
      text: "How much do you love me? 🥰",
      startText: "This much! 💕",
      nextBtn: "Next 💘"
    },
    third: {
      text: "Can we make this Valentine’s Day another memory together? 💖🌹",
      yesBtn: "Yes 🥺❤️",
      noBtn: "No 💔"
    }
  },

  loveMessages: {
    extreme: "WOOOOW you love me sooo much!! 🥰🚀💝",
    high: "To infinity and beyond! 🚀💖",
    normal: "And beyond! 🥰"
  },

  celebration: {
    title: "With you, everything feels right 🫶",
    message: "Always us ❤️",
    emojis: "❤️ 💖 💘 💝 💞 🥰"
  },

  colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
  },

  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5
  },

  music: {
    enabled: true,
    autoplay: true,
    musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};

window.VALENTINE_CONFIG = CONFIG;
