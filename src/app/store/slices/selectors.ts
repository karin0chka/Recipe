import { createSelector } from "@reduxjs/toolkit";
import { IInitialStore } from "../../../interfaces/interfaces";

// Select the entire auth state
const selectAuthState = (state: IInitialStore) => state;

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
