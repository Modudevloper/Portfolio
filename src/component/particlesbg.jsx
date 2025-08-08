// ParticleBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#c42828" }, // ⛳ Add '#' before hex color
        fpsLimit: 60, // 🧹 Removed stray comma and typo: "60,9-"
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        particles: {
          color: { value: "#facc15" },
          links: {
            enable: true,
            color: "#facc15",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: "bounce" },
          },
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}
