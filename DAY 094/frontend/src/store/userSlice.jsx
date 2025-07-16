import { createSlice } from '@reduxjs/toolkit'

const initialState = 
{
  data: []  // DATA - STATE
}

export const userSlice = createSlice({
  name: "user",  // NAME OG SLICE 
  initialState,  // DATA STORE IN SLICE
  reducers: {
    loaduser: (state, action) => {
      
      state.data = action.payload;
      console.log(action);
      
    }, // Syncronous Actions
  },
});

export const { loaduser } = userSlice.actions;

export default userSlice.reducer;

