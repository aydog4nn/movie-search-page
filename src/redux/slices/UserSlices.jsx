import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    users:[],
    selectedUser:[],
    
    
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = createAsyncThunk("getAllUsers",async() => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
})



export const userSlices = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setSelectedUser:(state,action) => {
        state.selectedUser = action.payload;
      }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUsers.fulfilled,(state,action) => {
            state.users = action.payload;
        })
    }
  });

export const {setSelectedUser} = userSlices.actions;
export default userSlices.reducer;