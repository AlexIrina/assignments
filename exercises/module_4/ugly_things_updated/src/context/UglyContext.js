import React, { Component } from 'react'
const UglyThingsContext = React.createContext()

class UglyContextProvider extends Component {
	state = {
		isLoading: false,
		isEditing: false,

		mainImage: {
			title: '',
			description: '',
			imgUrl: '',
		},

		uglyImages: [],
	}

	getImages = () => {
		const URL = `https://api.vschool.io/alex/thing/`
		const myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')

		let requestOptions = {
			method: 'GET',
			headers: myHeaders,
		}

		fetch(URL, requestOptions)
			.then(response => response.text())
			.then(data => {
				this.setState({
					uglyImages: [...JSON.parse(data)],
				})
			})
			.catch(error => error)
	}

	handleChange = e => {
		const { name, value } = e.target
		this.setState(prevState => ({
			mainImage: {
				...prevState.mainImage,
				[name]: value,
			},
		}))
	}

	handleSubmit = e => {
		e.preventDefault()

		const myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')

		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify({ ...this.state.mainImage }),
		}

		fetch('https://api.vschool.io/alex/thing/', requestOptions)
			.then(() => this.getImages())
			.catch(error => console.log('error', error))

		this.setState({
			mainImage: { title: '', description: '', imgUrl: '' },
		})
	}

	handleDelete = id => {
		// console.log(id);
		const myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')

		const requestOptions = {
			method: 'DELETE',
			headers: myHeaders,
		}

		fetch(`https://api.vschool.io/alex/thing/${id}`, requestOptions)
			.then(() => this.getImages())
			.catch(error => console.log('error', error))
	}

	handleEdit = id => {
		let editImage = this.state.uglyImages.find(item => item._id === id)
		console.log('Edit Image', editImage)

		this.setState({
			isEditing: true,
			mainImage: { ...editImage },
		})
	}

	updateImage = id => {
		const myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')

		let requestOptions = {
			method: 'PUT',
			headers: myHeaders,
			body: JSON.stringify({ ...this.state.mainImage }),
		}

		fetch(`https://api.vschool.io/alex/thing/${id}`, requestOptions)
			.then(() => this.getImages())
			.catch(error => console.log('error', error))

		this.setState({
			isEditing: false,
			mainImage: { title: '', description: '', imgUrl: '' },
		})
	}

	cancelSave = () => {
		// console.log('Cancel clicked')
		this.setState({
			isEditing: false,
			mainImage: { title: '', description: '', imgUrl: '' },
		})
	}

	render() {
		return (
			<UglyThingsContext.Provider
				value={{
					uglyImages: this.state.uglyImages,
					mainImage: this.state.mainImage,
					isEditing: this.state.isEditing,
					handleChange: this.handleChange,
					handleSubmit: this.handleSubmit,
					handleDelete: this.handleDelete,
					handleEdit: this.handleEdit,
					updateImage: this.updateImage,
					cancelSave: this.cancelSave,
					getImages: this.getImages,
				}}
			>
				{this.props.children}
			</UglyThingsContext.Provider>
		)
	}
}
export { UglyContextProvider as Provider, UglyThingsContext }
