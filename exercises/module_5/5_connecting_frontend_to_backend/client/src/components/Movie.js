import React from 'react'

export default function Movie({ title, genre, _id }) {
	return (
		<div>
			<h2>{title}</h2>
			<p>{genre}</p>
		</div>
	)
}
