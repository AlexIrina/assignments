export default function Movie({ title, genre, _id, deleteMovie }) {
	return (
		<div className='movie'>
			<h1>{title}</h1>
			<p>{genre}</p>
			<button className='btn' onClick={() => deleteMovie(_id)}>
				Delete Movie
			</button>
		</div>
	)
}
