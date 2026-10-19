/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
        },
        brand: {
          primary: '#4F46E5',
          highlight: '#22D3EE',
        },
      },
    },
  },
  plugins: [],
}
