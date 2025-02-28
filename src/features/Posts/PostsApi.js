import API from "../../libs/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "posts/getPost",
    async() => {
        try{
            const response = await API.get("posts");
            return response.data;
        } catch(e){
            console.log(e);
        }
    }
)