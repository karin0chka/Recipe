import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'


interface IRegistrationSlice {
    isRegistered : boolean;
  }

const initialState: IRegistrationSlice = {
    isRegistered:false,
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registrationSuccess: (state) => {
            state.isRegistered = true;
        },
        registrationFailure: (state) => {
            state.isRegistered = false;
        },
    },

})

export const { registrationSuccess, registrationFailure } = registrationSlice.actions
export const registration = (state: RootState) => state.registration.isRegistered
export default registrationSlice.reducer