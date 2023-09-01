import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'


//file where all off my application state is stored
const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store