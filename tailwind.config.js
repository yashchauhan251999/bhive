/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightYellow: '#FFC422',
          500: '#FFBB00',
          darkYellow: '#FFC422'
        },
        secondary: {
          lightGrey: '#F9F9F9',
          darkGrey: '#CEC6C6',
          footerGrey : '#222E34'

        },
        text: {
          main: '#828282',
          secondary: '#828282',
          100: '#EEE7E7',
          900: '#605F5F',
          pass: '#263238'
        }
      }
    },
  },
  plugins: [],
}

