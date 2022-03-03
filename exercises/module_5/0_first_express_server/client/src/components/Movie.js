import { useState } from 'react'
import AddMovieForm from './AddMovieForm'
export default function Movie({ title, genre, _id, deleteMovie, editMovie }) {
	console.log('re-rendered movie', title, genre, _id)
	//! view movie data or the edit form depending on the value of the toggle boolean
	const [editToggle, setEditToggle] = useState(false)

	return (
		<div className='movie'>
			{!editToggle ? (
				<>
					<h1>Title:{title}</h1>
					<p>Genre:{genre}</p>
					<button className='btn ' onClick={() => deleteMovie(_id)}>
						Delete Movie
					</button>
					{/* toggle to show the form  */}
					<button
						className='btn '
						onClick={() => setEditToggle(prevToggle => !prevToggle)}
					>
						Edit Movie
					</button>
				</>
			) : (
				<>
					{/* adds form to each movie with the title and genre of the movie so
					user can edit it */}
					<AddMovieForm
						title={title}
						genre={genre}
						_id={_id}
						setToggle={setEditToggle}
						// btn text changes depending on state
						btnText={'Submit the edit'}
						submit={editMovie}
					/>
					{/*  if the user decides to close form without editing it */}
					{/* <button
						className='btn alert-danger'
						onClick={() => setEditToggle(prevToggle => !prevToggle)}
					>
						Close
					</button> */}
				</>
			)}
		</div>
	)
}
