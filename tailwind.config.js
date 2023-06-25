/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      noir: {
        1: "#cccccc",
        2: "#bfbfbf",
        3: "#a0a0a0",
        4: "#919191",
        5: "#828282",
        6: "#717171",
        7: "#6b6b6b",
        8: "#565656",
        9: "#4c4c4c",
        10: "#424242",
        11: "#3a3a3a",
        12: "#313131",
        13: "#2f2f2f",
        14: "#242424",
        15: "#1f1f1f",
        16: "#191919",
      },
    },
    extend: {},
  },
  plugins: [],
};
