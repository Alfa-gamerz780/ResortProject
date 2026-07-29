import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [
        {
            id: 1,
            title: "Review 1"
        },
        {
            id: 2,
            title: "Review 2"
        },
        {
            id: 3,
            title: "Review 3"
        },
        {
            id: 4,
            title: "Review 4"
        },
        {
            id: 5,
            title: "Review 5"
        },
        {
            id: 6,
            title: "Review 6"
        },
        {
            id: 7,
            title: "Review 7"
        },
    ],
};

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers:{},
});

export default reviewSlice.reducer;