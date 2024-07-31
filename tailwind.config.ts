import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darken: '#1e1f22',
        dark: '#2b2d30',
        lighten: '#3a3c3f',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  presets: [require("keep-react/preset")],
};
export default config;
