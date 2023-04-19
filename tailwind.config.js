/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",

      md: "768px",

      lg: "976px",

      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        // day time
        morningMobile: "url('../img/morning.jpg')",
        morningMobileMd: "url('../img/morning.jpg')",
        afternoon: "url('../img/afternoon.jpg')",
        evening: "url('../img/evening.jpg')",
        night: "url('../img/night.jpg')",

        // other
        daymobileDetails: "url('../img/grey-bg.png')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
