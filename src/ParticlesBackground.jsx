import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "#ffffff" } },
        particles: {
          number: { value: 80 },
          color: { value: "#000000" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 100 },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
