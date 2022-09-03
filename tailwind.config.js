/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['IBM Plex Sans', 'sans-serif'],
        },
        fontWeight: {
            normal: 400,
            bold: 600,
        },
    },
    plugins: [],
}
