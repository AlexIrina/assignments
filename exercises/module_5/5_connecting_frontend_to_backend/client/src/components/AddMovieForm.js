import { useEffect, useState } from 'react'

export default function AddMovieForm({
	submit,
	title,
	genre,
	btnText,
	_id,
	releaseYear,
}) {
	const initInputs = {
		title: title || '',
		genre: genre || '',
		releaseYear: releaseYear || '',
	}
	const [inputs, setInputs] = useState({})
	// show the inputs on edit
	useEffect(() => {
		setInputs({ title, genre, releaseYear })
	}, [title, genre, releaseYear])

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
			<input
				type='text'
				name='releaseYear'
				value={inputs.releaseYear}
				onChange={handleChange}
				placeholder='enter releaseYear...'
			/>

			<button className='btn '>{btnText}</button>
		</form>
	)
}
