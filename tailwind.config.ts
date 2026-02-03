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
        primary: {
          DEFAULT: "#6462b2",
          light: "rgba(125, 123, 223, 0.05)",
          dark: "#4a48a0",
        },
        accent: {
          pink: "#D84D6E",
          blue: "#0D83F5",
        },
        text: {
          DEFAULT: "#312624",
          light: "#555555",
          muted: "#888888",
        },
        bg: {
          DEFAULT: "#fdfdfd",
          gray: "#f5f5f5",
          dark: "#333333",
        },
        link: "#1176d4",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
      borderRadius: {
        card: "28px",
        btn: "28px",
      },
      boxShadow: {
        card: "4px 4px 20px 0 rgba(0, 0, 0, 0.10)",
        "card-hover": "6px 6px 30px 0 rgba(0, 0, 0, 0.15)",
      },
      maxWidth: {
        container: "1200px",
        article: "1000px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
