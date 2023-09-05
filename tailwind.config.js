/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/Headers.tsx',
    'node_modules/flowbite-react/**/*'

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

