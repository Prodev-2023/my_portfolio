/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#090B18",
        secondary: "#2DCBD3",
        auxiliary: "#9AD0C2",
        primaryText: "#0C2D57"

      },
      fontFamily:{
        body: ["Josefin Sans"]
      }
    },
  },
  plugins: [],
}

