/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#343D48', // body color and primary color
        text_dark: '#fff',
        text_secondary: '#02073E', // secondary body color
        heading: '#0F2137', // primary heading color
        heading_secondary: '#02073E', // heading color
        background: '#FFFFFF', // body background color
        background_dark: '#000',
        background_secondary: '#F9FAFC', // secondary background color
        border_color: '#E5ECF4', // border color
        primary: '#F94962', // primary button and link color
        primary_dark: '#0cf',
        secondary: '#3183FF', // secondary color - can be used for hover states
        secondary_dark: '#09c',
        muted: '#7B8188', // muted color
        muted_dark: '#111',
        accent: '#609', // a contrast color for emphasizing UI
        yellow: '#F6C416',

      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
    },

  },
  
}
