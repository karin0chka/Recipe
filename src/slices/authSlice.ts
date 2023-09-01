import { createSlice} from "@reduxjs/toolkit";

//interface - abstract type that tells the compiler which propertynames a giver object can have
interface AuthState {
  isAuthenticated: boolean;
}

//My initial state that user is not log in
const initialState: AuthState = {
  isAuthenticated: false,
};

//Authentication slise - manage authentication state(current data)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
