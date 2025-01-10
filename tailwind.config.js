/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kyiv: ['KyivTypeSans'], // Add KyivType Sans
        raleway: ['Raleway']
      },
      colors: {
        primary: "#F4F2ED",
        secondary: "#FF6542",
        accent: "#FAEDBC",
        myBlack: "#111214",
        myGrey: "#C4C4C4"
      }
    },
  },
  plugins: [],
}

