import React from 'react';
import {persistStore, persistReducer} from "redux-persist";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import {combineReducers} from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, userName: "" };

const persistConfig = {
    key:"root",
    version:1,
    storage
}


const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.userName = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
        },

    }
});

const reducer = combineReducers({
    login : loginSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

const storeExp = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(storeExp);

export const loginActions = loginSlice.actions;

export const store = storeExp;