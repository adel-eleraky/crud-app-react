/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./reducers/UsersReducer";

export  const store = configureStore({
    reducer: {
        users: UsersReducer
    }
})