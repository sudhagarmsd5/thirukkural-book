/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fde8cd',
        secondary: '#fef9f8',
        accent: '#ef9273',
        't-primary': '#0d0d0d',
        'color-core-primary': '#3740ff',
        'color-shades-dim': '#202124',
        'color-core-tertiary': '#6001ff',
        'color-state-info-glare': '#3074e2',
        'color-shades-charcoal': '#303136',
        'color-shades-light-bright': '#ffffff',
        'color-shades-light': '#f8f9fa',
        'color-shades-gray-bright': '#a5a7af',
        'color-shades-gray': '#585b63',
        'color-shades-gray-glare': '#d2d3d7',
        'color-state-good-bright': '#e9f6ed',
        'color-state-good-dim': '#283532',
        'color-core-secondary-glare': '#ee518a',
        'color-core-primary-glare': '#9da2ff',
        // color-core-primary-bright: #f8faff;
        // color-core-primary-dim: #2c333f;
        // color-core-secondary: #e51661;
        // color-core-secondary-shade: #9c166b;

        // color-core-secondary-bright: #fef5fa;
        // color-core-secondary-dim: #3e2d39;
        // color-core-tertiary-glare: #d7aefb;
        // color-core-tertiary-bright: #faf6fe;
        // color-core-tertiary-dim: #352e3f;
        // color-core-quaternary: #007b83;
        // color-core-quaternary-glare: #78d9ec;
        // color-core-quaternary-bright: #f4fcfe;
        // color-core-quaternary-dim: #26373d;
        // color-core-brand: #3fc4ff;
        // color-state-good: #0d652d;

        // color-state-good-glare: #e2faed;
        // color-state-info: #174ea6;
        // color-state-info-bright: #deeafd;
        // color-state-info-dim: #2c333f;
        // color-state-warn: #c34900;
        // color-state-warn-bright: #fff5e3;
        // color-state-warn-dim: #3b372b;
        // color-state-warn-glare: #fffcf2;
        // color-state-bad: #a50e0e;
        // color-state-bad-bright: #fce8e8;
        // color-state-bad-dim: #3b2d30;
        // color-state-bad-glare: #ffe9e8;
        // color-shades-dark: #191919;
      },
    },
  },
  plugins: [],
};
