import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Team() {
	return (
		<>
			<Head>
				<title>Team — LatoAI</title>
			</Head>
			<motion.section
				className='section'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, ease: 'easeOut' }}>
				<div className='container section_top'>
					<h1 className='section_title'>Team</h1>
					<div className='service_card'>
						<p className='service_label'>Expert AI Collaborators</p>
						<p className='service_text'>A multi-disciplinary team of product, design, and automation specialists.</p>
					</div>
				</div>
			</motion.section>
		</>
	)
}
