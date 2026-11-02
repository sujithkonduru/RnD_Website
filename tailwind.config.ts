import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#203B3D",
        navy: "#314E50",
        ink: "#16292B",
        brick: {
          DEFAULT: "#762D35",
          bright: "#8C3A43",
          deep: "#5B2129",
        },
        biscuit: "#E7D7B8",
        ivory: "#F5F1E8",
        sage: "#91AAA0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Sora", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        shell: "1440px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "cue-slide": {
          "0%": { transform: "translateY(-100%)" },
          "55%, 100%": { transform: "translateY(100%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        "cue-slide": "cue-slide 2.8s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        "pulse-dot": "pulse-dot 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
