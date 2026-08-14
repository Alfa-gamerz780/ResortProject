import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    reviews: [],
    loading: false,
    error: null,
};

export const addReview = createAsyncThunk(
    "review/addReview",

    async (data, { rejectWithValue }) => {

        console.log(data.username)
        try {
            const response = await axios.post(
                "http://localhost:3000/api/review/add",
                data
            );

            return response.data.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Something went wrong"
            );
        }
    }
);

export const getReview = createAsyncThunk(
    "review/getReview",

    async () => {
        const response = await axios.get(
            "http://localhost:3000/api/review/all",
        );

        return response.data;
    }
);

const reviewSlice = createSlice({
    name: "review",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(addReview.pending, (state) => {
                state.loading = true;
            })

            .addCase(addReview.fulfilled, (state, action) => {
                state.loading = false;

                state.reviews.push(action.payload);
            })

            .addCase(addReview.rejected, (state, action) => {
                state.loading = false;

                state.error = action.payload;
            })

            .addCase(getReview.fulfilled, (state, action) => {
                state.reviews = action.payload.reviews;
            })
    },
});

export default reviewSlice.reducer;