
import { createAction } from '@reduxjs/toolkit';

// Define the loginUser action creator
export const loginUser = createAction('auth/loginUser', (email, password) => {
  return { payload: { email, password } };
});
export const registerUser = createAction('auth/registerUser', (username, email, password) => {
  return { payload: { username, email, password } };
});
export const logoutUser = createAction('auth/logoutUser');
export const addRecepie = createAction('auth/addRecepi', ( img, title, description, ingridients) => {
  return { payload: { img, title, description, ingridients } };
});
export const loadFromLocal = createAction('auth/loadFromLocal', () => {
  return { payload: {} };
});
export const addFavoriteRec = createAction('auth/addFavoriteRec', (id, recipeId) => {
  console.log('actionAdd')
  return { payload: { id, recipeId } };
});
export const deleteFavoriteRec = createAction('auth/deleteFavoriteRec', (id, recipeId) => {
  console.log('actionDel')
  return { payload: { id, recipeId } };
});




