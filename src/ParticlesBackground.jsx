import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "./common/ThemeContext" // <-- Adjust path if needed

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme(); // ✅ Get theme from your context

  // Load particle engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Log particles load
  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Particle options with theme-based colors
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: theme === "light" ? "#ffffff" : "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: {
          value: theme === "light" ? "#000000" : "#ffffff",
        },
        links: {
          color: theme === "light" ? "#000000" : "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 150,
        },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [theme]
  );

  return (
    <div className="particles-container">
      {init && <Particles options={options} loaded={particlesLoaded} />}
    </div>
  );
};

export default ParticlesBackground;
