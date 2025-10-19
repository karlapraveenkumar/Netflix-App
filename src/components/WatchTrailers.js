import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import {useNavigate} from "react-router-dom";


const WatchTrailers = () => {

    const navigate = useNavigate();

    const movieId = useSelector(store => store.gpt.trailerId);
    //console.log(movieId);
    const videoUrl = useMovieTrailer(movieId);

    const handleTrailerPage = ()=>{
        navigate("/browse")
    }

    return (

        <div>
                <button
                    className='absolute z-50 py-2 px-4 mx-4 my-2 mt-16 bg-purple-800 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ring-offset-2'
                    onClick={handleTrailerPage}
                >
                    Home
                </button>


                <iframe
                    className='absolute w-screen h-full'
                    //src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&mute=1"}
                    src={videoUrl}
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
            
        </div>
    )
}

export default WatchTrailers