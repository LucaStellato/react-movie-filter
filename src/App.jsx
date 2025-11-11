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


  return (
    {
      movies.map((movie) => (
      
    ))
    }
  )

}