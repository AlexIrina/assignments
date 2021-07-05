import { useState } from 'react'

export default function AddMovieForm(props) {
	const { submit, _id, btnText, title, genre } = props
	// sets the title and genre input to the ones in props
	const initInputs = {
		title: title || '',
		genre: genre || '',
	}
	const [inputs, setInputs] = useState(initInputs)

	const handleChange = e => {
		const { name, value } = e.target
		setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
	}

	// for POST and PUT
	// for POST it needs to send the inputs
	// for PUT/edit it needs to send inputs and an id
	const handleSubmit = e => {
		e.preventDefault()
		// ! post requests =>inputs is whatever the user typed in
		// !for put request the inputs and _id is needed to update the movie
		submit(inputs, _id)
		// reset inputs
		setInputs(initInputs)
	}

	return (
		<form className='form' onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				value={inputs.title}
				onChange={handleChange}
				placeholder='Title...'
			/>
			<input
				type='text'
				name='genre'
				value={inputs.genre}
				onChange={handleChange}
				placeholder='Genre...'
			/>

			<button className='btn '>{btnText}</button>
		</form>
	)
}
