import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fraggle-sunset": "#ff7b5c",
        "fraggle-dusk": "#774bfb",
        "fraggle-lime": "#b6ff5c",
        "fraggle-aqua": "#49f7ff",
        "fraggle-deep": "#1b1042",
        "fraggle-plum": "#8a2be2",
        "fraggle-gold": "#ffd166",
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        display: ["var(--font-shrikhand)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-grid":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(73, 247, 255, 0.25) 0, transparent 45%), linear-gradient(135deg, rgba(27,16,66,0.95), rgba(119,75,251,0.85) 40%, rgba(255,123,92,0.8))",
        "poster-burst":
          "radial-gradient(circle at top, rgba(255,209,102,0.9), rgba(255,123,92,0.35) 45%), linear-gradient(160deg, rgba(73,247,255,0.8), rgba(27,16,66,0.9))",
        "poster-moon":
          "radial-gradient(circle at 30% 30%, rgba(182,255,92,0.9), transparent 40%), linear-gradient(200deg, rgba(119,75,251,0.85), rgba(27,16,66,0.95))",
        "poster-splash":
          "radial-gradient(circle at 70% 30%, rgba(255,123,92,0.8), transparent 40%), radial-gradient(circle at 20% 80%, rgba(73,247,255,0.7), transparent 45%), linear-gradient(135deg, rgba(27,16,66,0.92), rgba(138,43,226,0.9))",
        "poster-dream":
          "radial-gradient(circle at 10% 10%, rgba(255,209,102,0.85), transparent 35%), radial-gradient(circle at 90% 80%, rgba(182,255,92,0.75), transparent 50%), linear-gradient(145deg, rgba(119,75,251,0.9), rgba(73,247,255,0.7))",
      },
      boxShadow: {
        neon: "0 0 25px rgba(73,247,255,0.45)",
        poster: "0 35px 60px rgba(20,14,47,0.35)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(73,247,255,0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(73,247,255,0.45)" },
        },
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
