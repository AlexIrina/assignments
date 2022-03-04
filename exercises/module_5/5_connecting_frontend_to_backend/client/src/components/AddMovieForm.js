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
		//? add a new movie --POST
		addMovie(inputs)
		// clears inputs
		setInputs(initInputs)
	}
	return (
		<form onSubmit={handleSubmit} className='form'>
			<input
				type='text'
				name='title'
				value={inputs.title}
				onChange={handleChange}
				placeholder='enter title...'
			/>
			<input
				type='text'
				name='genre'
				value={inputs.genre}
				onChange={handleChange}
				placeholder='enter genre...'
			/>
			<button className='btn '>Add Movie</button>
		</form>
	)
}
