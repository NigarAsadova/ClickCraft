import { createSlice } from "@reduxjs/toolkit";
import { getPost } from "./PostsApi";

const initialState = {
    error : null,
    isLaoding : false,
    posts : []
};

export const PostsSlice = createSlice({
    name : "posts",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state) =>{
                state.isLaoding = true;
                state.error = null;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.isLaoding = false;
                state.posts = action.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.isLaoding = false;
                state.error = action.payload;
            })
    }
})

export default PostsSlice.reducer;