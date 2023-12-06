import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dark: '#16171B',
      darkLight: '#222327',
      cream: '#c0c0c0',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        rotateTo180: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        rotateTo0: {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'rotate-to-180': 'rotateTo180 0.5s ease-in-out forwards',
        'rotate-to-0': 'rotateTo0 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
