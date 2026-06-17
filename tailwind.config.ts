import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--color-navy-rgb) / <alpha-value>)",
        "navy-mid": "rgb(var(--color-navy-mid-rgb) / <alpha-value>)",
        green: "rgb(var(--color-green-rgb) / <alpha-value>)",
        "gray-light": "rgb(var(--color-gray-light-rgb) / <alpha-value>)",
        "gray-text": "rgb(var(--color-gray-text-rgb) / <alpha-value>)",
        white: "rgb(var(--color-white-rgb) / <alpha-value>)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        "navy-lg": "0 24px 60px rgb(10 27 75 / 0.20)",
        "navy-md": "0 16px 40px rgb(10 27 75 / 0.16)",
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        "section-mobile": "72px",
        "section-desktop": "112px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms ease-out both",
        fadeIn: "fadeIn 500ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
