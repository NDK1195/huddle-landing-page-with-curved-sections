/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        pink: "hsl(322, 100%, 66%)",
        "light-pink": "hsl(321, 100%, 78%)",
        "light-red": "hsl(0, 100%, 63%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "very-pale-blue": "hsl(207, 100%, 98%)",
      },
      boxShadow: {
        button: "0px 3px 7px rgba(0, 37, 46, 0.22)",
      },
    },
  },
  plugins: [],
};
