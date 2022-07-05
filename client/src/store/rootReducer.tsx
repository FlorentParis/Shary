import { combineReducers } from "@reduxjs/toolkit";
import eventsSlice from "../features/eventsSlice";
import modulesSlice from "../features/modulesSlice";
import userConnectedSlice from "../features/userConnectedSlice";
import usersSlice from "../features/usersSlice";

export const rootReducer = combineReducers({
    events: eventsSlice,
    modules: modulesSlice,
    users: usersSlice,
    userConnected: userConnectedSlice
})