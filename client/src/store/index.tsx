// REDUX STORE
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import usersSlice from '../features/usersSlice';
import modulesSlice from '../features/modulesSlice';
import eventsSlice from '../features/eventsSlice';
import currentEventSlice from '../features/currentEventSlice';


export const store = configureStore({
    reducer: {
        events: eventsSlice,
        modules: modulesSlice,
        users: usersSlice,
        targetEvent: currentEventSlice 
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>