import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { Background_image } from '../utils/constants'

const GptSearch = () => {

  return (
    <>
      <div className="fixed -z-10 ">
        <img className='h-screen object-cover md:w-screen' src={Background_image}
          alt="Background_image" />
      </div>

      <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestions/>
      </div>
    </>
  )
}


export default GptSearch