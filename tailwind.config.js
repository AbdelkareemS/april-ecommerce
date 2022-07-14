module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      flexBasis: {
        almost50: "49.7%",
        almost20: "19.7%",
      },
      fontFamily: {
        Almarai: ["Almarai", "sans-serif"],
        AlmaraiLight: ["AlmaraiLight", "sans-serif"],
        AlmaraiBold: ["AlmaraiBold", "sans-serif"],
        AlmaraiExtraBold: ["AlmaraiExtraBold", "sans-serif"],
      },
      colors: {
        pinkish: "#C36FA3",
        butterYellow: "#FAE8C9",
        goblinGreen: "#719D93",
        facebook: "#3B5998",
        gmail: "#D44638",
      },
    },
  },
  plugins: [],
};
