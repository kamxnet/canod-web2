"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { CanodSculpture } from "@/lib/canod-sculpture";

export function KineticHero() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const sculpture = useRef<CanodSculpture | null>(null);
  const [status, setStatus] = useState("loading");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let instance: CanodSculpture | null = null;
    const start = () =>
      import("@/lib/canod-sculpture")
        .then(({ createCanodSculpture }) => {
          if (cancelled || !canvas.current) return;
          instance = createCanodSculpture(canvas.current, () => {
            instance?.dispose();
            if (sculpture.current === instance) sculpture.current = null;
            if (!cancelled) setStatus("unavailable");
          });
          sculpture.current = instance;
          return instance.ready.then(() => {
            if (!cancelled && sculpture.current === instance)
              setStatus("ready");
          });
        })
        .catch(() => {
          instance?.dispose();
          if (sculpture.current === instance) sculpture.current = null;
          if (!cancelled) setStatus("unavailable");
        });
    const idle =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(start, { timeout: 1200 })
        : undefined;
    const timer =
      idle === undefined ? window.setTimeout(start, 150) : undefined;
    return () => {
      cancelled = true;
      if (idle !== undefined) window.cancelIdleCallback(idle);
      if (timer !== undefined) window.clearTimeout(timer);
      instance?.dispose();
      if (sculpture.current === instance) sculpture.current = null;
    };
  }, []);

  useEffect(() => {
    sculpture.current?.setPaused(paused);
  }, [paused]);

  const toggle = () => setPaused((value) => !value);
  const motionLabel = paused ? "Play animation" : "Pause animation";
  const MotionIcon = paused ? Play : Pause;

  return (
    <div className="hero-art" data-scene-status={status} data-paused={paused}>
      <div className="sculpture-fallback" aria-hidden="true">
        <Image
          className="sculpture-poster"
          src="/canod-sculpture-poster.webp"
          width={900}
          height={558}
          alt=""
          preload
          unoptimized
        />
      </div>
      <canvas
        ref={canvas}
        className="sculpture-canvas"
        role="img"
        aria-label="A sculptural CANOD C in polished metal with sage enamel and a red inlay"
        aria-describedby="sculpture-access"
        tabIndex={status === "ready" ? 0 : -1}
        onKeyDown={(event) => {
          if (["ArrowLeft", "ArrowRight", " ", "Home"].includes(event.key))
            event.preventDefault();
          if (event.key === "ArrowLeft") sculpture.current?.rotate(-0.25);
          if (event.key === "ArrowRight") sculpture.current?.rotate(0.25);
          if (event.key === "Home") sculpture.current?.reset();
          if (event.key === " ") toggle();
        }}
      />
      <p id="sculpture-access" className="sr-only">
        Drag to turn the sculpture. Use the arrow keys to rotate, Space to
        pause, or Home to reset.
      </p>
      <TooltipProvider delayDuration={200}>
        <div className="sculpture-controls">
          <p className="sculpture-invitation">Go on. Give it a spin.</p>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="sculpture-control sculpture-motion"
                aria-label={motionLabel}
                onClick={toggle}
                disabled={status !== "ready"}
              >
                <MotionIcon size={16} aria-hidden="true" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="motion-tooltip" sideOffset={8}>
              {motionLabel}
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
