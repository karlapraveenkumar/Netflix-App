import { useState } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import model from '../utils/geminiai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'
//import openai from '../utils/openai'



const GptSearchBar = () => {

  const dispatch = useDispatch();
  const langKey = useSelector(store=> store.config.lang);
  const movieNames = useSelector(store=> store.gpt.movieNames);


  const [searchText, setSearchText] = useState("");
  const handleChangeSearchInput = (event)=>{
    setSearchText(event?.target?.value);
  }


  const searchMoiveTMDB = async(moive)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
      +moive+
      "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }


  const handleGptSearchClick = async()=>{
  
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " 
      + searchText + 
      ". only give me names of 5 moives, comma seperated like the example result given ahead. Example result: Bahubali, Salar, RRR, Saaho, Ala Vainkuntapuram";

    const prompt = gptQuery;    

    const result = await model.generateContent(prompt)
    const response = await result.response;
    const text = response.text();

    if(!text){
      //show error handling page, home work
    }

    const gptMovies = text.split(",");
    //console.log(gptMovies);
    const promiseArray = gptMovies.map((moive) => searchMoiveTMDB(moive));
    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}));

  }

  const clearSuggestions = ()=>{
    dispatch(addGptMovieResult({movieNames:null, movieResults:null}));
    setSearchText('');
  }



  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
        <form 
          className='w-full md:w-1/2 grid grid-cols-12 bg-black' 
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" value={searchText}  onChange={handleChangeSearchInput} className='col-span-8 p-4 m-4' placeholder={lang[langKey].gptSearchPlaceholder} />

          { searchText === "" ? <button className='py-2 m-4 col-span-2 bg-gray-700 text-white rounded-lg'>{lang[langKey].search}</button>  : searchText && <button 
            className={'py-2 m-4 col-span-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:ring-2 focus:ring-red-600 ring-offset-2 ring-opacity-50'}
            onClick= { handleGptSearchClick}
          >
            { lang[langKey].search}
          </button>}

          {movieNames?.length ? <button onClick={clearSuggestions} className='py-2 m-4 col-span-2 bg-red-700 text-white rounded-lg hover:bg-red-800 focus:ring-2 focus:ring-red-600 ring-offset-2 ring-opacity-50'>Clear</button>
            : <button className='py-2 m-4 col-span-2 bg-gray-700 text-white rounded-lg'>Clear</button>}
          

        </form>
    </div>
  )
}

export default GptSearchBar