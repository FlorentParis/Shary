// REDUX STORE
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import users from './usersSlice'
import modules from './modulesSlice'
import events from './eventsSlice'

export const store = configureStore({
    reducer: {
        events: events,
        modules: modules,
        users: users,
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch