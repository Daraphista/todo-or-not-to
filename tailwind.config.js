/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      }
    },
  },
  plugins: [],
}
