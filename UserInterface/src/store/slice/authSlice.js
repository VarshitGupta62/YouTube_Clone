import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    loading: false,
    error: null,
    accessToken: null,
    refreshToken: null,
    status: false,
};

export const register = createAsyncThunk('/api/v1/account/signup', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post('/api/v1/account/signup', userData);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const login = createAsyncThunk('/api/v1/account/login', async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.post('/api/v1/account/login', userData);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const logout = createAsyncThunk('/api/v1/account/logout', async (_, { rejectWithValue }) => {
    try {
        await axios.post('/api/v1/account/logout');
        return true;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.status = true;
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.status =  false;
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                return {
                    ...state,
                    status: false
                };
            })
            
            .addCase(logout.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
