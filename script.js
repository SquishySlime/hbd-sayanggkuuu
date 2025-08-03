let musicPlayed = false; // flag agar lagu hanya diputar sekali
let audio = new Audio('lagu-romantis.mp3'); // siapkan audio sekali di awal
audio.volume = 1.0; // pastikan volumenya cukup

document.getElementById("surpriseBtn").addEventListener("click", function () {
  document.getElementById("surprise").classList.remove("hidden");
  playMusic();
});

// Fungsi untuk memutar musik sekali
function playMusic() {
  if (!musicPlayed) {
    audio.play().catch((err) => {
      console.log("Autoplay gagal: ", err);
    });
    musicPlayed = true;
  }
}

// Animasi balon
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.querySelector('.balloons').appendChild(balloon);
  
  setTimeout(() => balloon.remove(), 7000);
}

setInterval(createBalloon, 500);
