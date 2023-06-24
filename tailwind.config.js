module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f4f4f6",
          600: "#75747b",
          800: "#404040",
          900: "#191823",
          "900_26": "#19182326",
          "600_02": "#737373",
          "600_01": "#76767e",
          "900_01": "#171717",
          "100_01": "#f5f5f5",
        },
        blue_gray: { 100: "#d4d4d4", 700: "#525252" },
        blue: { 700: "#0069ec" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_89": "#00000089",
          "900_dd": "#000000dd",
          "900_06": "#00000006",
        },
        teal: { 800: "#008a3b" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs1: "1px 1px  4px 0px #0000003f",
        bs: "0px 4px  18px 3px #00000006",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#f5f5f5,#737373)",
        gradient1: "linear-gradient(0deg ,#f5f5f5,#737373)",
      },
      textShadow: { ts: "1px 1px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
