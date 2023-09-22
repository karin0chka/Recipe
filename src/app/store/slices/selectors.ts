import { createSelector } from '@reduxjs/toolkit';

// Select the entire auth state
const selectAuthState = (state) => state.auth;

// Create a selector to get the authenticated user
export const selectAuthenticatedUser = createSelector(
  selectAuthState,
  (auth) => auth.isAuthenticated
);

// Create a selector to get the list of recipes
export const selectListOfRecipes = createSelector(
  selectAuthState,
  (auth) => auth.listOfResepies
);
