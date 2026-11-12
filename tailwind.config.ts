import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { paper: "#F5F2EB", vermilion: "#FF3028", ink: "#111111", charcoal: "#111216" },
      fontFamily: { grotesk: ["var(--font-grotesk)", "Helvetica Neue", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
