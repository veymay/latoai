import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		const loadHtml = async () => {
			const response = await fetch('/index.html')
			const html = await response.text()

			const root = document.getElementById('framer-root')

			root.innerHTML = html

			root.querySelectorAll('script').forEach((oldScript) => {
				const script = document.createElement('script')

				Array.from(oldScript.attributes).forEach((attr) => {
					script.setAttribute(attr.name, attr.value)
				})

				script.textContent = oldScript.textContent

				oldScript.parentNode.replaceChild(script, oldScript)
			})
		}

		loadHtml()
	}, [])

	return <div id='framer-root' />
}
