import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
  };

const usersSlice = createSlice({
  name: 'users',
  initialState, 
  reducers: {
    addUsers: (state, {payload}) => {
      state = payload
    },
   
  }
})

  export const { addUsers } = usersSlice.actions
  export const getAllUsers = (state: any) => state.users
  
  export default usersSlice.reducer;