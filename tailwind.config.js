/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gitp':"#24292e",
        'gits':"#2b3137",
        'gitt':'#fafbfc',
        'gitmain':'#2dba4e'

      }
    },
  },
  plugins: [],
}
