"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type GlobeOptions = COBEOptions & {
  onRender?: (state: Partial<COBEOptions>) => void;
};

type ContactGlobeProps = {
  className?: string;
};

const fadeMask =
  "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)";

const baseColor: [number, number, number] = [214 / 255, 231 / 255, 1];
const glowColor: [number, number, number] = [173 / 255, 193 / 255, 222 / 255];
const markerColor: [number, number, number] = [1, 1, 1];

export default function ContactGlobe({ className }: ContactGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const rotation = useSpring(0, {
    stiffness: 200,
    damping: 40,
    mass: 1,
    restDelta: 0.0001,
    restSpeed: 0.0001,
  });
  const [canvasWidth, setCanvasWidth] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const updateWidth = () => {
      setCanvasWidth(canvas.offsetWidth);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || canvasWidth === 0) {
      return;
    }

    let phi = 0.02;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: canvasWidth * 2,
      height: canvasWidth * 2,
      phi,
      theta: 0.3,
      dark: 0,
      diffuse: 4.62,
      scale: 1,
      mapSamples: 20000,
      mapBrightness: 1,
      baseColor,
      glowColor,
      markerColor,
      markers: [],
      offset: [0, 0],
      onRender: (state) => {
        state.width = canvasWidth * 2;
        state.height = canvasWidth * 2;
        state.phi = phi + rotation.get();
        phi += 0.4 / 200;
      },
    } as GlobeOptions);

    return () => {
      globe.destroy();
    };
  }, [canvasWidth, rotation]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-full w-full place-items-center place-content-center overflow-visible",
        className,
      )}
      style={{ background: "rgba(250, 250, 250, 0)" }}
    >
      <div
        className="aspect-square w-full max-w-[1000px]"
        style={{
          WebkitMaskImage: fadeMask,
          maskImage: fadeMask,
        }}
      >
        <canvas
          ref={canvasRef}
          className="h-full w-full select-none"
          style={{ contain: "layout paint size", cursor: "auto" }}
          onPointerDown={(event) => {
            pointerInteracting.current =
              event.clientX - pointerMovement.current;
            event.currentTarget.style.cursor = "grabbing";
          }}
          onPointerMove={(event) => {
            if (pointerInteracting.current === null) {
              return;
            }

            const delta = event.clientX - pointerInteracting.current;
            pointerMovement.current = delta;
            rotation.set(delta / 100);
          }}
          onPointerUp={(event) => {
            pointerInteracting.current = null;
            event.currentTarget.style.cursor = "grab";
          }}
          onPointerLeave={(event) => {
            pointerInteracting.current = null;
            event.currentTarget.style.cursor = "auto";
          }}
          onPointerEnter={(event) => {
            event.currentTarget.style.cursor = "grab";
          }}
        />
      </div>
    </div>
  );
}
