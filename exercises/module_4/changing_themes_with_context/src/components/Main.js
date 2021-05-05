import React from 'react'
import { ThemeContextConsumer } from './themeContext'
import asya from '../image/asya.jpeg'
// import Button from './Button';

export default function Main() {
	return (
		<ThemeContextConsumer>
			{({ theme }) => (
				<div>
					<main className={`${theme}-theme`}>
						<img src={asya} alt='my cat' />
						<h1>Switch to {theme === 'dark' ? 'Light' : 'Dark'} theme!</h1>
					</main>
				</div>
			)}
		</ThemeContextConsumer>
	)
}
