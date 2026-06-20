import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>LATO AI | AI-Driven Business Process Automation &amp; Custom Software Solutions</title>
				<meta
					name='description'
					content="Transform your business with Lato AI's intelligent automation solutions. We offer AI-driven business process automation, custom software development, and document processing that save costs and boost efficiency by up to 110%."
				/>
				<meta property='og:type' content='website' />
				<meta property='og:title' content='LATO AI | AI-Driven Business Process Automation &amp; Custom Software Solutions' />
				<meta property='og:description' content="Transform your business with Lato AI's intelligent automation solutions." />
				<meta property='og:image' content='https://framerusercontent.com/images/Xf5yvKH7jba842oQIjXYxaGUkcE.png' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='LATO AI | AI-Driven Business Process Automation &amp; Custom Software Solutions' />
				<meta property='twitter:image' content='https://framerusercontent.com/images/Xf5yvKH7jba842oQIjXYxaGUkcE.png' />
				<script async src='https://www.googletagmanager.com/gtm.js?id=GTM-WXM245MZ'></script>
				<script async src='https://www.googletagmanager.com/gtag/js?id=G-75TG59FX4T'></script>
				<script>
					{`
						window.dataLayer = window.dataLayer || []
						function gtag() {
							window.dataLayer.push(arguments)
						}
						gtag('js', new Date())
						gtag('config', 'G-75TG59FX4T')
					`}
				</script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
