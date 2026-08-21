import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState ={
    rooms: [],
    loading: false,
    error: null,
};

export const getRoom = createAsyncThunk(
    "room/getRoom",

    async () => {
        const response = await axios.get(
            "http://localhost:3000/api/room/fetch"
        );

        return response.data.rooms || [];
    }
);


const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {},

    extraReducers: (builder) =>{
        builder 
            .addCase(getRoom.fulfilled, (state, action) =>{
                state.rooms = action.payload || [];
                state.loading = false;
                state.error = null;
            })
    },
});

export default roomSlice.reducer;