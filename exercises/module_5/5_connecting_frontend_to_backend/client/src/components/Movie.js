import React from 'react'

export default function Movie({ title, genre, _id, deleteMovie }) {
	return (
		<div className='movie'>
			<h2>Title: {title}</h2>
			<p>Genre: {genre}</p>
			<button onClick={deleteMovie} className='btn '>
				Delete Movie
			</button>
		</div>
	)
}
