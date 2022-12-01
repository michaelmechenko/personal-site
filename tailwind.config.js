/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
          ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        main: {
          primary: "#fb923c",
          secondary: "#FBBF24",
          accent: "#FECACA",
          neutral: "#FCA5A5",
          "base-100": "#7c2d12",
        },
      },
      "halloween",
    ],
  },
}