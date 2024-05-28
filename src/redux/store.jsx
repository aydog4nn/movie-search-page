import { configureStore } from '@reduxjs/toolkit'
import  userSlices  from './slices/UserSlices'
import  albumSlices  from './slices/AlbumSlices'
import photoSlice from './slices/PhotoSlice'

export const store = configureStore({
    reducer: {
        user: userSlices,
        album:albumSlices,
        photo:photoSlice
    },
  })

