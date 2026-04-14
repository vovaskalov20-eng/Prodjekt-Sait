// Particles Background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particlesArray = [];
const numberOfParticles = 80;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = 'rgba(0, 255, 204, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});

resizeCanvas();
initParticles();
animate();

// Копіювання контактів
function copyContacts() {
  const text = `Володимир Соколов
Cyber Developer

Email: your.email@gmail.com
Telegram: @yourusername
Instagram: instagram.com/yourusername
GitHub: github.com/yourusername

Neon Visitka — цифрова неонова візитка`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.visitka-btn');
    const original = btn.textContent;
    btn.textContent = '✅ СКОПІЙОВАНО!';
    btn.style.background = '#00f7ff';
    btn.style.color = '#0a0a0f';

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = 'transparent';
      btn.style.color = '#00ffcc';
    }, 2500);
  });
}

// Додатковий випадковий glitch
setInterval(() => {
  const glitch = document.querySelector('.neon-visitka .glitch');
  if (glitch) {
    glitch.style.animation = 'none';
    void glitch.offsetWidth;
    glitch.style.animation = 'glitchSkew 0.7s linear';
    setTimeout(() => {
      glitch.style.animation = 'glitchSkew 4s linear infinite alternate-reverse';
    }, 800);
  }
}, 5500);

console.log('%c✅ Сайт з Neon Visitka успішно завантажено!', 'color:#00ffcc; font-size:16px;');