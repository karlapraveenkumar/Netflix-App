import { useEffect, useState} from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {

  const [videourl, setVideoUrl] = useState(null);

  const getMovieVideos = async()=>{

    
    const data = await fetch("https://api.themoviedb.org/3/movie/" +movieId+ "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();

    const filteredData = json.results?.filter((video) => video.type === "Trailer" );


    const trailer = filteredData?.length ? filteredData[0] : json?.results[0];
    //dispatch(addTrailerVideo(trailer));

    setVideoUrl("https://www.youtube.com/embed/"+trailer?.key+ "?&autoplay=1&mute=1");
   
  };

  useEffect(()=>{
    getMovieVideos()
  },[])
  return videourl;

}

export default useMovieTrailer;