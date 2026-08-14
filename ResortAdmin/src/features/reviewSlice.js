import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    reviews: [],
    loading: false,
    error: null,
};

export const getReview = createAsyncThunk(
    "review/getReview",

    async () => {
        const response = await axios.get(
            "http://localhost:3000/api/review/all",
        );

        return response.data;
    }
);

export const dropReview = createAsyncThunk(
    "review/dropReview",

    async (id , {rejectWithValue}) =>{
        try {
            const response = await fetch(
                `http://localhost:3000/api/review/remove/${id}`,
                {
                    method: "DELETE"
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
)

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getReview.fulfilled, (state, action) => {
                state.reviews = action.payload.reviews;
            })

            .addCase(dropReview.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(dropReview.fulfilled, (state, action) => {

                state.loading = false;

                state.reviews = state.reviews.filter(
                    (review) => review._id !== action.payload.id
                );

            })

            .addCase(dropReview.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload;

            });
    },
});

export default reviewSlice.reducer;