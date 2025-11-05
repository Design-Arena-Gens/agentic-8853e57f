"use client";

import { useMemo, useState } from "react";

type Poster = {
  id: string;
  title: string;
  tagline: string;
  backgroundClass: string;
  accent: string;
  description: string;
  aura: string;
};

const posters: Poster[] = [
  {
    id: "fraggle-fanfare",
    title: "Fraggle Fanfare",
    tagline: "Where the beat drops with bouncing courage",
    backgroundClass: "bg-poster-burst",
    accent: "from-fraggle-sunset via-fraggle-gold to-fraggle-aqua",
    description:
      "Gobo leads the chorus through shimmering tunnels while Mokey paints the air with melody. A poster celebrating the pure joy of Fraggle jam sessions.",
    aura: "rgba(255, 123, 92, 0.65)",
  },
  {
    id: "doozer-dreams",
    title: "Doozer Dreams",
    tagline: "Engineering the impossible in crystalline lattices",
    backgroundClass: "bg-poster-moon",
    accent: "from-fraggle-aqua via-fraggle-lime to-fraggle-plum",
    description:
      "Intricate Doozer scaffolding spirals into light as teamwork and innovation sparkle against the cavern walls.",
    aura: "rgba(73, 247, 255, 0.55)",
  },
  {
    id: "gorg-garden",
    title: "Gorg Garden Guardians",
    tagline: "Between giant heartbeats and tiny courage",
    backgroundClass: "bg-poster-splash",
    accent: "from-fraggle-plum via-fraggle-sunset to-fraggle-gold",
    description:
      "Junior Gorg dances with blooming radishes while Red discovers new heights of bravery in the glow of moonlit leaves.",
    aura: "rgba(138, 43, 226, 0.6)",
  },
  {
    id: "travelling-matt",
    title: "Travelling Matt Chronicles",
    tagline: "Postcards from the Silly Creature frontier",
    backgroundClass: "bg-poster-dream",
    accent: "from-fraggle-gold via-fraggle-aqua to-fraggle-plum",
    description:
      "Uncle Travelling Matt charts the mysteries of Outer Space with fearless wonder and a backpack full of wild observations.",
    aura: "rgba(255, 209, 102, 0.55)",
  },
];

function PosterArt({ aura, id }: { aura: string; id: string }) {
  const gradientId = useMemo(() => `${id}-gradient`, [id]);

  return (
    <svg
      viewBox="0 0 320 420"
      role="img"
      aria-hidden="true"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="50%" stopColor={aura} />
          <stop offset="100%" stopColor="rgba(27,16,66,0.95)" />
        </linearGradient>
      </defs>
      <rect x="18" y="20" width="284" height="380" rx="32" fill={`url(#${gradientId})`} opacity="0.3" />
      <path
        d="M56 312 C 120 260 120 140 200 120 Q 260 110 276 80"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M80 340 Q 140 300 170 330 T 240 300"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="110" cy="160" r="46" fill="rgba(255,255,255,0.35)" />
      <circle cx="210" cy="210" r="36" fill="rgba(255,255,255,0.25)" />
      <g filter="url(#glow)">
        <circle cx="250" cy="140" r="24" fill={aura} opacity="0.85" />
        <circle cx="90" cy="230" r="22" fill={aura} opacity="0.6" />
      </g>
      <path
        d="M110 190 C 140 140 190 140 210 210"
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="50%"
        y="370"
        textAnchor="middle"
        fill="rgba(255,255,255,0.7)"
        fontSize="28"
        fontFamily="'Shrikhand', cursive"
      >
        Fraggle
      </text>
      <text
        x="50%"
        y="405"
        textAnchor="middle"
        fill="rgba(255,255,255,0.55)"
        fontSize="18"
        fontFamily="'Quicksand', sans-serif"
        letterSpacing="6"
      >
        ROCK
      </text>
      <linearGradient id="lines" x1="0%" x2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.55)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
      <path
        d="M35 70 H285"
        stroke="url(#lines)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M35 100 H285"
        stroke="url(#lines)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M35 130 H285"
        stroke="url(#lines)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.15"
      />
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="12" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export function PosterGallery() {
  const [activePosterId, setActivePosterId] = useState<Poster["id"]>(posters[0].id);
  const activePoster = posters.find((poster) => poster.id === activePosterId) ?? posters[0];

  return (
    <section id="posters" className="relative py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-10 mx-auto h-[520px] max-w-5xl rounded-full bg-fraggle-plum/40 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-fraggle-aqua">
            Poster Gallery
          </span>
          <h2 className="mt-6 font-display text-4xl text-fraggle-gold sm:text-5xl">Original Fraggle Posters</h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-base text-white/75 sm:text-lg">
            Each collectible design is handcrafted in luminous gradients, celebrating the fearless, playful heart of Fraggle Rock.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-8 sm:grid-cols-2">
            {posters.map((poster) => (
              <button
                key={poster.id}
                type="button"
                onMouseEnter={() => setActivePosterId(poster.id)}
                onFocus={() => setActivePosterId(poster.id)}
                onClick={() => setActivePosterId(poster.id)}
                className={`relative aspect-[3/4] overflow-hidden rounded-[32px] border border-white/15 p-[14px] text-left shadow-poster transition duration-500 hover:-translate-y-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fraggle-aqua ${poster.backgroundClass}`}
              >
                <span className="pointer-events-none absolute inset-0 poster-sheen opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/50" />
                <div className="relative flex h-full flex-col justify-between rounded-[26px] bg-black/20 p-4">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/80">
                      {poster.tagline.split(" ")[0]}
                    </span>
                  </div>
                  <div className="relative h-[62%] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <PosterArt aura={poster.aura} id={poster.id} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
                      {poster.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{poster.tagline}</p>
                  </div>
                  <span
                    className={`absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-br ${poster.accent} opacity-30 blur-3xl`}
                  />
                </div>
              </button>
            ))}
          </div>

          <aside className="glass-panel relative overflow-hidden">
            <div className="absolute -left-20 top-0 h-[120%] w-[60%] rotate-12 bg-gradient-to-b from-fraggle-aqua/30 via-fraggle-sunset/0 to-fraggle-plum/40 blur-3xl" />
            <div className="relative flex h-full flex-col gap-6 p-8">
              <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
                Collector Spotlight
              </span>
              <h3 className="text-3xl font-semibold text-white sm:text-4xl">{activePoster.title}</h3>
              <p className="text-base text-white/75 sm:text-lg">{activePoster.description}</p>
              <div className="mt-auto flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-fraggle-aqua/70 to-fraggle-plum/60 text-lg text-white shadow-neon">
                    ✶
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-white/50">Aura Level</p>
                    <p className="text-lg font-semibold text-white">Hyper Glow Signature</p>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-fraggle-aqua via-fraggle-gold to-fraggle-sunset" />
                </div>
                <p className="text-sm text-white/55">
                  Hover or tap the posters to preview, and collect them as digital keepsakes for your Fraggle anthem nights.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
