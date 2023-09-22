
import { createAction } from '@reduxjs/toolkit';

// Define the loginUser action creator
export const loginUser = createAction('auth/loginUser', (email, password) => {
  return { payload: { email, password } };
});
export const registerUser = createAction('auth/registerUser', (username, email, password) => {
  return { payload: { username, email, password } };
});
export const addRecepi = createAction('auth/addRecepi', ( img, title, description, ingridients) => {
  return { payload: { img, title, description, ingridients } };
});
export const loadFromLocal = createAction('auth/loadFromLocal', () => {
  console.log('action')
  return { payload: {} };
});



