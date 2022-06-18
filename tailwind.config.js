module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '800px',
      lg: '975px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      colors: {
        gdHeadLightRed: 'hsl(13, 100%, 72%)',
        gdHeadDarkRed: 'hsl(353, 100%, 62%)',
        gdMainDarkBlue: 'hsl(237, 17%, 21%)',
        gdMainDesatBlue: 'hsl(237, 23%, 32%)',
        bgFootBlackBlue: 'hsl(240, 10%, 16%)',
        ctaTxt: 'hsl(356, 100%, 66%)',
        ctaHoverBg: 'hsl(355, 100%, 74%)',
        footTxt: 'hsl(240, 2%, 79%)',
        bodyTxt: 'hsl(207, 13%, 34%)',
      },
    },
  },
  plugins: [],
}