import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import useGetEvents from '../hooks/useGetEvents';

const initialState = {
    data: []
  };

const eventsSlice = createSlice({
  name: 'events',
  initialState, 
  reducers: {
    setEventsData : (state, {payload}) => {
      state.data = payload;
    },
    addEvents: (state, {payload}) => {
      state.data = payload
    },
  }
})

  export const { setEventsData, addEvents } = eventsSlice.actions
  export const getAllEvents = (state: any) => state.data
  
  
  export default eventsSlice.reducer;