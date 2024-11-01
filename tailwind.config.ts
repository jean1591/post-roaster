import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // text colours
    'text-blue-500',
    'text-green-500',
  ],
}
export default config
