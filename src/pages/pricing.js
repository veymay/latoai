import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Pricing() {
	return (
		<>
			<Head>
				<title>Pricing — LatoAI</title>
			</Head>
			<motion.section
				className='section section_dark'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, ease: 'easeOut' }}>
				<div className='container section_top'>
					<h1 className='section_title'>Pricing</h1>
					<div className='grid_two'>
						<article className='service_card'>
							<p className='service_label'>Starter</p>
							<p className='service_text'>Automation basics to get your team moving quickly.</p>
						</article>
						<article className='service_card'>
							<p className='service_label'>Growth</p>
							<p className='service_text'>Custom workflows, integrations, and automation at scale.</p>
						</article>
					</div>
				</div>
			</motion.section>
		</>
	)
}
