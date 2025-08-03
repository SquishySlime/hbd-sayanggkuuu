document.getElementById("surpriseBtn").addEventListener("click", function() {
  document.getElementById("surprise").classList.remove("hidden");
  playMusic();
});

// Balon animasi sederhana
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.querySelector('.balloons').appendChild(balloon);
  
  setTimeout(() => balloon.remove(), 7000);
}

setInterval(createBalloon, 500);

// Optional musik
function playMusic() {
  let audio = new Audio('lagu-romantis.mp3');
  audio.play();
}
