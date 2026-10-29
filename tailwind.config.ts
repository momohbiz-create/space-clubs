import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Space Clubs Nigeria - AfroFuturist Color Palette
                space: {
                  navy: "#07090F",
                  deep: "#141928",
                  orange: "#FF6B1A",
                  purple: "#7B5CFA",
                  teal: "#00D9A5",
                  gold: "#FFD166",
                  // Aliases for existing components
                  green: "#00D9A5",
                  "green-light": "#34D399",
                  cyan: "#00D9A5",
                  coral: "#FF6B1A",
                },
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["Orbitron", "monospace"],
      },
      keyframes: {
        "twinkle": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "shoot": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(-1000px) rotate(360deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(40px) rotate(-360deg)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" },
        },
      },
      animation: {
        "twinkle": "twinkle 2s ease-in-out infinite",
        "shoot": "shoot 3s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "orbit": "orbit 8s linear infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
