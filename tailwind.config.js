/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fade-in 0.5s linear forwards',
                marquee: 'marquee var(--marquee-duration) linear infinite',
                'spin-slow': 'spin 4s linear infinite',
                'spin-slower': 'spin 6s linear infinite',
                'spin-reverse': 'spin-reverse 1s linear infinite',
                'spin-reverse-slow': 'spin-reverse 4s linear infinite',
                'spin-reverse-slower': 'spin-reverse 6s linear infinite',
            },
            fontFamily: {
                sans: ['IBM Plex Sans', 'sans-serif'],
            },
            fontWeight: {
                normal: 400,
                bold: 600,
            },
            keyframes: {
                'fade-in': {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                marquee: {
                    '100%': {
                        transform: 'translateY(-50%)',
                    },
                },
                'spin-reverse': {
                    to: {
                        transform: 'rotate(-360deg)',
                    },
                },
            },
        },
    },
    plugins: [],
}
