/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1a1a2e",
          DEFAULT: "#2c3e50",
          light: "#34495e",
        },
        accent: {
          red: "#e74c3c",
          "red-dark": "#c0392b",
          blue: "#3498db",
          "blue-dark": "#2980b9",
          purple: "#667eea",
          "purple-dark": "#764ba2",
          pink: "#ff6b9d",
          "pink-dark": "#c44569",
        },
        background: {
          light: "#f8f9ff",
          "light-blue": "#e8f4fd",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
