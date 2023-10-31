import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name : 'home',
    initialState : {
        url : {},
        genres : {}
    },
    reducers : {
        getApiConfigurations : (state,action) => {
            state.url = action.payload
        },
        getGenres : (state,action) => {
            state.genres = action.payload
        },
    }
});

export const homeReducer = homeSlice.reducer;
export const {getApiConfigurations,getGenres} = homeSlice.actions;