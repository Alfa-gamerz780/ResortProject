import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    quarries: [],
    loading: false,
    error: null,
};

export const addQuarry = createAsyncThunk(
    "quarry/addQuarry",

    async (data, { rejectedWithValue }) => {
        try {

            const response = await axios.post(
                "http://localhost:3000/api/quarry/add",
                data
            );

            return response.data.data;

        } catch (error) {
            return rejectedWithValue(
                error.response?.data?.message || "Something Went Wrong"
            );
        }
    }
);

const quarrySlice = createSlice({
    name: "quarry",
    initialState,
    reducers:{},

    extraReducers: (builder) =>{
        builder
            .addCase(addQuarry.pending, (state)=>{
                state.loading = true;
            })

            .addCase(addQuarry.fulfilled, (state , action)=>{
                state.loading = false;

                state.quarries.push(action.payload);
            })

            .addCase(addQuarry.rejected, (state, action) =>{
                state.loading = false;

                state.error = action.payload;
            })
    }
})

export default quarrySlice.reducer;