/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        accent: "#FD636B",
      },
      screens: {
        "2xl": "133px",
      },
    },
    container: {
      center: true,
      padding: "6rem",
    },
  },
  plugins: [],
};
