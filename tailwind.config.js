/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'blue-rgba': 'rgb(59 , 130, 246)',
        // Define more custom colors here...
      },
    },
  },
  plugins: [],
};
