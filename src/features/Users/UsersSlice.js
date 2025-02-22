import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./UsersApi";

const initialState = {
    error : null,
    isLoading : false,
    users : []
}

export const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder 
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
})

export default UsersSlice.reducer;