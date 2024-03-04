// import colors from 'tailwindcss/colors'

export const content = [
  './components/**/*.{vue,js}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}',
]
export const darkMode = 'class'
export const theme = {
  extend: {
    colors: {
      'primary-light': '#F7F8FC',
      'secondary-light': '#FFFFFF',
      'ternary-light': '#f6f7f8',

      'primary-dark': '#0D2438',
      'secondary-dark': '#102D44',
      'ternary-dark': '#1E3851',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
  },
}
export const variants = {
  extend: {
    opacity: ['disabled'],
  },
}
export const plugins = [require('@tailwindcss/forms')]
