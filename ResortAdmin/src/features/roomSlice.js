import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    rooms: [],
    loading: false,
    error: null,
};

export const addRoom = createAsyncThunk(
    "room/addRoom",

    async (data, { rejectWithValue }) => {

        try {
            const formData = new FormData();

            formData.append("roomName", data.roomName);
            formData.append("noOfBed", data.noOfBed);
            formData.append("noOfGuest", data.noOfGuest);
            formData.append("roomArea", data.roomArea);
            formData.append("roomDescription", data.roomDescription);
            formData.append("roomPrice", data.roomPrice);
            formData.append("nameOfBed", data.nameOfBed);
            formData.append("roomImage", data.roomImage[0]);

            const response = await axios.post(
                "http://localhost:3000/api/room/add",
                formData,
                { withCredentials: true }
            );

            return response.data.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message ||
                "Something Went Wrong"
            );
        }
    }
);

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
                error.response?.data?.message ||
                "Can't Fetch Room"
            );
        }
    }
);

export const deleteRoom = createAsyncThunk(
    "room/deleteRoom",

    async (id, { rejectWithValue }) => {

        try {
            const response = await fetch(
                `http://localhost:3000/api/room/delete/${id}`,
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

export const editRoom = createAsyncThunk(
    "room/editRoom",

    async ({ id, data }, { rejectWithValue }) => {
        try {
            const formData = new FormData();

            formData.append("roomName", data.roomName);
            formData.append("noOfBed", data.noOfBed);
            formData.append("noOfGuest", data.noOfGuest);
            formData.append("nameOfBed", data.nameOfBed);
            formData.append("roomArea", data.roomArea);
            formData.append("roomDescription", data.roomDescription);
            formData.append("roomPrice", data.roomPrice);

            if (data.roomImage?.[0]) {
                formData.append("roomImage", data.roomImage[0]);
            }

            const response = await axios.put(
                `http://localhost:3000/api/room/update/${id}`,
                formData,
                { withCredentials: true }
            );

            return response.data.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message ||
                "Something Went Wrong"
            );
        }
    }
)

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(addRoom.pending, (state) => {
                state.loading = true;
            })

            .addCase(addRoom.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.rooms.push(action.payload);
                }
            })

            .addCase(addRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getRoom.fulfilled, (state, action) => {
                state.rooms = action.payload || [];
                state.loading = false;
                state.error = null;
            })

            .addCase(deleteRoom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.loading = false;

                state.rooms = state.rooms.filter(
                    (rooms) => rooms._id !== action.payload.id
                );
            })

            .addCase(deleteRoom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default roomSlice.reducer