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

// --- Main tombol kejutan ---
document.getElementById("surpriseBtn").addEventListener("click", function() {
  document.getElementById("surprise").classList.remove("hidden");
  playMusicOnce(); // tetap coba putar saat tombol ditekan
});

document.getElementById("surpriseBtn").addEventListener("click", function () {
  document.getElementById("surprise").classList.remove("hidden");
  playMusicOnce();
  confetti(); // panggil confetti saat tombol ditekan
});

// Jalankan musik juga saat layar disentuh/klik di mana saja
document.body.addEventListener("click", playMusicOnce);
document.body.addEventListener("touchstart", playMusicOnce);

// --- Animasi balon ---
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.querySelector('.balloons').appendChild(balloon);

  setTimeout(() => balloon.remove(), 8000);
}

setInterval(createBalloon, 500);
