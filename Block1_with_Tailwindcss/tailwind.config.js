/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
      },
      spacing: {
        68: "17rem",
        76: "19rem",
        84: "21rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        0.95: "95%",
        0.8: "80%",
      },
      fontFamily: {
        main: ["montserrat"],
        mulish: ["Mulish"],
      },
      colors: {
        dark: "#181818",
        primary: "#d29e0e",
        secondary: "e5001c",
        btn_blue: "#0BBEF2",
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
};
