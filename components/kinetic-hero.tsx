"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, RotateCcw } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { CanodSculpture } from "@/lib/canod-sculpture";

export function KineticHero() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const sculpture = useRef<CanodSculpture | null>(null);
  const [status, setStatus] = useState("loading");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import("@/lib/canod-sculpture").then(({ createCanodSculpture }) => {
      if (cancelled || !canvas.current) return;
      sculpture.current = createCanodSculpture(canvas.current, () => {
        sculpture.current?.dispose();
        sculpture.current = null;
        setStatus("unavailable");
      });
      setStatus("ready");
    }).catch(() => { if (!cancelled) setStatus("unavailable"); });
    return () => { cancelled = true; sculpture.current?.dispose(); sculpture.current = null; };
  }, []);

  useEffect(() => { sculpture.current?.setPaused(paused); }, [paused]);

  const toggle = () => setPaused((value) => !value);
  const handleCommand = (command: string) => {
    if (command === "left") sculpture.current?.rotate(-.25);
    if (command === "right") sculpture.current?.rotate(.25);
    if (command === "reset") sculpture.current?.reset();
    if (command === "motion") toggle();
  };
  const commands = [
    { id: "left", label: "Rotate sculpture left", icon: ArrowLeft },
    { id: "motion", label: paused ? "Play animation" : "Pause animation", icon: paused ? Play : Pause },
    { id: "right", label: "Rotate sculpture right", icon: ArrowRight },
    { id: "reset", label: "Reset view", icon: RotateCcw },
  ];

  return <div className="hero-art" data-scene-status={status} data-paused={paused}>
    <div className="sculpture-fallback" aria-hidden="true"><span>C</span><span>CANOD</span></div>
    <canvas ref={canvas} className="sculpture-canvas" role="img" aria-label="A sculptural CANOD C in polished metal with sage enamel and a red inlay" aria-describedby="sculpture-access" tabIndex={status === "ready" ? 0 : -1} onKeyDown={(event) => {
      if (["ArrowLeft", "ArrowRight", " ", "Home"].includes(event.key)) event.preventDefault();
      if (event.key === "ArrowLeft") sculpture.current?.rotate(-.25);
      if (event.key === "ArrowRight") sculpture.current?.rotate(.25);
      if (event.key === "Home") sculpture.current?.reset();
      if (event.key === " ") toggle();
    }} />
    <p id="sculpture-access" className="sr-only">Drag to turn the sculpture. Use the arrow keys to rotate, Space to pause, or Home to reset. The controls below offer the same actions.</p>
    <TooltipProvider delayDuration={200}><div className="sculpture-controls" role="group" aria-label="Sculpture controls">
      {commands.map(({ id, label, icon: Icon }) => <Tooltip key={id}>
        <TooltipTrigger asChild><button type="button" className={id === "motion" ? "sculpture-control sculpture-motion" : "sculpture-control"} aria-label={label} onClick={() => handleCommand(id)} disabled={status !== "ready"}><Icon size={18} aria-hidden="true" /></button></TooltipTrigger>
        <TooltipContent className="motion-tooltip" sideOffset={8}>{label}</TooltipContent>
      </Tooltip>)}
    </div></TooltipProvider>
  </div>;
}
