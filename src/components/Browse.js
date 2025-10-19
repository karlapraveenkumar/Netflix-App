import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMoives'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import useAddCheckingList from '../hooks/useAddCheckingList'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'



const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpComingMovies();
  useAddCheckingList();
  
  return (
    <div>
      <Header/>
      {
        showGptSearch ?
        <GptSearch/> :
        <>
          <MainContainer/>
          <SecondaryContainer/>          
        </>
      }

    </div>
  )
}

export default Browse