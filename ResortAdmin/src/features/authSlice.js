import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

export const loginThunk = createAsyncThunk(
    "user/login",

    async (data, { rejectWithValue }) => {

        
        try {
            const response = await axios.post(
                "http://localhost:3000/api/admin/auth",
                data
            );

            return response.data;

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message || "Login Failed"
            );

        }
    }
);

export const logoutThunk = createAsyncThunk(
    "user/logout",

    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/admin/logout"
            );

            return response.data;

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message || "Logout Failed"
            );
            
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
            })

            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false;

                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })

            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(logoutThunk.fulfilled, (state) =>{
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
            })
    }
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;