/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#090B18",
        secondary: "#FF6600",
        auxiliary: "#2DCBD3"
      },
      fontFamily:{
        body: ["Josefin Sans"]
      }
    },
  },
  plugins: [],
}

