import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    user: null,
    token: null,
    staff: [],
    isAuthenticated: false,
    loading: true,
    error: null
};

export const loginThunk = createAsyncThunk(
    "user/login",

    async (data, { rejectWithValue }) => {

        
        try {
  
            const response = await axios.post(
                "http://localhost:3000/api/admin/auth",
                data,
                {
                    withCredentials: true,
                    timeout: 5000
                }
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
                "http://localhost:3000/api/admin/logout",
                {},
                {
                    withCredentials: true,
                    timeout: 5000
                }
            );

            return response.data;

        } catch (error) {

            return rejectWithValue(
                error.response?.data?.message || "Logout Failed"
            );
            
        }
    }
);

export const getAdmin = createAsyncThunk(
    "user/staff",

    async(_, { rejectWithValue }) => {

        try {
            
            const response = await axios.get(
                "http://localhost:3000/api/admin/staff"
            );

            // console.log(response.data.staff);

            return response.data.staff || [];

        } catch (error) {
            
            return rejectWithValue(
                error.response?.data?.message || 
                "Can't get Staff details"
            );
        }
    }
);

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    
    async(_, thunkAPI) => {

        try {
            
            const response = await axios.get(
                "http://localhost:3000/api/admin/verify",
                {
                    withCredentials: true,
                    timeout: 5000
                }
            );


            

            return response.data;

        } catch (error) {
            
            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                "Not Authenticated"
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

            .addCase(getAdmin.pending, (state) => {
                state.loading = true;
            })

            .addCase(getAdmin.fulfilled, (state, action) =>{
                state.loading = false;
                state.staff = action.payload;
            })

            .addCase(getAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(checkAuth.pending, (state) => {
                state.loading = true;
            })

            .addCase(checkAuth.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })

            .addCase(checkAuth.rejected, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
    }
});

export default authSlice.reducer;