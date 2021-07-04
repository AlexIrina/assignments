import Movie from './components/Movie'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function App() {
	// useState to save the movies
	const [movies, setMovies] = useState([])
	// useEffect for componentDidMount cycle
	useEffect(() => {
		// get movies from my server
		axios
			.get('/movies')
			.then(res => setMovies(res.data))
			.catch(err => console.log(err))
	}, [])
	return (
		<div className='movie-container'>
			{movies.map((movie, idx) => (
				<Movie key={idx} {...movie} />
			))}
		</div>
	)
}
