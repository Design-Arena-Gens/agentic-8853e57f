"use client";

import { useMemo, useState } from "react";

type SeasonBeat = {
  id: number;
  title: string;
  spotlight: string;
  lesson: string;
  color: string;
  metric: number;
};

const seasonBeats: SeasonBeat[] = [
  {
    id: 1,
    title: "Season One · Rhythm Awakens",
    spotlight: "Gobo rallies the crew to rescue the Great Hall from a shimmering cave-in.",
    lesson: "Friendship turns fear into a dance floor when voices rise together.",
    color: "from-fraggle-sunset via-fraggle-gold to-fraggle-aqua",
    metric: 82,
  },
  {
    id: 2,
    title: "Season Two · Glow of Courage",
    spotlight: "Red dares the midnight currents to secure a moonlit lily for Wembley.",
    lesson: "Courage is a duet: one leap, one cheer, one giant splash of hope.",
    color: "from-fraggle-plum via-fraggle-aqua to-fraggle-lime",
    metric: 91,
  },
  {
    id: 3,
    title: "Season Three · Doozer Harmony",
    spotlight: "Doozer builders collaborate with Fraggles to engineer a resonant concert stage.",
    lesson: "Innovation thrives when creativity hums beside meticulous planning.",
    color: "from-fraggle-aqua via-fraggle-sunset to-fraggle-plum",
    metric: 88,
  },
  {
    id: 4,
    title: "Season Four · Outer Space Echoes",
    spotlight: "Travelling Matt bridges Silly Creature customs with underground celebrations.",
    lesson: "Understanding grows when curiosity listens as loudly as it speaks.",
    color: "from-fraggle-gold via-fraggle-plum to-fraggle-aqua",
    metric: 94,
  },
  {
    id: 5,
    title: "Season Five · Legends Resonate",
    spotlight: "A chorus of old tales revives forgotten doorways between worlds.",
    lesson: "Stories passed along become constellations guiding the next adventure.",
    color: "from-fraggle-plum via-fraggle-sunset to-fraggle-gold",
    metric: 97,
  },
];

export function EpisodeTimeline() {
  const [position, setPosition] = useState(0);
  const currentBeat = useMemo(() => seasonBeats[position], [position]);

  return (
    <section className="relative py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-[360px] max-w-5xl rounded-full bg-fraggle-sunset/25 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-fraggle-sunset">
            Episode Timeline
          </span>
          <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
            Seasons in Sonic Motion
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-base text-white/75 sm:text-lg">
            Slide through the seasons to reveal iconic adventures and the heartfelt lessons that echo through Fraggle Rock.
          </p>
        </header>

        <div className="glass-panel flex flex-col gap-8 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">{currentBeat.title}</h3>
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/55">
              <span className="size-2 rounded-full bg-fraggle-gold" />
              {position + 1} / {seasonBeats.length}
            </div>
          </div>
          <p className="text-lg text-white/80 sm:text-xl">{currentBeat.spotlight}</p>
          <p className="text-sm text-white/60">{currentBeat.lesson}</p>

          <div className="relative flex flex-col gap-6">
            <div className="relative h-3 rounded-full bg-white/10">
              <div
                className={`absolute left-0 top-0 h-3 rounded-full bg-gradient-to-r ${currentBeat.color}`}
                style={{ width: `${((position + 1) / seasonBeats.length) * 100}%` }}
              />
              <div className="absolute inset-0 flex justify-between">
                {seasonBeats.map((beat, index) => (
                  <button
                    key={beat.id}
                    type="button"
                    onClick={() => setPosition(index)}
                    className={`relative top-1/2 h-5 w-5 -translate-y-1/2 rounded-full transition duration-300 ${
                      position === index ? "bg-fraggle-gold" : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Select ${beat.title}`}
                  >
                    <span className="absolute inset-0 animate-pulseGlow rounded-full" />
                  </button>
                ))}
              </div>
            </div>

            <input
              type="range"
              min={0}
              max={seasonBeats.length - 1}
              step={1}
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-fraggle-aqua [&::-webkit-slider-thumb]:to-fraggle-sunset [&::-webkit-slider-thumb]:shadow-neon"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {seasonBeats.map((beat, index) => (
              <div
                key={beat.id}
                className={`rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 ${
                  index === position ? "border-white/35 bg-white/15" : "opacity-60"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.45em] text-white/55">Season {beat.id}</p>
                <p className="mt-3 font-display text-xl text-white">{beat.metric}% Resonance</p>
                <p className="mt-2 text-xs text-white/60">Heartstring index measuring sing-along power.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

