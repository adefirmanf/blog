/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	fontSize: {
		'2xs': '0.625rem',
		xs: '0.75rem',
		sm: '0.8rem',
		base: '1rem',
		xl: '1.25rem',
		'2xl': '1.563rem',
		'3xl': '1.953rem',
		'4xl': '2.441rem',
		'5xl': '3.052rem',
		},
	screens: {
		...defaultTheme.screens,
		'xs': '368px',
		},
		fontFamily: {
			'sans': ['YakuHanJP', "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", 'Meiryo']
		},
		extend: {
			colors: {
				'dark' : "#454647",
				'primary': '#FF5676'
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
				"marquee-y": 'marquee2 25s linear infinite',
			  },
			  
			  keyframes: {
				marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
				  '0%': { transform: 'translateX(100%)' },
				  '100%': { transform: 'translateX(0%)' },
				},
				"marquee-y": {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(-100%)' }
				  },
				
			  },
		},
	},
	plugins: [],
}
