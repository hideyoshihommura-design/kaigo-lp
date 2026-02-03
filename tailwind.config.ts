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
          hover: "#554fb0",
          light: "#eeedfa",
          dark: "#3d3b8e",
        },
        secondary: {
          DEFAULT: "#0D83F5",
          hover: "#0a6fd4",
          light: "#e6f3ff",
        },
        accent: {
          DEFAULT: "#D84D6E",
          hover: "#c4405f",
          light: "#fce8ed",
        },
        background: "#fdfdfd",
        foreground: "#1a1a2e",
        muted: "#6B7280",
        border: "#E5E7EB",
        card: "#F8FAFC",
        surface: "#F1F5F9",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "28px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-left": "fadeInLeft 0.6s ease-out",
        "fade-in-right": "fadeInRight 0.6s ease-out",
        "pulse-slow": "pulse 3s infinite",
        float: "float 6s ease-in-out infinite",
        "count-up": "countUp 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #6462b2 0%, #0D83F5 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #D84D6E 0%, #0D83F5 100%)",
        "gradient-light":
          "linear-gradient(135deg, #eeedfa 0%, #e6f3ff 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #1a1a2e 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #6462b2 0%, #0D83F5 50%, #6462b2 100%)",
      },
      boxShadow: {
        glow: "0 4px 20px rgba(100, 98, 178, 0.15)",
        "glow-lg": "0 8px 40px rgba(100, 98, 178, 0.2)",
        "glow-accent": "0 4px 20px rgba(216, 77, 110, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
