import { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import AddMovieForm from './components/AddMovieForm'
export default function App() {
	const [movies, setMovies] = useState([])

	const getAllMovies = () => {
		axios
			.get('/movies')
			.then(res => setMovies(res.data))
			.catch(err => console.error(err))
	}

	const addMovie = newMovie => {
		axios
			.post('/movies', newMovie)
			.then(res => {
				setMovies(prevMovies => [...prevMovies, res.data])
			})
			.catch(err => console.error(err))
	}

	const deleteMovie = movieId => {
		axios
			.delete('/movies', movieId)
			.then(res => {
				setMovies(prevMovies => [...prevMovies, res.data])
			})
			.catch(err => console.error(err))
	}

	useEffect(() => {
		getAllMovies()
	}, [])

	return (
		<div className='movie-container'>
			<AddMovieForm addMovie={addMovie} />
			{movies.map((movie, key) => (
				<Movie {...movie} key={movie.title} deleteMovie={deleteMovie} />
			))}
		</div>
	)
}
