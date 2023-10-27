import { createSelector } from "@reduxjs/toolkit";
import { IInitialStore } from "../../../interfaces/interfaces";

// Select the entire auth state
const selectAuthState = (state: IInitialStore) => state;

// Create a selector to get the authenticated user
export const selectAuthenticatedUser = createSelector(
  selectAuthState,
  (auth) => auth.isAuthenticated
);

export const selectlistOfUsers = createSelector(
  selectAuthState,
  (auth) => auth.listOfUsers
);


// Create a selector to get the list of recipes
export const selectListOfRecipes = createSelector(
  selectAuthState,
  (auth) => auth.listOfResepies
);

export const selectListOfUsersRecipes = createSelector(
  selectAuthState,
  (auth) => {
    const userIndex = auth.listOfUsers.findIndex(
      (user) => user.id === auth.isAuthenticated?.id
    );
    return auth.listOfUsers[userIndex].myRecipe;
  }
);
