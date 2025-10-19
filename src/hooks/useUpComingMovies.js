import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = ()=>{

    const dispatch = useDispatch();
    const upcomingmoives = useSelector(store => store.movies.Upcoming);

    const getUpComingMovies = async()=>{
      const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addUpcomingMovies(json.results));
  
    }
  
    useEffect(()=>{
      !upcomingmoives && getUpComingMovies();
    },[])

}

export default useUpComingMovies;