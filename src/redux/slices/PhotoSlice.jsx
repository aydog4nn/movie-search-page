import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    imageURL:[]
}


const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllPhotos = createAsyncThunk("getAllPhotos",async() => {
    const response = await axios.get(`${BASE_URL}/photos?_limit=10`);
    console.log(response.data)
    return response.data;
})


export const photoSlice = createSlice({
    name: 'photo',  
    initialState,
    reducers: { 
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllPhotos.fulfilled,(state,action) => {
            state.imageURL = action.payload;
        })
    }
  });

export const {} = photoSlice.actions;
export default photoSlice.reducer;