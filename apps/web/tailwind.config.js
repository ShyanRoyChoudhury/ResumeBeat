/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        londrina: ['var(--font-londrina)', 'sans-serif'],
        wittgenstein: ['var(--font-wittgenstein)', 'sans-serif'],
        vanchrome: ['var(--font-vanchrome)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

// module.exports = require("@repo/ui/tailwind.config");
