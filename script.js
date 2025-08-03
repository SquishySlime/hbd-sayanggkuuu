document.getElementById("surpriseBtn").addEventListener("click", function() {
      document.getElementById("surprise").classList.remove("hidden");
        playMusic();
        });

        function createBalloon() {
          const balloon = document.createElement('div');
            balloon.className = 'balloon';
              balloon.style.left = Math.random() * 100 + 'vw';
                balloon.style.animationDuration = 4 + Math.random() * 3 + 's';
                  document.querySelector('.balloons').appendChild(balloon);

                    setTimeout(() => balloon.remove(), 8000);
                    }

                    setInterval(createBalloon, 500);

                    // Optional music play (replace with your file name)
                    function playMusic() {
                      let audio = new Audio('lagu-romantis.mp3');
                        audio.play();
                        }