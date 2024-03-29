import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'regal-blue': '#243c5a',
        'black' : '#000000',
        'gray-6' : '#F2F2F2',
        'gray-4' : '#BDBDBD',
        'gray-3' : '#828282',
        'gray-1' : '#333333',
        'gray-5' : '#E0E0E0',
        'white' :  '#FFFFFF',
        'red' : 'rgb(239 68 68)',
         'yellow' : '#F2C94C'
      },

      // screens: {
        
      // },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',],
        'serif': ['ui-serif', 'Georgia', 'Times New Roman'],
      },
    },
    
  },
  plugins: [],
}
export default config
