import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:     "#0F0F0F",
        crimson: "#8B1A34",
        crimson2:"#A82040",
        mauve:   "#7B4F5E",
        bone:    "#F4F1EE",
        warm:    "#E8E3DE",
        mid:     "#9A9490",
        navy:    "#1E3A6E",
        navy2:   "#254a8a",
        navydark:"#0a0f1a",
        navymid: "#f0f4ff",
        navywarm:"#dde3f0",
      },
      fontFamily: {
        sans:    ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
