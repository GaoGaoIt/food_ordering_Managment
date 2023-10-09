/** @type {import('tailwindcss').Config} */
const fs = require('fs');
const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
    prefix: 'tw-',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
    ],
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px', // iPad portrait
            lg: '1024px', // iPad landfiape
            xl: '1280px', // 150% fiale of 1920px
            '2xl': '1536px', // 125% fiale of 1920px
            '3xl': '1920px', // 100% fiale of 1920px
            '4xl': '2560px', // 2.5k resolution
            '5xl': '3840px' // 4k resolution
        },
        extend: {
            colors: {
                // "fi-red": "#FF0000",
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            fontSize: {
                'fi-h1': [
                    '4rem', {
                        lineHeight: '5rem',
                        letterSpacing: '-3px',
                        fontWeight: '700',
                    }
                ],
                'fi-h2': [
                    '3.75rem', {
                        lineHeight: '3.75rem',
                        letterSpacing: '-0.00833em',
                        fontWeight: '300',
                    }
                ],
                'fi-h3': [
                    '3rem', {
                        lineHeight: '3.125rem',
                        letterSpacing: 'normal',
                        fontWeight: '400',
                    }
                ],
                'fi-h4': [
                    '2.125rem', {
                        lineHeight: '2.5rem',
                        letterSpacing: '0.00735em',
                        fontWeight: '400',
                    }
                ],
                'fi-h5': [
                    '1.5rem', {
                        lineHeight: '2rem',
                        letterSpacing: 'normal',
                        fontWeight: '400',
                    }
                ],
                'fi-h6': [
                    '1.25rem', {
                        lineHeight: '2rem',
                        letterSpacing: '0.0125em',
                        fontWeight: '500',
                    }
                ],
                'fi-subtitle1': [
                    '1rem', {
                        lineHeight: '1.75rem',
                        letterSpacing: '0.00937em',
                        fontWeight: '400',
                    }
                ],
                'fi-subtitle2': [
                    '0.875rem', {
                        lineHeight: '1.375rem',
                        letterSpacing: '0.00714em',
                        fontWeight: '500',
                    }
                ],
                'fi-body1': [
                    '1rem', {
                        lineHeight: '1.5rem',
                        letterSpacing: '0.03125em',
                        fontWeight: '400',
                    }
                ],
                'fi-body2': [
                    '0.875rem', {
                        lineHeight: '1.25rem',
                        letterSpacing: '0.01786em',
                        fontWeight: '400',
                    }
                ],
                'fi-overline': [
                    '0.75rem', {
                        lineHeight: '2rem',
                        letterSpacing: '0.16667em',
                        fontWeight: '500',
                    }
                ],
                'fi-caption': [
                    '0.75rem', {
                        lineHeight: '1.25rem',
                        letterSpacing: '0.03333em',
                        fontWeight: '400',
                    }
                ],
            },
        },
    },
    plugins: [],
}