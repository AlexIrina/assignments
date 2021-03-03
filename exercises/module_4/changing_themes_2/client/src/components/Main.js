import React from 'react'
import asya from '../images/asya.jpeg'
import { ThemeConsumer } from '../context/ThemeContext'
export default function Main() {
	const lightText = '#fea82f'
	const darkText = '#ff2e00'

	return (
		<ThemeConsumer>
			{({ theme }) => (
				<div className={`${theme}-theme content`}>
					<h1>Amazing Article</h1>
					<small style={{ color: theme === 'light' ? lightText : darkText }}>
						Alex George
					</small>
					<p style={{ color: theme === 'light' ? lightText : darkText }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
						facilis natus, eum unde dolor cumque laudantium fugiat pariatur in
						dignissimos mollitia asperiores repellendus ab. Sit corrupti dolore,
						quasi delectus fuga harum rerum quaerat deserunt recusandae id
						repellendus minima incidunt repellat dolor facere voluptas
					</p>

					<h3>My Cat Asya</h3>
					<img src={asya} alt='asya' />
					<p style={{ color: theme === 'light' ? lightText : darkText }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
						quasi soluta perferendis ullam. Ea dolor consectetur harum dicta ad
						repellat temporibus iusto odio? Veniam odio distinctio id ipsam
						rerum porro in fuga earum! Dolores, ratione consequuntur. Ipsa
					</p>
				</div>
			)}
		</ThemeConsumer>
	)
}
