import React from 'react'
import Navbar from './components/HiddenNav'
import Main from './components/Main'
import Footer from './components/Footer'
import Circle from './components/Circle'
import Button from './components/ToggleThemeButton'
// TODO wrap the display components with the ThemeConsumer

export default function App() {
	return (
		<>
			<Circle />
			<Main />
			<Navbar />
			<Footer />
			<Button />
		</>
	)
}
