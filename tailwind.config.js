/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'img1': "url('src/assets/download (13).jpg')",
      'img2': "url('src/assets/download (14).jpg')",
      'img3': "url('src/assets/download (15).jpg')",
      'img4': "url('src/assets/images (12).jpg')",
      'img5': "url('src/assets/images (13).jpg')",
      'img6': "url('src/assets/images (14).jpg')",
      'img7': "url('src/assets/images (15).jpg')",
      'img8': "url('src/assets/images (16).jpg')",
      'img9': "url('src/assets/images (17).jpg')",
      'img10': "url('src/assets/images (12) (1).jpg')",
      'img12': "url('src/assets/images (18).jpg')",
      'img13': "url('src/assets/images (19).jpg')",
        
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

