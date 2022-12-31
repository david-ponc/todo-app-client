/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'es'
	},
	env: {
		URL_API: process.env.URL_API || 'https://evening-sands-17123.herokuapp.com'
	},
	async redirects() {
		return [
			{
				source: '/dona',
				destination: 'https://www.dona.ai/',
				permanent: true
			},
			{
				source: '/github',
				destination: 'https://github.com/davidp46',
				permanent: true
			}
		];
	},
	compiler: {
		styledComponents: {
			ssr: true
		}
	}
};

module.exports = nextConfig;
