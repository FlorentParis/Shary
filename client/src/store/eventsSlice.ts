import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
    events: []
  };

const eventsSlice = createSlice({
  name: 'events',
  initialState, 
  reducers: {
    addEvents: (state, {payload}) => {
      state.events = payload
    },
   
  }
})

  export const { addEvents } = eventsSlice.actions
  export const getAllEvents = (state: any) => state.events
  
  
  export default eventsSlice.reducer;