import { AppDispatch } from "./../../store";
import { createAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IRecepie, IUser } from "../../../interfaces/interfaces";
import { nanoid } from "nanoid";


export const loginUser = createAction(
  "auth/loginUser",
  (email, password) => {
    console.log("all done!")
    return {payload: {email, password}}
  }
);
export const logoutUser = createAction("auth/logoutUser");
export const registerUser = createAction(
  "auth/registerUser",
  (username, email, password) => {
    return { payload: { username, email, password } };
  }
);
export const addRecepie = createAction(
  "auth/addRecepi",
  (img, title, description, ingridients) => {
    return { payload: { img, title, description, ingridients } };
  }
);
export const loadFromLocal = createAction("auth/loadFromLocal", () => {
  return { payload: {} };
});
export const addFavoriteRec = createAction(
  "auth/addFavoriteRec",
  (id, recipeId) => {
    console.log("actionAdd");
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
export const loginUserLogic = (email: string, password: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const user = state.listOfUsers.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (!user) {
      return
    } else if (user.password !== password) {
      return
    } else {
      dispatch(loginUser(user, user.password))
    }
  };
};

export const registerUserLogic = (username:string, email:string, password:string) =>{
  return async (dispatch: AppDispatch,getState: () => RootState) => {
    const state = getState();
    const registerNewEmail = state.listOfUsers.find(
      (newUser) => newUser.email.toLocaleLowerCase() !== email.toLowerCase()
    );

    if (!registerNewEmail) return;
    let id = "";
    do {
      id = nanoid();
    } while (state.listOfUsers.find((u) => u.id === id));

    const userDto: IUser = {
      id,
      username,
      password,
      email,
      favorite: [],
      type: "client",
    };
    dispatch(registerUser(userDto.username,userDto.email, userDto.password));
  }
}

export const addRecepieLogic = ( img:string, title:string, description:string, ingridients:string[] ) =>{
  return async (dispatch: AppDispatch,getState: () => RootState) => {
    const state = getState()
    let id = "";
    do {
      id = nanoid();
    } while (state.listOfResepies.find((res) => res.id === id));
    const newRecepi: IRecepie = {
      id,
      img,
      title,
      description,
      ingridients,
    };
    dispatch(addRecepie(newRecepi.img, newRecepi.title, newRecepi.description, newRecepi.ingridients))
  }
}

export const addFavoriteRecLogic = (id:string, recipeId:string) => {
  return async (dispatch: AppDispatch,getState: () => RootState) => {
    const state = getState()
      const userIndex = state.listOfUsers.findIndex((u) => u.id === id);
      const findRecipe = state.listOfResepies.find((r) => r.id === recipeId);
      if (state.isAuthenticated !== null)
        if (
          userIndex >= 0 &&
          findRecipe &&
          !state.listOfUsers[userIndex].favorite.includes(findRecipe.id)
        ) {
          state.listOfUsers[userIndex].favorite.push(recipeId);
          state.isAuthenticated.favorite.push(recipeId);
        }
  }
}


