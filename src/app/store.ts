import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import registrationReducer from '../slices/regitrationSlice'

//file where all off my application state is stored

//combineRedusers - root reducer for combining multiple reducers
const store = configureStore({
    reducer: {
        auth: authReducer,
        registration:registrationReducer,
    }
})


// types for help TypeScript understand my store
//Infer the 'RootState` and `AppDispatch` types from the store
// type of entire Redux store
export type RootState = ReturnType<typeof store.getState>
//Inferred type:{auth:authReducer...}
//type of stores dispatch function
export type AppDispatch = typeof store.dispatch
export default store