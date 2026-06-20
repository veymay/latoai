export default function Layout({ children }) {
	return (
		<div className='site-root'>
			<main className='site-main'>{children}</main>
		</div>
	)
}
