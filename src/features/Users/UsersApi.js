import API from "../../libs/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async() =>{
        try{
            const response = await API.get("/users");  
            return response.data;          
        } catch(e) {
            console.log(e);
        }
    }
)