import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'mobile': '360px', // 기본 tailwind mobile-first. 사실상 사용하지 않음.
        'tablet': '768px', // 768  768~1023
        'desktop': '1024px', // 1024  1024~1920 및 그 이상에서 사용.
      },
    },
  },
  plugins: [],
};
export default config;
