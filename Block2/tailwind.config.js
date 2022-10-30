/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
      },
      spacing: {
        68: "17rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
      },
      fontFamily: {
        main: ["montserrat"],
        RouterStyle:["Mulish"]
      },
      colors: {
      },
      rotate: {
        0: "0deg",
        30: "30deg",
        60: "60deg",
        120: "120deg",
        150: "150deg",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        3000: "3000ms",
      },
      scale: {
        180: "180",
        200: "200",
        250: "250",
      },
    },
  },
  plugins: [],
}