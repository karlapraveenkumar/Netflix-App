import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTrailerId } from '../utils/gptSlice';

const MovieCard = ({poster_path, id}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //console.log(id);

  if(!poster_path) return null;  //Home work do any separate card if you want

  const handleMovieClick = ()=>{
    dispatch(addTrailerId(id))
    navigate('/watch');
  }
  return (
    <div className='w-36 md:w-44 pr-4 cursor-pointer'>
      <img src={IMG_CDN + poster_path} alt='Moive Card' onClick={handleMovieClick}/>
    </div>
  )
}

export default MovieCard