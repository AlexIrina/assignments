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
			// error from the servers middleware
			.catch(err => console.log(err.response.data.errorMessage))
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
			.delete(`/movies/${movieId}`)
			.then(res => {
				setMovies(prevMovies =>
					prevMovies.filter(movie => movie._id !== movieId)
				)
			})
			.catch(err => console.error(err))
	}

	const updateMovie = (updates, movieId) => {
		axios
			.put(`/movies/${movieId}`, updates)
			.then(res => {
				setMovies(prevMovies =>
					// return movie as it is if it wasn't updated else return the updated movie res.data
					prevMovies.map(movie => (movie._id !== movieId ? movie : res.data))
				)
			})
			.catch(err => console.error(err))
	}
	const handleFilter = e => {
		if (e.target.value === 'reset') {
			getAllMovies()
		} else {
			axios
				.get(`movies/search/genre?genre=${e.target.value}`)
				.then(res => setMovies(res.data))
				.catch(err => console.error(err))
		}
	}

	useEffect(() => {
		getAllMovies()
	}, [])

	return (
		<div className='movie-container'>
			<AddMovieForm submit={addMovie} btnText='Add Movie' />
			<div style={{ textAlign: 'center' }}>
				<h4>Filter by Genre</h4>

				<select onChange={handleFilter} className='filter-form'>
					<option value='reset'>All Movies</option>
					<option value='action'>Action</option>
					<option value='fantasy'>Fantasy</option>
					<option value='horror'>Horror</option>
				</select>
			</div>

			{movies.map(movie => (
				<Movie
					{...movie}
					key={movie.title}
					deleteMovie={deleteMovie}
					updateMovie={updateMovie}
				/>
			))}
		</div>
	)
}
