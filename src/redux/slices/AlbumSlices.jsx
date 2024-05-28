import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    albums:[]
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllAlbums = createAsyncThunk("getAllAlbums",async() => {
    const response = await axios.get(`${BASE_URL}/albums`);
    return response.data;
})

export const albumSlices = createSlice({
    name: 'album',
    initialState,
    reducers: {
      
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllAlbums.fulfilled,(state,action) => {
            state.albums = action.payload;
        })
    }
  });

export const {} = albumSlices.actions;
export default albumSlices.reducer