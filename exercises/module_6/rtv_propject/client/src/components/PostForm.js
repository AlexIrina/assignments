import React, { useState } from 'react'

export default function PostForm({ addPost }) {
	const initInputs = {
		title: '',
		description: '',
		imgUrl: '',
		votes: {
			upVote: 0,
			downVote: 0,
		},
	}
	const [inputs, setInputs] = useState(initInputs)

	const handleChange = e => {
		const { name, value } = e.target
		setInputs(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	function handleSubmit(e) {
		e.preventDefault()
		addPost(inputs)
		setInputs(initInputs)
	}
	const { title, description, imgUrl } = inputs

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
				value={title}
				onChange={handleChange}
				placeholder='Title'
			/>
			<input
				type='text'
				name='description'
				value={description}
				onChange={handleChange}
				placeholder='Description'
			/>
			<input
				type='text'
				name='imgUrl'
				value={imgUrl}
				onChange={handleChange}
				placeholder='Image Url'
			/>
			<button type='submit'>Add Todo</button>
		</form>
	)
}
