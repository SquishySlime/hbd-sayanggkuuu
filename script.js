// Hanya untuk tombol kejutan
document.getElementById("surpriseBtn").addEventListener("click", function() {
  document.getElementById("surprise").classList.remove("hidden");
});

// --- Musik otomatis saat klik layar ---
let musicPlayed = false;

function playMusicOnce() {
  if (!musicPlayed) {
    const audio = new Audio('lagu-romantis.mp3');
    audio.play().catch(e => {
      console.log("Autoplay gagal:", e);
    });
    musicPlayed = true;
  }
}

// Jalankan musik saat user pertama kali menyentuh atau klik layar
document.body.addEventListener("click", playMusicOnce);
document.body.addEventListener("touchstart", playMusicOnce);

// --- Balon animasi ---
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.querySelector('.balloons').appendChild(balloon);

  setTimeout(() => balloon.remove(), 8000);
}

setInterval(createBalloon, 500);
