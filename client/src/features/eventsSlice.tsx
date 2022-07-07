import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import useGetEvents from '../hooks/useGetEvents';

const initialState = {
    data: [{
      place: {},
      notifications: {},
      alerts: {},
      modules: {},
      _id: "",
      userId: "",
      name: "",
      type: "",
      description: "",
      banniere: null,
      status: "",
      start: "",
      end: "",
      dresscode: "",
      contacts: {},
      participants: {},
    },]
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