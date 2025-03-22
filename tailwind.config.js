/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowButtom: "0px 8px 8px rgba(0, 0, 0, 40%)",
      },
      keyframes: {
        refine: {
          "0%": {
            right: "0%",
          },
          "50%": {
            right: "-6%",
          },
          "75%": {
            right: "-7%",
            opacity: "0%",
          },
          "100%": {
            right: "0%",
          },
        },
      },
      animation: {
        refineSlide: "refine 1s infinite",
      },
      fontFamily: {
        // logoFont: ['"Bebas Neue", "sans-serif"'],
        // title: ['"Nosifer", "sans-serif"'],
      },
    },
  },
  plugins: [],
};
