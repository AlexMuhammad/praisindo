/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "prs-primary": "#6f42c1",
        "prs-secondary": "#fafafa",
        "prs-success": "#e8f5e9",
        "prs-danger": "#fbebee"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

