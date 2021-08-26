module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 20px 20px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'title': ['"Source Sans Pro"', 'sans-serif'],
        'icon': ['"Material Icons"'],
      },
      colors: {
        'spray': {
          DEFAULT: '#84F0D0',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#DFFBF3',
          '400': '#B1F6E1',
          '500': '#84F0D0',
          '600': '#57EABF',
          '700': '#29E5AD',
          '800': '#18C390',
          '900': '#12966F'
        },
        "viking": {
          '50': '#f8fcfd',
          '100': '#f0fafa',
          '200': '#daf2f3',
          '300': '#c3e9ec',
          '400': '#96d9de',
          '500': '#69c9d0',
          '600': '#5fb5bb',
          '700': '#4f979c',
          '800': '#3f797d',
          '900': '#336266'
        },
        'radical-red': {
          '50': '#fef4f6',
          '100': '#fde8ee',
          '200': '#fbc7d4',
          '300': '#f8a5ba',
          '400': '#f36186',
          '500': '#ee1d52',
          '600': '#d61a4a',
          '700': '#b3163e',
          '800': '#8f1131',
          '900': '#750e28'
        },
        'shark': {
          '50': '#f4f4f4',
          '100': '#e8e8e8',
          '200': '#c7c7c7',
          '300': '#a5a5a5',
          '400': '#616161',
          '500': '#1d1d1d',
          '600': '#1a1a1a',
          '700': '#161616',
          '800': '#111111',
          '900': '#0e0e0e'
        }
      }
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
