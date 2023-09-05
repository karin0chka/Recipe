import { createSlice} from "@reduxjs/toolkit";
import { RootState } from "../app/store";

//interface - abstract type that tells the compiler which propertynames a giver object can have
interface IAuthState {
  isAuthenticated: boolean;
}

//My initial state that user is not log in
const initialState: IAuthState = {
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
export const authentication = (state: RootState) => state.auth.isAuthenticated
export default authSlice.reducer;
