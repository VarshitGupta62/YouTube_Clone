import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice.js';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
