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

// Копіювання контактів (працює і на головній, і на сторінках проєктів)
function copyContacts() {
  const text = `Володимир Соколов
Cyber Developer

Email: your.email@gmail.com
Telegram: @yourusername
Instagram: @yourusername
GitHub: github.com/yourusername

Neon Visitka — цифрова неонова візитка`;

  navigator.clipboard.writeText(text).then(() => {
    const btns = document.querySelectorAll('.visitka-btn, .neon-btn');
    btns.forEach(btn => {
      if (btn.textContent.includes('СКОПІЮВАТИ') || btn.textContent.includes('КОНТАКТИ')) {
        const original = btn.innerHTML;
        btn.innerHTML = '✅ СКОПІЙОВАНО!';
        btn.style.background = '#00f7ff';
        btn.style.color = '#0a0a0f';

        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = 'transparent';
          btn.style.color = '#00ffcc';
        }, 2500);
      }
    });
  });
}

// Додатковий випадковий glitch для Neon Visitka (на головній та на сторінці проєкту)
function addRandomGlitch() {
  const glitchElements = document.querySelectorAll('.glitch');
  glitchElements.forEach(glitch => {
    if (glitch) {
      glitch.style.animation = 'none';
      void glitch.offsetWidth; // reflow
      glitch.style.animation = 'glitchSkew 0.7s linear';
      
      setTimeout(() => {
        glitch.style.animation = 'glitchSkew 4s linear infinite alternate-reverse';
      }, 800);
    }
  });
}

// Запуск випадкового glitch кожні 4-7 секунд
setInterval(addRandomGlitch, 5500);

// Додатковий ефект для неонових кнопок "Переглянути"
document.addEventListener('DOMContentLoaded', () => {
  const viewBtns = document.querySelectorAll('.neon-view-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.letterSpacing = '4px';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.letterSpacing = '2px';
    });
  });
});

console.log('%c✅ Neon Portfolio з виділеною кнопкою "Переглянути" завантажено!', 'color:#00ffcc; font-size:16px; font-weight:bold;');