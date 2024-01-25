/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero-mobile-img': "url('/images/image-hero-mobile.jpg')",
        'hero-desktop-img': "url(/images/image-hero-desktop.jpg')",
      }
    },
  },

  plugins: [],
};
