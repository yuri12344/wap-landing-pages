import react from '@astrojs/react';


/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    integrations: [react()],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['UniSans', 'sans-serif'],
                'sans-bold': ['UniSansBold', 'sans-serif'],
                'sans-light': ['UniSansLight', 'sans-serif'],
                'sans-heavy': ['UniSansHeavy', 'sans-serif'],
                'sans-semibold': ['UniSansSemiBold', 'sans-serif'],
                'sans-thin': ['UniSansThin', 'sans-serif'],
                'sans-italic': ['UniSansItalic', 'sans-serif'],
                'sans-bold-italic': ['UniSansBoldItalic', 'sans-serif'],
                'sans-light-italic': ['UniSansLightItalic', 'sans-serif'],
                'sans-heavy-italic': ['UniSansHeavyItalic', 'sans-serif'],
                'sans-thin-italic': ['UniSansThinItalic', 'sans-serif'],
                'sans-semibold-italic': ['UniSansSemiBoldItalic', 'sans-serif'],
                'sans-book': ['UniSansBook', 'sans-serif'],
            },
        },
    },
    corePlugins: {
        preflight: false, // Keeps Tailwind from resetting HTML styles
        base: false,      // Prevents base layer from overriding other styles
        components: true, // Components remain available for utility classes
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.--body': {
                    '@apply tracking-[-0.01em] text-[1.1rem]': '', // font-sans
                },
                '.--body-bold': {
                    '@apply text-[1.1rem]': '', //font-sans-bold
                },
                '.--title': {
                    '@apply text-[1.2rem] sm:text-[2rem]': '', //font-sans-bold
                },
            });
        },
    ],
}
