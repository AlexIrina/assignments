import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends Component {
	state = {
		theme: 'dark',
		isToggled: true,
	}

	toggleMenu = () => {
		this.setState(prevState => {
			return {
				isToggled: !prevState.isToggled,
			}
		})
	}

	toggleTheme = theme => {
		this.setState(prevState => {
			return {
				theme: prevState.theme === 'light' ? 'dark' : 'light',
			}
		})
	}

	render() {
		return (
			<div>
				<Provider
					value={{
						...this.state,
						toggleTheme: this.toggleTheme,
						toggleMenu: this.toggleMenu,
					}}
				>
					{this.props.children}
				</Provider>
			</div>
		)
	}
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }
