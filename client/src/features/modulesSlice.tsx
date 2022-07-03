import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
  };

const modulesSlice = createSlice({
  name: 'modules',
  initialState, 
  reducers: {
    addModules: (state, {payload}) => {
      state = payload
    },
   
  }
})

  export const { addModules } = modulesSlice.actions
  export const getAllModules = (state: any) => state.modules
  
  export default modulesSlice.reducer;