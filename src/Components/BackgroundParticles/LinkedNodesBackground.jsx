import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const LinkedNodesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          color: { value: [ "#2DD4BF", // muted teal
      "#4ADE80", // soft emerald
      "#FACC15",] },
          shape: { type: "circle" },
          opacity: { value: 0.8 },
          size: { value: { min: 1.5, max: 2.5 } },
          links: {
            enable: true,
            distance: 130,
            color: "#5A2985",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
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
