import { useState } from 'react'

export default function AddMovieForm({ submit, title, genre, btnText, _id }) {
	const initInputs = { title: title || '', genre: genre || '' }
	const [inputs, setInputs] = useState(initInputs)

	const handleChange = e => {
		const { name, value } = e.target
		setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		//? add a new movie --POST --PUT
		submit(inputs, _id)
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
			<button className='btn '>{btnText}</button>
		</form>
	)
}
