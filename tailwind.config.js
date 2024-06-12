/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#B72FF5",
                    "secondary": "#F40177",          
                    "accent": "#BE3DF9",
                    "neutral": "#F91582",
                    "base-100": "#01010D",
                    "base-200": "#0D0D13",
                    "base-300": "#1A1A27",
                    "info": "#f3f4f6",          
                    "success": "#4ade80",
                    "warning": "#fef08a",          
                    "error": "#f87171"
                }
            }
        ]
    }
}

