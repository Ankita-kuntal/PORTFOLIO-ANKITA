/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // <— Important for React
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'accent-blue': '#dbeafe',
      },
      boxShadow: {
        'neobrutal': '4px 4px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
};
