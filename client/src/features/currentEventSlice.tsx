import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
    data: {
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
    },
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