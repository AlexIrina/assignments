import React from 'react'
import { ThemeContextConsumer } from './themeContext'
import { darkHeaderStyles, lightHeaderStyles } from './themeStyles'

export default function Header() {
	return (
		<ThemeContextConsumer>
			{({ theme, isToggled, toggleMenu, toggleTheme }) => (
				<header
					className={`${theme}-theme`}
					style={theme === 'dark' ? darkHeaderStyles : lightHeaderStyles}
				>
					<h2>Home</h2>
					<h2>About</h2>
					<h2>Contact</h2>
					<h3 style={{ color: 'white' }} onClick={toggleMenu}>
						Switch Theme
						<br />
						<div style={{ display: isToggled ? 'none' : 'inline' }}>
							<p
								style={{ color: '#ed623b' }}
								onClick={e => toggleTheme('dark')}
							>
								Dark theme
							</p>
							<p
								style={{ color: 'yellow' }}
								onClick={e => toggleTheme('light')}
							>
								Light Theme
							</p>
						</div>
					</h3>
				</header>
			)}
		</ThemeContextConsumer>
	)
}
