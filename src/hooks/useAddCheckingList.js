import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCheckingTvList } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddCheckingList = ()=>{

    const dispatch = useDispatch();
    const checkinglist = useSelector(store => store.movies.Checking);

    const getAddCheckingList = async()=>{
      //const data = await fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      //const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",API_OPTIONS);
      //https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=hi",
      const data = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=hi-IN&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2018&with_original_language=hi",API_OPTIONS);
      
      const json = await data.json();
      //console.log(json.results);
      dispatch(addCheckingTvList(json.results));
  
    }
  
    useEffect(()=>{
      !checkinglist && getAddCheckingList();
    },[])

}

export default useAddCheckingList;