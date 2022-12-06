/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./client/index.html",
        "./client/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'primary': '#1F2937',
                'primary-low': '#374151',
                'warning': '#f2c037',
                'info': '#31ccec',
                'error': '#c10015',
                'success': '#21ba45',
            },
        },
    },
    plugins: [],
}
