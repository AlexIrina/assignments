import { useState } from 'react'
import AddMovieForm from './AddMovieForm'

export default function Movie({
	title,
	genre,
	_id,
	deleteMovie,
	updateMovie,
	releaseYear,
}) {
	const [editToggle, setEditToggle] = useState(false)

	const handleSubmit = (inputs, _id) => {
		setEditToggle(false)
		updateMovie(inputs, _id)
	}

	return (
		<div className='movie'>
			{!editToggle ? (
				<>
					<h2>Title: {title}</h2>
					<p>Genre: {genre}</p>
					<p>ReleaseYear: {releaseYear}</p>
					<button onClick={() => deleteMovie(_id)} className='btn delete-btn'>
						Delete
					</button>
					<button
						className='edit-btn'
						onClick={() => setEditToggle(prevToggle => !prevToggle)}
					>
						Edit
					</button>
				</>
			) : (
				//todo: show form if edit is clicked
				<>
					<AddMovieForm
						title={title}
						genre={genre}
						releaseYear={releaseYear}
						_id={_id}
						submit={handleSubmit}
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
