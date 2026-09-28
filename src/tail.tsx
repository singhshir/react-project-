import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  id: string;
  x: number;
  y: number;
  hue: number;
  bornAt: number;
}

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  phase: number;
  life: number;
  bornAt: number;
}

// ---- tunable timings ----
const TRAIL_LIFE = 650; // ms a ribbon segment lives
const PARTICLE_LIFE_MIN = 1600; // ms
const PARTICLE_LIFE_MAX = 3200; // ms
const AMBIENT_INTERVAL = 140; // ms between idle "floating" embers
const HUE_SPEED = 0.015; // how fast the flow color drifts

export default function FlowingLight() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  const lastPos = useRef({ x: 0, y: 0 });
  const pointer = useRef<{ x: number; y: number } | null>(null);
  const initialized = useRef(false);
  const lastAmbient = useRef(0);
  const rafId = useRef<number>();

  const hueNow = (t: number) => (t * HUE_SPEED) % 360;

  const spawnParticles = (x: number, y: number, speed: number) => {
    const count = Math.min(1 + Math.floor(speed / 12), 5);
    const baseHue = hueNow(performance.now());

    const newParticles: Particle[] = Array.from({ length: count }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 6;
      const id = `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 7)}`;
      return {
        id,
        x: x + Math.cos(angle) * r,
        y: y + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(0.25 + Math.random() * 0.5),
        size: 1.5 + Math.random() * 2.5,
        hue: (baseHue + Math.random() * 40 - 20 + 360) % 360,
        phase: Math.random() * Math.PI * 2,
        life: PARTICLE_LIFE_MIN + Math.random() * (PARTICLE_LIFE_MAX - PARTICLE_LIFE_MIN),
        bornAt: performance.now(),
      };
    });

    setParticles((prev) => [...prev.slice(-150), ...newParticles]);
    newParticles.forEach((p) => {
      setTimeout(() => {
        setParticles((prev) => prev.filter((pp) => pp.id !== p.id));
      }, p.life);
    });
  };

  const spawnAmbientParticle = (x: number, y: number) => {
    const baseHue = hueNow(performance.now());
    const id = `amb-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const life = PARTICLE_LIFE_MIN + Math.random() * (PARTICLE_LIFE_MAX - PARTICLE_LIFE_MIN);

    const p: Particle = {
      id,
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -(0.15 + Math.random() * 0.25),
      size: 1 + Math.random() * 1.8,
      hue: (baseHue + Math.random() * 30 - 15 + 360) % 360,
      phase: Math.random() * Math.PI * 2,
      life,
      bornAt: performance.now(),
    };

    setParticles((prev) => [...prev.slice(-150), p]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((pp) => pp.id !== id));
    }, life);
  };

  useEffect(() => {
    const handleMove = (x: number, y: number) => {
      if (!initialized.current) {
        lastPos.current = { x, y };
        pointer.current = { x, y };
        initialized.current = true;
        return;
      }

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 2) {
        const id = Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
        const point: TrailPoint = {
          id,
          x,
          y,
          hue: hueNow(performance.now()),
          bornAt: performance.now(),
        };

        setTrail((prev) => [...prev.slice(-200), point]);
        setTimeout(() => {
          setTrail((prev) => prev.filter((t) => t.id !== id));
        }, TRAIL_LIFE);

        spawnParticles(x, y, distance);
      }

      lastPos.current = { x, y };
      pointer.current = { x, y };
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handleMove(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // ambient trickle so it keeps floating even when the cursor rests
    const tick = (now: number) => {
      if (pointer.current && now - lastAmbient.current > AMBIENT_INTERVAL) {
        lastAmbient.current = now;
        spawnAmbientParticle(pointer.current.x, pointer.current.y);
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden ">
      {/* =========================
          FLOWING TRAIL
      ========================== */}
      {trail.map((p) => {
        const age = performance.now() - p.bornAt;
        const lifeFrac = Math.max(0, 1 - age / TRAIL_LIFE);
        const width = 2 + lifeFrac * 10;

        return (
          <div
            key={p.id}
            className="absolute rounded-full transition-all ease-out duration-500 will-change-[transform,opacity,width,height]"
            style={{
              left: p.x,
              top: p.y,
              width,
              height: width,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, hsla(${p.hue},95%,70%,${lifeFrac}) 0%, hsla(${p.hue},95%,60%,0) 70%)`,
              opacity: lifeFrac,
              boxShadow: `0 0 ${10 * lifeFrac}px hsla(${p.hue},95%,60%,${lifeFrac})`,
            }}
          />
        );
      })}

      {/* =========================
          FLOATING PARTICLES
      ========================== */}
      {particles.map((p) => {
        const age = performance.now() - p.bornAt;
        const t = age / p.life;
        const fade = Math.max(0, 1 - t);
        const drift = age * 0.004 + p.phase;

        const x = p.x + p.vx * age * 0.06 + Math.sin(drift) * 6;
        const y = p.y + p.vy * age * 0.06 - (age * age) * 0.00002;
        const size = p.size * (1 - t * 0.5);

        return (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: x,
              top: y,
              width: size * 3,
              height: size * 3,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, hsla(${p.hue},100%,85%,${fade}) 0%, hsla(${p.hue},95%,60%,0) 75%)`,
              boxShadow: `0 0 ${6 * fade}px hsla(${p.hue},95%,70%,${fade})`,
            }}
          />
        );
      })}
    </div>
  );
}