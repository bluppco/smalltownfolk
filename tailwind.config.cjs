/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  'karla': ['Karla', 'sans-serif'],
			  'clarendon': ["clarendon-text-pro", "serif"],
			  'system': ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
			},
			colors: {
				"primary": "#F0E15C"
			}
		}
	},
	plugins: [],
}
