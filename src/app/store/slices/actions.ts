import { AppDispatch } from "./../../store";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IRecepie, IUser } from "../../../interfaces/interfaces";
import { nanoid } from "nanoid";

export const loginUserSuccess = createAction<IUser | undefined>(
  "auth/loginUserSuccess"
);
export const loginUserFailure = createAction<string | undefined>(
  "auth/loginUserFailure"
);

export const logoutUser = createAction("auth/logoutUser");
export const registerUser = createAction("auth/registerUser", (userDto) => {
  console.log("reg");
  return { payload: userDto };
});
export const addRecepie = createAction(
  "auth/addRecepi",
  (title, img, description, ingredients) => {
    return { payload: { title, img, description, ingredients } };
  }
);
export const addRecepieToMyRecipePage = createAction(
  "auth/addRecepieToMyRecipePage",
  (title, img, description, ingredients) => {
    return { payload: { title, img, description, ingredients } };
  }
);

export const loadFromLocal = createAction("auth/loadFromLocal", () => {
  return { payload: {} };
});
export const addFavoriteRec = createAction(
  "auth/addFavoriteRec",
  (id, recipeId) => {
    console.log("added");
    return { payload: { id, recipeId } };
  }
);
export const deleteFavoriteRec = createAction(
  "auth/deleteFavoriteRec",
  (id, recipeId) => {
    console.log("actionDel");
    return { payload: { id, recipeId } };
  }
);

//Action logic

export const loginUserlogic = (email: string, password: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState(); // Cast getState() to RootState
    const user = state.listOfUsers.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    console.log(user);
    if (!user) {
      dispatch(loginUserFailure()); // Throw an error for handling in the "rejected" action
    } else if (user.password !== password) {
      dispatch(loginUserFailure()); // Throw an error for handling in the "rejected" action
    } else {
      dispatch(loginUserSuccess(user)); // Return the user data when the login is successful
    }
    return user;
  };
};

export const registerUserLogic = (
  username: string,
  email: string,
  password: string
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const registerNewEmail = state.listOfUsers.find(
      (newUser) => newUser.email.toLowerCase() !== email.toLowerCase()
    );

    if (!registerNewEmail) return;

    let id = "";
    do {
      id = nanoid();
    } while (state.listOfUsers.find((u) => u.id === id));

    const userDto: IUser = {
      id,
      username: username,
      password: password,
      email: email,
      favorite: [],
      myRecipe: [],
      type: "client",
    };
    console.log(userDto);
    dispatch(registerUser(userDto));
  };
};

// export const addRecepieLogic = (
//   img: string,
//   title: string,
//   description: string,
//   ingredients: string[]
// ) => {
//   return async (dispatch: AppDispatch, getState: () => RootState) => {
//     const state = getState();
//     let id = "";
//     do {
//       id = nanoid();
//     } while (state.listOfResepies.find((res) => res.id === id));
//     const newRecepi: IRecepie = {
//       id,
//       img: img,
//       title: title,
//       description: description,
//       ingredients: ingredients,
//     };
//     dispatch(
//       addRecepie(
//         newRecepi.img,
//         newRecepi.title,
//         newRecepi.description,
//         newRecepi.ingredients
//       )
//     );
//     console.log(newRecepi)
//   };
// };

export const addFavoriteRecLogic = (id: string, recipeId: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const userIndex = state.listOfUsers.findIndex((u) => u.id === id);
    const findRecipe = state.listOfResepies.find((r) => r.id === recipeId);
    if (state.isAuthenticated !== null) {
      if (
        userIndex >= 0 &&
        findRecipe &&
        !state.listOfUsers[userIndex].favorite.includes(findRecipe.id)
      ) {
        console.log("ses added");
        dispatch(addFavoriteRec(id, recipeId));
      }
    }
  };
};

export const deleteFavoriteRecLogic = (id: string, recipeId: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const userIndex = state.listOfUsers.findIndex((u) => u.id === id);
    const recipeIndex = state.listOfResepies.findIndex(
      (r) => r.id === recipeId
    );
    if (state.isAuthenticated !== null)
      if (
        userIndex >= 0 &&
        recipeIndex >= 0 &&
        state.listOfUsers[userIndex].favorite.includes(recipeId)
      ) {
        console.log("deleted");
        dispatch(deleteFavoriteRec(id, recipeId));
      }
  };
};
