import { useEffect, useRef, useState } from "react";

interface SlashMark {
  id: string;
  x: number;
  y: number;
  length: number;
  angle: number;
  width: number;
  phase: "black" | "red" | "healing";
}

interface Spark {
  id: string;
  x: number;
  y: number;
  size: number;
  angle: number;
  distance: number;
}

export default function ScreenSlash() {
  const [slashes, setSlashes] = useState<SlashMark[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);

  const lastPos = useRef({ x: 0, y: 0 });
  const initialized = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Prevent the first mouse movement from creating
      // a giant slash from (0, 0)
      if (!initialized.current) {
        lastPos.current = { x, y };
        initialized.current = true;
        return;
      }

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      // Ignore very small movements
      if (distance > 12) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        const id =
          Math.random().toString(36).substring(2, 9) +
          Date.now().toString(36);

        const slash: SlashMark = {
          id,
          x: lastPos.current.x,
          y: lastPos.current.y,
          length: Math.min(distance + 12, 140),
          angle,
          width: Math.min(3 + distance / 20, 7),
          phase: "black",
        };

        setSlashes((prev) => [...prev.slice(-35), slash]);

        // Create sparks around the end of the slash
        const newSparks: Spark[] = Array.from({
          length: distance > 40 ? 3 : 1,
        }).map((_, index) => ({
          id: `${id}-spark-${index}`,
          x: x,
          y: y,
          size: Math.random() * 3 + 1,
          angle: Math.random() * 360,
          distance: Math.random() * 25 + 10,
        }));

        setSparks((prev) => [...prev.slice(-60), ...newSparks]);

        // BLACK → RED
        setTimeout(() => {
          setSlashes((prev) =>
            prev.map((s) =>
              s.id === id ? { ...s, phase: "red" } : s
            )
          );
        }, 450);

        // RED → HEALING
        setTimeout(() => {
          setSlashes((prev) =>
            prev.map((s) =>
              s.id === id ? { ...s, phase: "healing" } : s
            )
          );
        }, 2600);

        // Remove slash
        setTimeout(() => {
          setSlashes((prev) =>
            prev.filter((s) => s.id !== id)
          );
        }, 3300);

        // Remove sparks
        setTimeout(() => {
          setSparks((prev) =>
            prev.filter((s) => !s.id.startsWith(id))
          );
        }, 700);
      }

      lastPos.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">

      {/* =========================
          SLASHES
      ========================== */}
      {slashes.map((slash) => {
        let style =
          "bg-black opacity-100 shadow-none";

        if (slash.phase === "red") {
          style =
            "bg-red-600 opacity-95 shadow-[0_0_6px_rgba(255,0,0,0.9),0_0_18px_rgba(220,38,38,0.7)]";
        }

        if (slash.phase === "healing") {
          style =
            "bg-red-500 opacity-0 shadow-none";
        }

        return (
          <div
            key={slash.id}
            className={`
              absolute origin-left
              rounded-full
              transition-all
              ease-out
              duration-700
              will-change-[transform,opacity,width,height]
              ${style}
            `}
            style={{
              left: slash.x,
              top: slash.y,
              width:
                slash.phase === "healing"
                  ? slash.length + 15
                  : slash.length,
              height:
                slash.phase === "black"
                  ? slash.width
                  : slash.phase === "red"
                  ? slash.width + 1
                  : 1,
              transform: `rotate(${slash.angle}deg)`,
            }}
          >
            {/* White-hot core */}
            {slash.phase === "red" && (
              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2
                  w-full
                  h-[1px]
                  bg-white
                  opacity-80
                "
              />
            )}
          </div>
        );
      })}

      {/* =========================
          SPARKS
      ========================== */}
      {sparks.map((spark) => {
        const radians = (spark.angle * Math.PI) / 180;

        const endX =
          spark.x + Math.cos(radians) * spark.distance;

        const endY =
          spark.y + Math.sin(radians) * spark.distance;

        return (
          <div
            key={spark.id}
            className="
              absolute
              rounded-full
              bg-red-500
              shadow-[0_0_8px_rgba(239,68,68,0.9)]
              animate-ping
            "
            style={{
              left: endX,
              top: endY,
              width: spark.size,
              height: spark.size,
            }}
          />
        );
      })}
    </div>
  );
}