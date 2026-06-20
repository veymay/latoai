import Layout from '../components/Layout'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		// Load Framer HTML only on home page
		if (router.pathname === '/') {
			const loadFramerHtml = async () => {
				try {
					const response = await fetch('/index.html')
					const html = await response.text()
					const root = document.getElementById('framer-root')
					if (root) {
						root.innerHTML = html
						root.querySelectorAll('script').forEach((oldScript) => {
							const script = document.createElement('script')
							Array.from(oldScript.attributes).forEach((attr) => {
								script.setAttribute(attr.name, attr.value)
							})
							script.textContent = oldScript.textContent
							oldScript.parentNode?.replaceChild(script, oldScript)
						})
					}
				} catch (error) {
					console.error('Error loading Framer HTML:', error)
				}
			}
			loadFramerHtml()
		}
	}, [router.pathname])

	return (
		<Layout>
			<AnimatePresence mode='wait' initial={false}>
				<motion.div
					key={router.route}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.35, ease: 'easeOut' }}>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	)
}
