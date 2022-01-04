module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: {
          50: "#efeffd",
          100: "#d1d2e4",
          200: "#b2b4cc",
          300: "#9396b7",
          400: "#7678a2",
          500: "#5c5f88",
          600: "#474a6b",
          700: "#33354d",
          800: "#1d2030",
          900: "#070b16",
        },

        btn: {
          50: "#ffe3e9",
          100: "#ffb3c0",
          200: "#fc8298",
          300: "#f9526f",
          400: "#f72446",
          500: "#dd0c2d",
          600: "#ad0622",
          700: "#7d0219",
          800: "#2B3148",
          900: "#1f0003",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
