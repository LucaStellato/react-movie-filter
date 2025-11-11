import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const [movies, setmovies] = useState([
    { id: 1, title: 'Inception', genre: 'Fantascienza' },
    { id: 2, title: 'Il Padrino', genre: 'Thriller' },
    { id: 3, title: 'Titanic', genre: 'Romantico' },
    { id: 4, title: 'Batman', genre: 'Azione' },
    { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
    { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
  ])
  const [selectGenre, setSelectedGenre] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)
  useEffect(() => {
    if (selectgenre === '') {
      setFilteredMovies(movies)
    } else {
      setFilteredMovies(movies.filter(movie => movie.genre === selectGenre))
    }
  }

  )

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>{movie.title}</p>
        </div>

      ))
      }
      <h2 style={{ textAlign: 'center' }}>Search the film</h2>

      <select value={selectGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value=''>Inserisci genere da cercare</option>
        <option value='Fantascienza'>Fantascienza</option>
        <option value='Thriller'>Thriller</option>
        <option value='Romantico'>Romantico</option>
        <option value='Azione'>Azione</option>
      </select>

    </>
  )

}