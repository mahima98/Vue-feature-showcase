module.exports = {
  //...
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6b21a8",
          secondary: "#d8b4fe",
          tertiary: "#f3e8ff",
          accent: "#37cdbe",
          neutral: "#3d4451",
          disabled: "#e0e0e0",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
};
