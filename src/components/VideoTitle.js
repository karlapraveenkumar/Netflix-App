import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addTrailerId } from '../utils/gptSlice';


const VideoTitle = ({title,id, overview}) => {

  const [moreinfo, setMoreInfo] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirectToWatch = ()=>{

    dispatch(addTrailerId(id))
    navigate("/watch");
  }

  const handleMoreInfo = ()=>{
    setMoreInfo(!moreinfo);
  }


  return (
    <div className='absolute w-full aspect-video pt-[20%] px-6 md:px-12 text-white bg-gradient-to-r from-black'>
      <h1 className=' text-2xl md:text-5xl font-bold'>{title}</h1>
      {moreinfo && <p className='hidden md:inline-block py-6 text-sm w-1/4'>{overview}</p>}
      <div>
        <button onClick={handleRedirectToWatch}
          className='py-1 my-4 px-3 md:py-3 md:px-10 text-lg bg-white rounded-lg text-black font-bold hover:bg-opacity-70 focus:ring-2 focus:ring-red-500 ring-offset-2'
        >
          Play
        </button>

        <button 
          className='hidden md:inline-block p-3 px-10 text-lg bg-gray-500 bg-opacity-50 rounded-lg text-white mx-2 font-bold hover:bg-opacity-80 focus:ring-2 focus:ring-red-500 ring-offset-2'
          onClick={handleMoreInfo}
        >
          More Info
        </button>
        
      </div>
    </div>
  )
}

export default VideoTitle