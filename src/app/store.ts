// reduxStore.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./store/slices/authSlice";
import thunk from "redux-thunk";
// import thunk from 'redux-thunk';

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage, // Add any blacklist or whitelist options if needed
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, authSlice);

// Configure the Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Create a persisted store
const persistor = persistStore(store);

export { store, persistor };

// Define the RootState type for the store
export type RootState = ReturnType<typeof store.getState>;
// Define the AppDispatch type for the store
export type AppDispatch = typeof store.dispatch;
