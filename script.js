// --- Musik: hanya diputar sekali saat interaksi pertama ---
let musicPlayed = false;
let birthdayMusic = new Audio('lagu-romantis.mp3');

function playMusicOnce() {
  if (!musicPlayed) {
    birthdayMusic.play().catch(e => {
      console.log("Autoplay gagal:", e);
    });
    musicPlayed = true;
  }
}

// --- Fungsi Confetti ---
function confetti() {
  const duration = 3 * 1000; // 3 detik
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confettiLib(Object.assign({}, defaults, {
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.9),
        y: Math.random() - 0.2
      }
    }));
  }, 250);
}

// --- Tombol kejutan: buka elemen + musik + confetti ---
document.getElementById("surpriseBtn").addEventListener("click", function () {
  document.getElementById("surprise").classList.remove("hidden");
  playMusicOnce();
  confetti();
});

// --- Jalankan musik saat interaksi layar pertama ---
document.body.addEventListener("click", playMusicOnce);
document.body.addEventListener("touchstart", playMusicOnce);

// --- Animasi balon terus-menerus ---
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.querySelector('.balloons').appendChild(balloon);

  setTimeout(() => balloon.remove(), 8000);
}

setInterval(createBalloon, 500);
