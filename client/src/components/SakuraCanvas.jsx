import React, { useEffect, useRef } from "react";

const SakuraCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Petal count: balanced, elegant, not overwhelming
    const petalCount = prefersReducedMotion ? 0 : isMobile ? 18 : 34;

    const mouse = { x: width / 2, y: height / 2, radius: 120, vx: 0, vy: 0 };
    let prevMouseX = width / 2;

    const onMouseMove = (e) => {
      mouse.vx = (e.clientX - prevMouseX) * 0.05;
      prevMouseX = e.clientX;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize, { passive: true });

    // Sakura Petal Particle Class
    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : -20;
        this.size = Math.random() * 8 + 6; // 6 to 14px
        this.speedY = Math.random() * 0.9 + 0.6; // Gentle fall
        this.speedX = Math.random() * 0.8 - 0.4; // Gentle drift
        this.angle = Math.random() * 360;
        this.rotationSpeed = (Math.random() * 0.02 - 0.01);
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = Math.random() * 0.03 + 0.01;
        this.opacity = Math.random() * 0.5 + 0.4; // 0.4 to 0.9
        this.color = Math.random() > 0.4 ? "#E8A1B0" : "#F4CCD5"; // Sakura pink / pale blossom
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.005) * 0.4;
        this.angle += this.rotationSpeed;
        this.flip += this.flipSpeed;

        // Subtle breeze reaction if mouse moves nearby
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 1.5 + mouse.vx;
        }

        // Wrap around boundaries
        if (this.y > height + 20) {
          this.reset();
        }
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(1, Math.cos(this.flip));

        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;

        // Draw elegant curved sakura petal path
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(
          this.size * 0.6,
          -this.size * 0.6,
          this.size * 0.8,
          this.size * 0.3,
          0,
          this.size
        );
        ctx.bezierCurveTo(
          -this.size * 0.8,
          this.size * 0.3,
          -this.size * 0.6,
          -this.size * 0.6,
          0,
          -this.size
        );
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
    }

    const petals = Array.from({ length: petalCount }, () => new Petal());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((petal) => {
        petal.update();
        petal.draw();
      });

      mouse.vx *= 0.92; // Dampen breeze impulse
      animationFrameId = requestAnimationFrame(render);
    };

    if (petalCount > 0) {
      render();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30"
    />
  );
};

export default SakuraCanvas;
