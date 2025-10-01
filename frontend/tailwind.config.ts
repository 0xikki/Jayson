import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
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
        // Slow learners theme - complete semantic system
        'sl-primary': {
          DEFAULT: 'hsl(var(--sl-primary))',
          foreground: 'hsl(var(--sl-primary-foreground))',
        },
        'sl-secondary': {
          DEFAULT: 'hsl(var(--sl-secondary))',
          foreground: 'hsl(var(--sl-secondary-foreground))',
        },
        'sl-accent': {
          DEFAULT: 'hsl(var(--sl-accent))',
          foreground: 'hsl(var(--sl-accent-foreground))',
        },
        'sl-success': {
          DEFAULT: 'hsl(var(--sl-success))',
          foreground: 'hsl(var(--sl-success-foreground))',
        },
        'sl-warning': {
          DEFAULT: 'hsl(var(--sl-warning))',
          foreground: 'hsl(var(--sl-warning-foreground))',
        },
        'sl-info': {
          DEFAULT: 'hsl(var(--sl-info))',
          foreground: 'hsl(var(--sl-info-foreground))',
        },
        'sl-destructive': {
          DEFAULT: 'hsl(var(--sl-destructive))',
          foreground: 'hsl(var(--sl-destructive-foreground))',
        },
        'sl-background': 'hsl(var(--sl-background))',
        'sl-foreground': 'hsl(var(--sl-foreground))',
        'sl-muted': {
          DEFAULT: 'hsl(var(--sl-muted))',
          foreground: 'hsl(var(--sl-muted-foreground))',
        },
        'sl-card': {
          DEFAULT: 'hsl(var(--sl-card))',
          foreground: 'hsl(var(--sl-card-foreground))',
        },
        'sl-border': 'hsl(var(--sl-border))',
        'sl-input': 'hsl(var(--sl-input))',
        'sl-ring': 'hsl(var(--sl-ring))',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config; 