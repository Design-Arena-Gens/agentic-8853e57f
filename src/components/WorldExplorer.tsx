"use client";

import { useCallback, useState } from "react";

type FraggleWorld = {
  id: string;
  name: string;
  description: string;
  color: string;
  texture: string;
  detail: string;
};

const worlds: FraggleWorld[] = [
  {
    id: "great-hall",
    name: "Great Hall",
    description: "Lantern-lit limestone cathedrals echo with Fraggle choirs and percussive roots.",
    color: "from-fraggle-sunset via-fraggle-plum to-fraggle-aqua",
    texture: "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%)]",
    detail: "Luminous crystals hum in sync with Wembley’s rhythmic heartbeats while streams of sparkles drift overhead.",
  },
  {
    id: "doozer-dome",
    name: "Doozer Dome",
    description: "Architectural tangles shimmer with phosphorescent sugar rods and kinetic bridges.",
    color: "from-fraggle-lime via-fraggle-aqua to-fraggle-sunset",
    texture: "bg-[radial-gradient(circle_at_80%_30%,rgba(73,247,255,0.25),transparent_55%)]",
    detail: "Swaying conveyor belts, rotating mixers, and a chorus of tiny helmets illuminate innovation.",
  },
  {
    id: "outer-space",
    name: "Outer Space",
    description: "Uncle Travelling Matt’s postcard-worthy expedition zone among Silly Creatures.",
    color: "from-fraggle-plum via-fraggle-gold to-fraggle-aqua",
    texture: "bg-[radial-gradient(circle_at_50%_90%,rgba(255,209,102,0.25),transparent_60%)]",
    detail: "Roller skates, subway lights, and peculiar contraptions swirl into an energetic collage of discovery.",
  },
];

export function WorldExplorer() {
  const [activeWorldId, setActiveWorldId] = useState(worlds[0].id);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointer = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -16;
    setTilt({ x, y });
  }, []);

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const activeWorld = worlds.find((world) => world.id === activeWorldId) ?? worlds[0];

  return (
    <section id="worlds" className="relative py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-[420px] max-w-4xl rounded-full bg-fraggle-aqua/25 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-fraggle-lime">
            World Explorer
          </span>
          <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
            Navigate the Cavern Constellations
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-base text-white/75 sm:text-lg">
            Glide through immersive story zones and uncover the playful ecosystems that shape the Fraggle Rock universe.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel relative overflow-hidden p-8">
            <div
              className={`relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br ${activeWorld.color} ${activeWorld.texture} p-8 text-left shadow-neon`}
              style={{
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                transition: "transform 300ms ease",
              }}
              onPointerMove={handlePointer}
              onPointerLeave={handleLeave}
            >
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.45em] text-white/60">
                <span className="size-2 rounded-full bg-white/70" />
                {activeWorld.name}
              </div>
              <p className="text-lg text-white/85 sm:text-xl">{activeWorld.description}</p>
              <div className="relative flex flex-1 items-end">
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-black/15 p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_65%)]" />
                  <div className="relative flex h-full flex-col justify-between gap-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.45em] text-white/55">
                      <span>Depth Echo</span>
                      <span>Atmos 360°</span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                        <p className="text-2xl font-semibold text-fraggle-gold">64</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/60">Lanterns</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                        <p className="text-2xl font-semibold text-fraggle-aqua">128</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/60">Echoes</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                        <p className="text-2xl font-semibold text-fraggle-lime">∞</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/60">Grooves</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">{activeWorld.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {worlds.map((world) => (
              <button
                key={world.id}
                type="button"
                onClick={() => setActiveWorldId(world.id)}
                onMouseEnter={() => setActiveWorldId(world.id)}
                className={`group flex items-center gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-left transition duration-300 hover:border-white/30 hover:bg-white/10 ${
                  activeWorldId === world.id ? "border-white/30 bg-white/15" : ""
                }`}
              >
                <span className={`inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${world.color} text-2xl text-white shadow-neon`}>✷</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{world.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{world.description}</p>
                </div>
                <span className="text-2xl text-white/40 transition-transform group-hover:translate-x-1">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

