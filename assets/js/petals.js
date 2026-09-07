// Sistema de pétalos de rosa sutiles ("Bajo una Lluvia de Rosas")
// Diseñado para ser ligero, elegante y respetuoso con los recursos del dispositivo.

(function () {
  const canvas = document.getElementById('petals-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let active = true;
  let animationId = null;
  const numPetals = window.innerWidth < 768 ? 16 : 28;
  const petals = [];

  // Variaciones de color de pétalos de rosa teresianos
  const petalColors = [
    'rgba(244, 114, 182, 0.45)', // Rosa suave
    'rgba(251, 113, 133, 0.40)', // Rosa coral
    'rgba(225, 29, 72, 0.35)',   // Carmesí delicado
    'rgba(253, 164, 175, 0.50)', // Rosa pálido
    'rgba(212, 175, 55, 0.30)'   // Toque de oro tenue
  ];

  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = randomRange(0, width);
      this.y = initial ? randomRange(-height, height) : -20;
      this.size = randomRange(8, 16);
      this.speedY = randomRange(0.6, 1.6);
      this.speedX = randomRange(-0.8, 0.8);
      this.angle = randomRange(0, Math.PI * 2);
      this.rotationSpeed = randomRange(-0.02, 0.02);
      this.flip = randomRange(0, Math.PI);
      this.flipSpeed = randomRange(0.01, 0.03);
      this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.angle) * 0.9 + this.speedX;
      this.angle += this.rotationSpeed;
      this.flip += this.flipSpeed;

      if (this.y > height + 20 || this.x < -30 || this.x > width + 30) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.scale(Math.cos(this.flip), 1);

      ctx.beginPath();
      // Forma de pétalo elíptico con curva orgánica
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-this.size / 2, -this.size, -this.size, this.size / 2, 0, this.size);
      ctx.bezierCurveTo(this.size, this.size / 2, this.size / 2, -this.size, 0, 0);

      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < numPetals; i++) {
    petals.push(new Petal());
  }

  function loop() {
    if (!active) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < petals.length; i++) {
      petals[i].update();
      petals[i].draw();
    }
    animationId = requestAnimationFrame(loop);
  }

  function handleResize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', handleResize);

  // Iniciar
  loop();

  // Exponer control global
  window.PetalEffect = {
    toggle: function () {
      active = !active;
      const toggleBtn = document.getElementById('toggle-petals-btn');
      if (active) {
        if (!animationId) loop();
        if (toggleBtn) {
          toggleBtn.classList.add('active');
          toggleBtn.title = 'Desactivar pétalos de rosa';
        }
      } else {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        ctx.clearRect(0, 0, width, height);
        if (toggleBtn) {
          toggleBtn.classList.remove('active');
          toggleBtn.title = 'Activar lluvia de rosas';
        }
      }
      return active;
    },
    isActive: function () {
      return active;
    }
  };
})();
