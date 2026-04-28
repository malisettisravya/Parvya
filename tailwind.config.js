/** @type {import('tailwindcss').Config} */
export default {
  // 1. THE BRAIN: This enables the "Manual" Dark Mode we built
  darkMode: 'class',

  // 2. THE PATH: Tells Tailwind where to look for your classNames
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // 3. THE DESIGN: Your custom colors and styles
  theme: {
    extend: {
      // ADDED: This forces a larger base size and scales other utilities
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.25rem' }],    // Was 12px, now 14px
        'sm': ['1rem', { lineHeight: '1.5rem' }],       // Was 14px, now 16px
        'base': ['1.125rem', { lineHeight: '1.75rem' }], // Was 16px, now 18px
        'lg': ['1.25rem', { lineHeight: '1.75rem' }],    // Was 18px, now 20px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },

  // 4. THE TOOLS: Extra features like animations
  plugins: [require("tailwindcss-animate")],
}