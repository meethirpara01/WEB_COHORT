import { configureStore } from '@reduxjs/toolkit'
import { use } from 'react'
import { userSlice } from './userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});