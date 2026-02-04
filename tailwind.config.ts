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
        // Zinc palette for that "Linear" feel
        background: "#09090b", // zinc-950
        surface: "#18181b",    // zinc-900
        surfaceHighlight: "#27272a", // zinc-800
        border: "#27272a",     // zinc-800
        
        // Text
        foreground: "#fafafa", // zinc-50
        muted: "#a1a1aa",      // zinc-400
        subtle: "#52525b",     // zinc-600

        // Brand Accents (Electric Blue)
        primary: {
          DEFAULT: "#2563eb", // blue-600
          hover: "#1d4ed8",   // blue-700
          foreground: "#ffffff",
        },
        
        // Semantic
        success: "#10b981", // emerald-500
        warning: "#f59e0b", // amber-500
        error: "#ef4444",   // red-500
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(37, 99, 235, 0.15)",
        glass: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
