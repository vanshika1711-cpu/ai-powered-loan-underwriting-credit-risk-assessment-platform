/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        darkBg: "#0f172a",
        cardBg: "#1e293b",
      },
    },
  },
  plugins: [],
};