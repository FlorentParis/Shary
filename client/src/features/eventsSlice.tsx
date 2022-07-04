import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import useGetEvents from '../hooks/useGetEvents';

const initialState = {
    events: []
  };

const eventsSlice = createSlice({
  name: 'events',
  initialState, 
  reducers: {
    setEventsData : (state, {payload}) => {
      state.events = payload;
    },
    addEvents: (state, {payload}) => {
      state.events = payload
    },
  }
})

  export const { setEventsData, addEvents } = eventsSlice.actions
  export const getAllEvents = (state: any) => state.events
  
  
  export default eventsSlice.reducer;