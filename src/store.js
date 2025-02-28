import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/Users/UsersSlice";
import postsReducer from "./features/Posts/PostsSlice";

export const store = configureStore({
    reducer : {
        'users' : usersReducer,
        'posts' : postsReducer,
    }
})