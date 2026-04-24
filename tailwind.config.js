/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        bg: "#0c0c10",
        surface: "#141418",
        border: "#1e1e26",
        muted: "#2a2a35",
        ac: "#3B82F6",
      },
      animation: {
        "slide-x": "slide-x 30s linear infinite",
        "pulse-ac": "pulse-ac 2.5s ease-in-out infinite",
        glow: "glow 7s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        spin: "spin 20s linear infinite",
      },
      keyframes: {
        "slide-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ac": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.5)" },
        },
        glow: {
          "0%,100%": { opacity: "0.06" },
          "50%": { opacity: "0.12" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
