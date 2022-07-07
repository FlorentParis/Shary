import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
  data: []
  };

const modulesSlice = createSlice({
  name: 'modules',
  initialState, 
  reducers: {
    setModulesData : (state, {payload}) => {
      state.data = payload;
    },
    addModules: (state, {payload}) => {
      state.data = payload
    },
   
  }
})

  export const { addModules, setModulesData } = modulesSlice.actions
  export const getAllModules = (state: any) => state.data
  
  export default modulesSlice.reducer;