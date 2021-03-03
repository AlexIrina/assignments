import React from 'react'
import { ThemeConsumer } from '../context/ThemeContext'
export default function Button() {
	return (
		<ThemeConsumer>
			{({ toggleTheme, theme }) => (
				<button className={`${theme}-theme toggleBtn`} onClick={toggleTheme}>
					Switch to {theme === 'light' ? ' Dark' : ' Light'} Theme
				</button>
			)}
		</ThemeConsumer>
	)
}
