function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function goToGifts(confetti) {
  showSection('gifts');
  if (confetti) launchConfetti();
}

const funnyMessages = [
  "Oops, button broken… try again 😜",
  "Error 404: No Valentine found 😂",
  "Nice try, but you’re stuck with me 💘",
  "Haha, you can’t escape! 💖"
];
let noClicks = 0;
function funnyNo() {
  const msg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  document.getElementById('noMessage').innerText = msg;
  noClicks++;
  if (noClicks >= 3) {
    goToGifts(true);
  }
}

function quizResult() {
  document.getElementById('quizResult').innerText = "Your score: 0 Efforts 😂";
  launchConfetti();
}

function playDooronDooron() {
  const song = document.getElementById('dooronSong');
  song.play();
}

// Confetti animation
function launchConfetti() {
  for (let i = 0; i < 30; i++) {
    const conf = document.createElement('div');
    conf.className = 'confetti';
    conf.style.left = Math.random() * window.innerWidth + 'px';
    conf.style.top = '-10px';
    conf.style.backgroundColor = ['#ff3366','#ff0033','#ffd700','#00c3ff'][Math.floor(Math.random()*4)];
    conf.style.animationDuration = (2 + Math.random()*2) + 's';
    document.body.appendChild(conf);

    setTimeout(() => {
      conf.remove();
    }, 3000);
  }
}
