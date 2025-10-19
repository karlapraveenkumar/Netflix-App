import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

  //const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const videourl = useMovieTrailer(movieId);

  return (

    <div>
      <iframe
        className='w-full aspect-video'
        //src={"https://www.youtube.com/embed/"+trailer + "?&autoplay=1&mute=1"}
        src={videourl}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
  )
}

export default VideoBackground