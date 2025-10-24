const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 50; // number of aura blobs

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }
  
  reset() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.size = 50 + Math.random() * 100;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.color = Math.random() < 0.5
      ? 'rgba(0, 123, 255, 0.2)'
      : 'rgba(0, 51, 102, 0.2)';
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Wrap around edges
    if (this.x < -this.size) this.x = window.innerWidth + this.size;
    if (this.x > window.innerWidth + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = window.innerHeight + this.size;
    if (this.y > window.innerHeight + this.size) this.y = -this.size;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (const p of particles) {
    p.update();
    p.draw();
  }

  // Draw faint connecting lines for aura effect
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.strokeStyle = 'rgba(0, 51, 102, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}

animate();
