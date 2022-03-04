import { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
export default function App() {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		axios
			.get('/movies')
			.then(res => setMovies(res.data))
			.catch(err => console.error(err))
	}, [])

	return (
		<div>
			{movies.map(movie => (
				<Movie {...movie} key={movie.title} />
			))}
		</div>
	)
}
