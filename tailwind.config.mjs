import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		colors: {
  			light: {
  				'808080': '#808080',
  				'999999': '#999999',
  				EAEEFE: '#EAEEFE',
  				'7B7B7B': '#7B7B7B',
  				'010D3E': '010D3E',
  				F1F1F1: '#F1F1F1',
  				'6F6C90': '#6F6C90',
  				EFF0F6: '#EFF0F6',
  				BCBCBC: '#BCBCBC',
  				'183EC2': '#183EC2',
  				'833E15': '#833e15',
  				'gradient-f7cf68': '#f7cf68'
  			},
  			dark: {
  				'222222': '#222222',
  				'808080': '#808080',
  				'0d0d0d': '#0d0d0d',
  				'05020A': '#05020A',
  				'7A7A7A': '#7A7A7A',
  				BBBBBB: '#BBBBBB',
  				B48CDE: '#B48CDE',
  				'040404': '#040404'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			'10': 'calc(var(--radius) + 2px)',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			inter: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			dmSans: [
  				'var(--font-dm-sans)',
  				'sans-serif'
  			],
  			switzer: [
  				'var(--font-switzer)',
  				'sans-serif'
  			]
  		},
  		padding: {
  			'15px': '15px',
  			'10px': '10px'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		}
  	}
  },
  plugins: [animate],
};

export default config;
