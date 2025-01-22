/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0056b3",
        secondary: "#ffd700",
        background: {
          light: "#f8fbff",
          dark: "#001f3f",
        },
        text: {
          primary: "0056b3",
          secondary: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

