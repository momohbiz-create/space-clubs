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
        // Custom Space Theme Colors - Space Clubs Nigeria
        space: {
          navy: "#020B18",
          green: "#008751",
          greenLight: "#00C46F",
          cyan: "#38EFFF",
          gold: "#FFD166",
          coral: "#FF6B6B",
          purple: "#A78BFA",
          // AfroFuturist additions
          rocketOrange: "#FF6B1A",
          cosmicPurple: "#7B5CFA",
          auroraTeal: "#00D9A5",
          deepSpace: "#07090F",
          deepSpaceAlt: "#141928",
        },
        // Space theme utilities
        "space-navy": "#020B18",
        "space-green": "#008751",
        "space-green-light": "#00C46F",
        "space-cyan": "#38EFFF",
        "space-gold": "#FFD166",
        "space-coral": "#FF6B6B",
        "space-purple": "#A78BFA",
        "space-rocket-orange": "#FF6B1A",
        "space-cosmic-purple": "#7B5CFA",
        "space-aurora-teal": "#00D9A5",
        "space-deep-space": "#07090F",
        "space-deep-space-alt": "#141928",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
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
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "nebula": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.1) rotate(5deg)" },
        },
      },
      animation: {
        "twinkle": "twinkle 2s ease-in-out infinite",
        "shoot": "shoot 3s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "nebula": "nebula 20s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
