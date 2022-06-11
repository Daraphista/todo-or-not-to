module.exports = {
  purge: ['./dist/*index.html'],
  content: [],
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
