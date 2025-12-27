/** @type {import('tailwindcss').Config} */
export default {
  // got his from here btw - https://gist.githubusercontent.com/hassnian/a8ef7f243dcc933887b31af77e73df29/raw/74938c12f824007d5ff0fa1ac23cc5b5bedfb2c5/tailwind.config.js

  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './app/**/*.{js,vue,ts}',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },
    extend: {
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
    },
  },

  plugins: [],

}

