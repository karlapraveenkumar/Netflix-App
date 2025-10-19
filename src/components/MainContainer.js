import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  
    const movies = useSelector((store) => store.movies?.NowPlayingMovies);

    if(!movies) return;

    const mainmoive = movies[9];
    //console.log(mainmoive);

    const {original_title, overview, id} = mainmoive;


    return (
        <div className='pt-[30%] bg-black md:pt-0'>
            <VideoTitle title={original_title} overview={overview} id={id}/>
            <VideoBackground movieId={id}/>
        </div>
      )

}

export default MainContainer;