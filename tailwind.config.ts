import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangeburger': {
          '50': '#fff9eb',
          '100': '#ffedc6',
          '200': '#ffd988',
          '300': '#ffc04a',
          '400': '#ffa61f',
          '500': '#f98207',
          '600': '#dd5d02',
          '700': '#b73e06',
          '800': '#942f0c',
          '900': '#7a270d',
          '950': '#461202',
        },
        'redburger': {
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc0c0',
          '300': '#ff9494',
          '400': '#ff5757',
          '500': '#ff2323',
          '600': '#ff1616',
          '700': '#d70000',
          '800': '#b10303',
          '900': '#920a0a',
          '950': '#500000',
        },
      }
    },
  },
  plugins: [],
};
export default config;
