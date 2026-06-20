import Layout from '../components/Layout'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
	const router = useRouter()

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
