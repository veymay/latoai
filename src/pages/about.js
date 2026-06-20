import { motion } from 'framer-motion'

export default function About() {
	return (
		<motion.main
			style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.55, ease: 'easeOut' }}>
			<h1>About</h1>
			<p>Minimal pages-based routing example.</p>
		</motion.main>
	)
}
