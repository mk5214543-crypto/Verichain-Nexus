import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const LinkedNodesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "transparent", // background transparent
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 70, // slightly more nodes for rich effect
            density: { enable: true, area: 800 },
          },
          color: { value: ["#00ffe0", "#02082B", "#7f00ff"] }, // modern node colors
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 1.5, max:  2.5} },
          links: {
            enable: true,
            distance: 150,
            color: "#5A2985", // neon cyan links
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default LinkedNodesBackground;
