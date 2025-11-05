import { EpisodeTimeline } from "@/components/EpisodeTimeline";
import { CharacterSpotlight } from "@/components/CharacterSpotlight";
import { Hero } from "@/components/Hero";
import { PosterGallery } from "@/components/PosterGallery";
import { WorldExplorer } from "@/components/WorldExplorer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col gap-12 overflow-hidden pb-24">
      <Hero />
      <PosterGallery />
      <WorldExplorer />
      <EpisodeTimeline />
      <CharacterSpotlight />

      <section className="relative py-20">
        <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-2xl rounded-full bg-fraggle-aqua/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/15 bg-white/8 p-10 text-center shadow-neon">
          <div className="pointer-events-none absolute inset-0 border border-white/10" />
          <h2 className="font-display text-4xl text-white sm:text-5xl">Keep the Fraggle Vibes Alive</h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-white/75 sm:text-lg">
            Crank up the radish juice, tune the mandolin, and invite your friends. Fraggle Rock lives wherever the music and laughter glow.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/results?search_query=fraggle+rock"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-fraggle-sunset via-fraggle-gold to-fraggle-aqua px-9 py-3 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-neon"
            >
              Watch Episodes
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Fraggle_Rock"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-lg text-white transition duration-300 hover:border-white/35 hover:bg-white/16"
            >
              Learn History
            </a>
          </div>
        </div>
      </section>

      <footer className="relative mt-auto border-t border-white/10 bg-gradient-to-r from-white/5 via-transparent to-white/5 py-10 text-center text-xs uppercase tracking-[0.4em] text-white/50">
        Crafted with radiant nostalgia for Fraggle Rock · Stay playful, stay curious
      </footer>
    </main>
  );
}
