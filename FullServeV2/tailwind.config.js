module.exports = {
  theme: {
    extend: {
      colors: {
        'taupe': '#F2EDED', 
        'taupe-light': '#FCF7F7',
        'taupe-lighter': '#FFFCFC',
        'main-purple': '#07174E',
      },
      spacing: {
        '72': '18rem',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}
