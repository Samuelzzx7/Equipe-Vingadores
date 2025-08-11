const video = document.getElementById('introVideo');
const content = document.getElementById('mainContent');

video.loop = false;

video.addEventListener('ended', () => {
  video.style.display = 'none';
  content.style.display = 'block';
});

const ironman = document.getElementById('ironman');
let posX = -150;
const speed = 3;

function fly() {
  posX += speed;
  if (posX > window.innerWidth) {
    posX = -150;
  }
  ironman.style.left = posX + 'px';
  requestAnimationFrame(fly);
}

fly();