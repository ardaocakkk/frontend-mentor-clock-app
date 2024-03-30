/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'custom-font' :'400'
      },
      colors: {
        'arrow' : '#303030',
        'arrow-hover' : "#999999",
        'more-tab' : '#979797',
        'more-text' : '#303030'
      }
    },
  },
  plugins: [],
}

