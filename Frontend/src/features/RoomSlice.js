import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState ={
    rooms: [],
    loading: false,
    error: null,
};

export const getRoom = createAsyncThunk(
    "room/getRoom",

    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/room/fetch"
            );

            return response.data.rooms || [];
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Can't Fetch Rooms"
            );
        }
    }
);


const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {},

    extraReducers: (builder) =>{
        builder
            .addCase(getRoom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getRoom.fulfilled, (state, action) =>{
                state.rooms = action.payload || [];
                state.loading = false;
                state.error = null;
            })

            .addCase(getRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default roomSlice.reducer;
