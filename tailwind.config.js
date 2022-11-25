/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctor_portal: {
          primary: "#F0FFF0",
          

          secondary: "#21B573",

          accent: "#282531",

          neutral: "#413960",

          "base-100": "#FFFFFF",

          info: "#5CC4DB",

          success: "#10562C",

          warning: "#9A6509",

          error: "#F5312E",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
