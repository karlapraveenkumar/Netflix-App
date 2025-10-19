import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";


const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store => store.gpt);

  if(!movieNames) return null;

  return (
    
    <div className='p-4 m-4 text-white bg-black bg-opacity-90'>
      <div>
        {movieNames.map((moivename, index) => (
          <MovieList 
            key={moivename} 
            title={moivename} 
            movies = {movieResults[index]}
          />)
        )}
      </div>
    </div>
  )
}

export default GptMovieSuggestions