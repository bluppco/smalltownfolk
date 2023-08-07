/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  'karla': ['Karla', 'sans-serif'],
			  'clarendon': ["clarendon-text-pro", "serif"]
			},
		},
	},
	plugins: [],
}
