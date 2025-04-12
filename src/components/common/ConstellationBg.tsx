"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ConstellationBg = () => {
  const [init, setInit] = useState(false);

  // This should be run ONLY ONCE per application lifetime
  useEffect(() => {
    // Delay setting this up to prevent performance hits during animations on initial page
    const id = setTimeout(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, 2300);

    return () => clearTimeout(id);
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0e0f1c",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "connect",
          },
        },
        modes: {
          connect: {
            distance: 100,
            radius: 250,
            links: {
              opacity: 0.06,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#fff",
        },
        links: {
          color: "#6da2ff",
          distance: 120,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1.75 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <>
        <div className="absolute">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
        <div className="bg-background animate-fade-out fixed bottom-0 left-0 right-0 top-0" />
      </>
    );
  }

  return <></>;
};
