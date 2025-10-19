import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    trailerId : null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    addTrailerId : (state, action)=>{
      state.trailerId = action.payload;
    }
  },
});

export const { toggleGptSearchView, addGptMovieResult, addTrailerId } = gptSlice.actions;

export default gptSlice.reducer;