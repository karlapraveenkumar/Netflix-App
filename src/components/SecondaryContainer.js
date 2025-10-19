import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);


  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-56 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies = {movies.NowPlayingMovies} />
        <MovieList title={"TopRated"} movies = {movies.TopRated} />
        <MovieList title={"Popular"} movies = {movies.Popular} />
        <MovieList title={"Upcoming"} movies = {movies.Upcoming} />
        <MovieList title={"Hindi Movies"} movies = {movies.Checking}/>
      </div>

    </div>
  )
}

export default SecondaryContainer