import React, { useEffect, useRef } from "react";
import "./ParticleBackground.css";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const createParticle = (x, y) => {
      const particle = {
        x,
        y,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
      };
      particles.push(particle);
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.size > 0.2) particle.size -= 0.1;

        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      });

      particles = particles.filter((particle) => particle.size > 0.2);

      requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (event) => {
      const { offsetX, offsetY } = event;
      for (let i = 0; i < 5; i++) {
        createParticle(offsetX, offsetY);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    animateParticles();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
};

export default ParticleBackground;
