/** @type {import('tailwindcss').Config} */
module.exports = {
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
            },
        },
    },
    plugins: [],
}
