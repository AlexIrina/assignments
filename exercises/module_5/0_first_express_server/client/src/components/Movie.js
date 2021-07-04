import React from 'react'

export default function Movie({ title, genre }) {
	return (
		<div className='movie'>
			<h1>{title}</h1>
			<p>{genre}</p>
		</div>
	)
}
