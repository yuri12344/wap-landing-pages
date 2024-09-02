/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	corePlugins: {
		preflight: false,
		components: false,
		utilities: true,
	},
	plugins: [],
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
		"@/*": ["src/*"]
		}
	}
}
