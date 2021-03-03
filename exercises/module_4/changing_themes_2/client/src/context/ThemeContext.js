import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class ThemeProvider extends Component {
	state = {
		theme: 'light',
	}

	toggleTheme = () => {
		this.setState(prevState => {
			return {
				theme: prevState.theme === 'light' ? 'dark' : 'light',
			}
		})
	}

	// TODO: make it toggle
	showNav = () => {
		const container = document.querySelector('.container')
		container.classList.add('show-nav')
	}

	closeNav = () => {
		const container = document.querySelector('.container')
		container.classList.remove('show-nav')
	}

	render() {
		return (
			<div>
				<Provider
					value={{
						theme: this.state.theme,
						toggleTheme: this.toggleTheme,
						showNav: this.showNav,
						closeNav: this.closeNav,
					}}
				>
					{this.props.children}
				</Provider>
			</div>
		)
	}
}

export { ThemeProvider, Consumer as ThemeConsumer }
