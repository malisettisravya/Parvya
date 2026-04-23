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