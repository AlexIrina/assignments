import { useState } from 'react'

export default function AddMovieForm({ addMovie }) {
	const initInputs = { title: '', genre: '' }
	const [inputs, setInputs] = useState(initInputs)

	const handleChange = e => {
		const { name, value } = e.target
		setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		// ! post request =>inputs is whatever the user typed in
		addMovie(inputs)
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

			<button>Add Movie</button>
		</form>
	)
}
