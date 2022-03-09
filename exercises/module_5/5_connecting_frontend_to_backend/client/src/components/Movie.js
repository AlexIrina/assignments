import { useState } from 'react'
import AddMovieForm from './AddMovieForm'

export default function Movie({ title, genre, _id, deleteMovie, updateMovie }) {
	const [editToggle, setEditToggle] = useState(false)
	return (
		<div className='movie'>
			{!editToggle ? (
				<>
					<h2>Title: {title}</h2>
					<p>Genre: {genre}</p>
					<button onClick={() => deleteMovie(_id)} className='btn delete-btn'>
						Delete Movie
					</button>
					<button
						className='edit-btn'
						onClick={() => setEditToggle(prevToggle => !prevToggle)}
					>
						Edit Movie
					</button>
				</>
			) : (
				//show form if edit is clicked
				<>
					<AddMovieForm
						title={title}
						genre={genre}
						_id={_id}
						submit={updateMovie}
						btnText='Submit Changes'
					/>
					<button
						className='close-btn'
						onClick={() => setEditToggle(prevToggle => !prevToggle)}
					>
						Close
					</button>
				</>
			)}
		</div>
	)
}
