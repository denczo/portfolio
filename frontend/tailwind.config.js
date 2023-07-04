/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': {'max': '640px'},

      'desktop': {'min': '640px'},
      
      'desktopXL': {'min': '1024px'},

    },
    extend: {
      animation: {
        // typing: "typing 2s steps(14), blink 1.5s infinite"
        typing: "typing 2s steps(14)",
        blinking: "blinking 10s linear infinite"

      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "14ch" }
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
        blinking: {
          to: { "background-position": "400%"}
        }
        
      },
      maxHeight: {
        'lg': '512px',
        'md': '448',
        'sm': '384'
      },

      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  plugins: [],
}