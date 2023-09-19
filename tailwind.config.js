/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorDarkBlue: 'hsl(233, 26%, 24%)',
        colorLimeGreen: 'hsl(136, 65%, 51%)',
        colorBrightCyan: 'hsl(192, 70%, 51%)',
        colorGrayBlue: 'hsl(233, 8%, 62%)',
        colorLightGrayBlue: 'hsl(220, 16%, 96%)',
        colorLightGray: 'hsl(0, 0%, 98%)',
        colorWhite: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        fontPubSans: ['Public Sans', 'sans serif'],
      },
    },
    screens: {
      mobilelg: '700px',
    },
  },

  plugins: [],
};
