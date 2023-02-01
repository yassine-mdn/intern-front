/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
    important : true,
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-select/dist/index.esm.js"
    ],
    theme: {
        fontFamily: {
            mono: ["ui-monospace", "SFMono-Regular"],
        },
        extend: {
            colors: {

                "main": {
                    '50': '#f0f2fd',
                    '100': '#e4e7fb',
                    '200': '#cdd3f8',
                    '300': '#afb6f2',
                    '400': '#8f91ea',
                    '500': '#7873e1',
                    '600': '#6c5dd4',
                    '700': '#5949b9',
                    '800': '#493d96',
                    '900': '#3e3877',
                },
                "secondary": {
                    '50': '#eef4ff',
                    '100': '#e1ebfe',
                    '200': '#c8dafd',
                    '300': '#a6c0fb',
                    '400': '#839df6',
                    '500': '#6075ee',
                    '600': '#4954e2',
                    '700': '#3a41c8',
                    '800': '#3239a1',
                    '900': '#2f3680',
                },
                'light': {
                    '50': '#f9fafc',
                    '100': '#eaedf4',
                    '200': '#d0d9e7',
                    '300': '#a7b9d2',
                    '400': '#7893b8',
                    '500': '#5776a0',
                    '600': '#445e85',
                    '700': '#384c6c',
                    '800': '#31415b',
                    '900': '#2d384d',
                },
                'dark': {
                    '50': '#f4f6f7',
                    '100': '#e2e6eb',
                    '200': '#c8d1d9',
                    '300': '#a1afbf',
                    '400': '#73869d',
                    '500': '#586b82',
                    '600': '#4c5b6e',
                    '700': '#424d5c',
                    '800': '#3b424f',
                    '900': '#282c34',
                },



            },
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "tranlate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),

        plugin(function({ addVariant }) {
            addVariant('first-child', '& > *:nth-child(1)')
            addVariant('second-child', '& > *:nth-child(2)')
            addVariant('third-child', '& > *:nth-child(3)')
        })
    ],
}
