import React, { useState } from 'react'

export const PostForm = ({ addPost }) => {
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

	const handleSubmit = e => {
		e.preventDefault()
		addPost()
	}

	return (
		<form onChange={handleChange}>
			PostForm Component
			<button onClick={handleSubmit}>Add Post</button>
		</form>
	)
}
