import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    quarries: [],
    loading: false,
    error: null,
};

export const getQuarry = createAsyncThunk(
    "quarry/getQuarry",

    async (_, { rejectWithValue }) => {

        try {
            const response = await axios.get(
                "http://localhost:3000/api/quarry/get",
            );
            
            return response.data.quarry || [];
        } catch (error) {
            
            return rejectWithValue(
                error.response?.data?.message ||
                "Can't Find Quarries"
            );
        }

    }
);

export const deleteQuarry = createAsyncThunk(
    "quarry/deleteQuarry",

    async (id, { rejectWithValue }) => {

        try {
            const response = await fetch(
                `http://localhost:3000/api/quarry/delete/${id}`,
                {
                    method: "DELETE",
                    credentials: "include"
                }
            );

            const data = await response.json();

            if (!response.ok) {
                return rejectWithValue(data.message);
            }

            return {
                id,
                data
            };

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const quarrySlice = createSlice({
    name: "quarry",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getQuarry.pending, (state) =>{
                state.loading = true;
                state.error = null;
            })

            .addCase(getQuarry.fulfilled, (state, action) => {
                state.loading = false;
                state.quarries = action.payload
            })

            .addCase(getQuarry.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            .addCase(deleteQuarry.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(deleteQuarry.fulfilled, (state, action) => {
                state.loading = false;

                state.quarries = state.quarries.filter(
                    (quarries) => quarries._id !== action.payload.id
                );
            })

            .addCase(deleteQuarry.rejected, (state, action) =>{
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default quarrySlice.reducer;