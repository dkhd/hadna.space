module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 20px 20px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        title: ['"Source Sans Pro"', "sans-serif"],
        icon: ['"Material Icons"'],
        quote: ["Caveat", "cursive"],
      },
      colors: {
        "baby-blue": {
          DEFAULT: "#DEFCFE",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#DEFCFE",
          600: "#ACF8FD",
          700: "#7BF3FB",
          800: "#49EFFA",
          900: "#18EAF8",
        },
        nord: {
          nord0: "#2E3440",
          nord1: "#3B4252",
          nord2: "#434C5E",
          nord3: "#4C566A",
          nord4: "#D8DEE9",
          nord5: "#E5E9F0",
          nord6: "#ECEFF4",
          nord7: "#8FBCBB",
          nord8: "#88C0D0",
          nord9: "#81A1C1",
          nord10: "#5E81AC",
          nord11: "#BF616A",
          nord12: "#D08770",
          nord13: "#EBCB8B",
          nord14: "#A3BE8C",
          nord15: "#B48EAD",
        },
        "dkhd-purple": {
          DEFAULT: "#0A192F",
          50: "#2A6AC6",
          100: "#2761B6",
          200: "#1F4F94",
          300: "#183D72",
          400: "#112B51",
          500: "#0A192F",
          600: "#000001",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        bunker: {
          DEFAULT: "#161B22",
          50: "#778BA7",
          100: "#677E9D",
          200: "#52657F",
          300: "#3E4C60",
          400: "#2A3441",
          500: "#161B22",
          600: "#020203",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        "blue-chill": {
          DEFAULT: "#0E72A3",
          50: "#A0DAF7",
          100: "#88D1F5",
          200: "#59BFF1",
          300: "#2AADED",
          400: "#1293D2",
          500: "#0E72A3",
          600: "#0A5174",
          700: "#063045",
          800: "#020F16",
          900: "#000000",
        },
        "japanese-laurel": {
          DEFAULT: "#14A800",
          50: "#9CFF8F",
          100: "#85FF75",
          200: "#59FF42",
          300: "#2CFF0F",
          400: "#1ADB00",
          500: "#14A800",
          600: "#0E7500",
          700: "#084200",
          800: "#020F00",
          900: "#000000",
        },
        spray: {
          DEFAULT: "#84F0D0",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#DFFBF3",
          400: "#B1F6E1",
          500: "#84F0D0",
          600: "#57EABF",
          700: "#29E5AD",
          800: "#18C390",
          900: "#12966F",
        },
        viking: {
          50: "#f8fcfd",
          100: "#f0fafa",
          200: "#daf2f3",
          300: "#c3e9ec",
          400: "#96d9de",
          500: "#69c9d0",
          600: "#5fb5bb",
          700: "#4f979c",
          800: "#3f797d",
          900: "#336266",
        },
        "radical-red": {
          50: "#fef4f6",
          100: "#fde8ee",
          200: "#fbc7d4",
          300: "#f8a5ba",
          400: "#f36186",
          500: "#ee1d52",
          600: "#d61a4a",
          700: "#b3163e",
          800: "#8f1131",
          900: "#750e28",
        },
        shark: {
          50: "#f4f4f4",
          100: "#e8e8e8",
          200: "#c7c7c7",
          300: "#a5a5a5",
          400: "#616161",
          500: "#1d1d1d",
          600: "#1a1a1a",
          700: "#161616",
          800: "#111111",
          900: "#0e0e0e",
        },
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
