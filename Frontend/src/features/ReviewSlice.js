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

    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/review/all"
            );

            return response.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Something went wrong"
            );
        }
    }
);

const reviewSlice = createSlice({
    name: "review",

    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder

            // ADD REVIEW
            .addCase(addReview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(addReview.fulfilled, (state, action) => {
                state.loading = false;

                // action.payload is already the review object
                state.reviews.push(action.payload);
            })

            .addCase(addReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // GET REVIEWS
            .addCase(getReview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(getReview.fulfilled, (state, action) => {
                state.loading = false;

                state.reviews = action.payload.reviews;
            })

            .addCase(getReview.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default reviewSlice.reducer;