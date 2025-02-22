import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/Users/UsersSlice";

export const store = configureStore({
    reducer : {
        'users' : usersReducer,
    }
})