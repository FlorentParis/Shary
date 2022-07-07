import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import useGetEvents from '../hooks/useGetEvents';

const initialState = {
    data: []
  };

const currentEventSlice = createSlice({
  name: 'currEvent',
  initialState, 
  reducers: {
    setCurrentEventData : (state, {payload}) => {
      state.data = payload;
    },
    addTargetEvent: (state, {payload}) => {
      state.data = payload
    },
  }
})

  export const { setCurrentEventData, addTargetEvent } = currentEventSlice.actions
  
  
  export default currentEventSlice.reducer;