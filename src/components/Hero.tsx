"use client";

import { useEffect, useRef } from "react";

const auraOrbs = [
  { id: "one", size: 220, top: "-10%", left: "10%", color: "bg-fraggle-plum/40" },
  { id: "two", size: 180, top: "65%", left: "75%", color: "bg-fraggle-aqua/40" },
  { id: "three", size: 260, top: "40%", left: "-15%", color: "bg-fraggle-sunset/30" },
  { id: "four", size: 140, top: "5%", left: "70%", color: "bg-fraggle-lime/35" },
];

const highlightMoments = [
  {
    title: "Sing & Dance",
    description: "Every day is a jam session with rhythms echoing through the caverns.",
  },
  {
    title: "Build & Explore",
    description: "Doozer constructions glitter under lantern light as Fraggles weave by.",
  },
  {
    title: "Care & Share",
    description: "Lessons of friendship and courage ripple from Fraggle Rock to outer space.",
  },
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const setCoords = (x: number, y: number) => {
      node.style.setProperty("--cursor-x", `${x}%`);
      node.style.setProperty("--cursor-y", `${y}%`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = node.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      setCoords(x, y);
    };

    const handleLeave = () => {
      setCoords(50, 50);
    };

    handleLeave();
    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handleLeave);

    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-[240px] blur-3xl bg-gradient-to-br from-fraggle-sunset/40 via-fraggle-plum/30 to-transparent" />
      <div
        ref={heroRef}
        className="relative mx-auto flex max-w-6xl flex-col gap-16 overflow-hidden rounded-[36px] border border-white/10 bg-[rgba(13,8,30,0.75)] p-10 text-center shadow-neon transition-colors duration-500 sm:p-16 lg:p-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--cursor-x,50%) var(--cursor-y,50%), rgba(73,247,255,0.28), transparent 55%), var(--fraggle-bg)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 starfield" />
        {auraOrbs.map((orb) => (
          <span
            key={orb.id}
            className={`pointer-events-none absolute ${orb.color} blur-3xl opacity-70 animate-float-slow`}
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
            }}
          />
        ))}

        <div className="relative z-10 flex flex-col gap-6">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-fraggle-gold backdrop-blur">
            Neon Grooves of Fraggle Rock
          </span>
          <h1 className="font-display text-5xl leading-none text-white drop-shadow-[0_10px_45px_rgba(73,247,255,0.35)] sm:text-6xl lg:text-7xl">
            Dance into the Cavern of Dreams
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-lg text-white/80 sm:text-xl">
            Journey beneath the rock and into a kaleidoscope of friendship, rhythm, and imagination.
            This immersive tribute celebrates the vibrant universe where Fraggles, Doozers, and Gorgs
            remind us to play in technicolor.
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#posters"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-fraggle-sunset via-fraggle-plum to-fraggle-aqua px-10 py-3 text-lg font-semibold text-white shadow-lg shadow-fraggle-plum/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-neon"
          >
            Explore Posters
            <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#worlds"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-lg text-white transition duration-300 hover:border-white/40 hover:bg-white/10"
          >
            Cavern Worlds
          </a>
        </div>

        <div className="relative z-10 grid gap-6 text-left sm:grid-cols-3">
          {highlightMoments.map((item) => (
            <div key={item.title} className="glass-panel p-6">
              <h3 className="font-display text-xl text-fraggle-gold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/75">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

