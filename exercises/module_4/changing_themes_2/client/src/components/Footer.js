import React from 'react'
import { ThemeConsumer } from '../context/ThemeContext'
export default function Footer() {
	return (
		<ThemeConsumer>
			{({ theme }) => <footer className={`${theme}-theme`}></footer>}
		</ThemeConsumer>
	)
}
