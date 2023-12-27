module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#ff4438',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
