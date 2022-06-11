module.exports = {
  content: ["./dist/*.html", "./src/style/style.css}"],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
