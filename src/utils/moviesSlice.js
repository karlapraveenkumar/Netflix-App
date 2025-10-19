import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        NowPlayingMovies : null,
        trailerVideo : null,
        Popular : null,
        TopRated : null,
        Upcoming : null,
        Checking : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action)=>{
            state.NowPlayingMovies = action.payload;
        },
        
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },

        addPopularMovies : (state, action) => {
                state.Popular = action.payload;
        },

        addTopRatedMovies : (state, action) => {
            state.TopRated = action.payload;
        },

        addUpcomingMovies : (state, action) => {
            state.Upcoming = action.payload;
        },

        addCheckingTvList : (state, action) => {
            state.Checking = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addCheckingTvList} = moviesSlice.actions;
export default moviesSlice.reducer;