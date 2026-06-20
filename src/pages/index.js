import Layout from '../components/Layout'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
	const router = useRouter()
	const [htmlContent, setHtmlContent] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const loadHtml = async () => {
			try {
				const response = await fetch('/index.html')
				const html = await response.text()
				setHtmlContent(html)
			} catch (error) {
				console.error('Error loading HTML:', error)
			} finally {
				setIsLoading(false)
			}
		}

		loadHtml()
	}, [])

	useEffect(() => {
		if (!htmlContent || isLoading) return

		const root = document.getElementById('framer-root')
		if (!root) return

		root.innerHTML = htmlContent

		root.querySelectorAll('script').forEach((oldScript) => {
			const script = document.createElement('script')

			Array.from(oldScript.attributes).forEach((attr) => {
				script.setAttribute(attr.name, attr.value)
			})

			script.textContent = oldScript.textContent

			oldScript.parentNode?.replaceChild(script, oldScript)
		})
	}, [htmlContent, isLoading])

	return (
		<Layout>
			<AnimatePresence mode='wait' initial={false}>
				<motion.div
					key={router.route}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.35, ease: 'easeOut' }}>
					{isLoading ? (
						<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<p>Loading...</p>
						</div>
					) : (
						<div id='framer-root' />
					)}
				</motion.div>
			</AnimatePresence>
		</Layout>
	)
}
