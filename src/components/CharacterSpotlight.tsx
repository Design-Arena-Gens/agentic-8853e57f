const characters = [
  {
    id: "gobo",
    name: "Gobo Fraggle",
    aura: "from-fraggle-sunset via-fraggle-aqua to-fraggle-plum",
    role: "Explorer & Guitar Virtuoso",
    quote: "Adventure isn’t a map — it’s a beat we follow together.",
  },
  {
    id: "red",
    name: "Red Fraggle",
    aura: "from-fraggle-plum via-fraggle-gold to-fraggle-sunset",
    role: "Athletic Dynamo",
    quote: "Leap first, laugh loud, and cheer louder!",
  },
  {
    id: "wembley",
    name: "Wembley Fraggle",
    aura: "from-fraggle-aqua via-fraggle-lime to-fraggle-gold",
    role: "Heartfelt Harmonizer",
    quote: "Sometimes the bravest thing is choosing the kindest groove.",
  },
  {
    id: "mokey",
    name: "Mokey Fraggle",
    aura: "from-fraggle-gold via-fraggle-plum to-fraggle-aqua",
    role: "Poetic Visionary",
    quote: "Paint the air with stories and the caverns will glow brighter.",
  },
];

function CharacterArt({ id }: { id: string }) {
  const colors = {
    gobo: ["#ff7b5c", "#49f7ff"],
    red: ["#ff7b5c", "#ffd166"],
    wembley: ["#b6ff5c", "#49f7ff"],
    mokey: ["#8a2be2", "#ffd166"],
  } as const;

  const palette = colors[id as keyof typeof colors] ?? ["#ffffff", "#ffd166"];

  return (
    <svg viewBox="0 0 160 180" className="h-40 w-full" aria-hidden>
      <defs>
        <linearGradient id={`${id}-hair`} x1="0%" x2="100%">
          <stop offset="0%" stopColor={palette[0]} stopOpacity="0.9" />
          <stop offset="100%" stopColor={palette[1]} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="60" r="52" fill={`url(#${id}-hair)`} opacity="0.85" />
      <circle cx="54" cy="72" r="8" fill="white" />
      <circle cx="106" cy="72" r="8" fill="white" />
      <circle cx="54" cy="72" r="4" fill="#1b1042" />
      <circle cx="106" cy="72" r="4" fill="#1b1042" />
      <path d="M60 98 Q80 118 100 98" stroke="#1b1042" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M40 130 Q80 150 120 130" stroke={`url(#${id}-hair)`} strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.7" />
      <rect x="44" y="118" width="72" height="40" rx="18" fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}

export function CharacterSpotlight() {
  return (
    <section className="relative pb-24 pt-12 sm:pt-16 lg:pb-32 lg:pt-20">
      <div className="absolute inset-x-0 top-12 mx-auto h-[460px] max-w-5xl rounded-full bg-fraggle-plum/30 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-fraggle-aqua">
            Character Spotlight
          </span>
          <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">Hearts of Fraggle Rock</h2>
          <p className="mx-auto mt-4 max-w-3xl text-balance text-base text-white/75 sm:text-lg">
            Their harmonies craft the culture of the cavern. Meet the friends who turn every echo into a celebration.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {characters.map((character) => (
            <div
              key={character.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/12"
            >
              <span className={`absolute -bottom-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-br ${character.aura} opacity-30 blur-3xl transition duration-500 group-hover:opacity-60`} />
              <div className="relative flex flex-col gap-4">
                <CharacterArt id={character.id} />
                <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-2xl font-semibold text-white">{character.name}</h3>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">{character.role}</p>
                  <p className="text-sm text-white/70">“{character.quote}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
