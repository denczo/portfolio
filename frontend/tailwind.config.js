/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        // typing: "typing 2s steps(14), blink 1.5s infinite"
        typing: "typing 2s steps(14)"

      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "14ch" }
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        }
      },
    },
  },
  plugins: [],
}

