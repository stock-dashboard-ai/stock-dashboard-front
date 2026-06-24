/** @type {import('postcss').Config} */
const config = {
  plugins: {
    // Tailwind CSS v4 uses @tailwindcss/postcss (separate package from tailwindcss itself)
    '@tailwindcss/postcss': {},
  },
}

export default config
