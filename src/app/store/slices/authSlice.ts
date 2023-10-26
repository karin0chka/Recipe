import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IInitialStore, IRecepie } from "../../../interfaces/interfaces";

const initialState: IInitialStore = {
  listOfUsers: [
    {
      id: nanoid(),
      username: "testing",
      password: "testing",
      email: "testing",
      favorite: [],
      myRecipe: [],
      type: "client",
    },
  ],
  isAuthenticated: null,
  listOfResepies: [
    {
      id: nanoid(),
      title: "Spaghetti bolognese",
      img: "https://food-images.files.bbci.co.uk/food/recipes/easy_spaghetti_bolognese_93639_16x9.jpg",
      description:
        "Spaghetti bolognese consists of spaghetti (long strings of pasta) with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy.",
      ingredients: [
        "1 tablespoon olive oil",
        "1 pound lean ground beef",
        "½ teaspoon salt",
        "½ teaspoon black pepper",
        "1 onion diced",
        "2 garlic cloves minced",
        "1 teaspoon oregano",
        "1 teaspoon basil",
        "½ teaspoon crushed red pepper",
        "2 15-ounce cans crushed tomatoes",
        "2 tablespoons tomato paste",
        "16 ounces Spaghetti or penne pasta for serving",
        "Fresh basil for serving",
      ],
    },
    {
      id: nanoid(),
      title: "Borscht with Buttermilk and Grated Cucumber",
      img: "https://www.foodandwine.com/thmb/QJDtINY0W2okaAeIxyrBGa00gYQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Borscht-with-Buttermilk-and-Grated-Cucumber-FT-RECIPE0822-2000-15c400a9033a4e58bfbc4dfbb8ab0bd7.jpg",
      description:
        "Packed with fresh summer herbs, this chilled beet soup is bright, earthy, and doesn't require turning on your stove. Grated beets are quickly marinated in a pickle juice brine to mellow their earthiness before they are stirred together with grated cucumber and buttermilk for a crisp, cooling bite. The topping of quartered hard-cooked eggs, generous dollops of sour cream, and fresh herbs add textural interest, color, and heft as they help make each bowl a satisfying meal",
      ingredients: [
        "2 pounds peeled cooked red beets",
        "½ cup dill pickle juice",
        "2 tablespoons granulated sugar",
        "1 tablespoon plus 2 teaspoons kosher salt, divided, plus more to taste",
        "1 large cucumber (about 12 ounces), peeled, halved lengthwise, and seeded",
        "1 cup cold water",
        "½ cup chopped scallions (from 4 large scallions), plus more for garnish",
        "¼ cup finely chopped fresh dill, plus more for garnish",
        "1 tablespoon fresh lemon juice (from 1 lemon)",
        "1 ½ teaspoons black pepper, plus more to taste",
        "4 cups buttermilk",
        "8 hard-cooked eggs, peeled and quartered lengthwise",
        "1 cup sour cream",
        "Chopped fresh herbs (such as chives or flat-leaf parsley), for serving",
      ],
    },
  ],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUserFailure: (state) => {
      console.log("dont login");
      state.isAuthenticated = null;
    },
    loginUserSuccess: (state, action) => {
      // console.log("login");
      state.isAuthenticated = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = null;
    },
    registerUser: (state, action) => {
      console.log("user is register", action.payload);
      state.listOfUsers.push(action.payload);
      state.isAuthenticated = action.payload;
      console.log(state);
    },
    addRecepieToTheHomePage: (state, action) => {
      const { title, img, description, ingredients } = action.payload;
      if(state.isAuthenticated !== null){
        let id = "";
        do {
          id = nanoid();
        } while (state.listOfResepies.find((res) => res.id === id));
        const newRecepi: IRecepie = {
          id,
          img,
          title,
          description,
          ingredients,
        };
        state.listOfResepies.push(newRecepi);
      }
    },
    addRecepieToMyRecipePage: (state, action) => {
      const { title, img, description, ingredients } = action.payload;
      if(state.isAuthenticated !== null){
        let id = "";
        do {
          id = nanoid();
        } while (state.isAuthenticated.myRecipe.find((res) => res.id === id));
        const newRecepi:IRecepie = {
          id,
          img,
          title,
          description,
          ingredients,
        };
        state.isAuthenticated.myRecipe.push(newRecepi);
        console.log(state.isAuthenticated.myRecipe)
      }
    },

    addFavoriteRec: (state, action) => {
      console.log("reducer added");
      const { id, recipeId } = action.payload;
      const userIndex = state.listOfUsers.findIndex((u) => u.id === id);
      if (state.isAuthenticated !== null && userIndex >= 0) {
        state.listOfUsers[userIndex].favorite.push(recipeId);
        state.isAuthenticated.favorite.push(recipeId);
      }
    },
    deleteFavoriteRec: (state, action) => {
      console.log("asd", action.payload);
      const { id, recipeId } = action.payload;
      const userIndex = state.listOfUsers.findIndex((u) => u.id === id);
      const recipeIndex = state.listOfResepies.findIndex(
        (r) => r.id === recipeId
      );
      const updatedFavorite = state.listOfUsers[userIndex].favorite.splice(
        recipeIndex,
        1
      );
      state.listOfUsers[userIndex].favorite = updatedFavorite;
      if (state.isAuthenticated)
        state.isAuthenticated.favorite = updatedFavorite;
    },
  },
});
export const {
  loginUserFailure,
  loginUserSuccess,
  registerUser,
  addRecepieToTheHomePage,
  addRecepieToMyRecipePage,
  addFavoriteRec,
  deleteFavoriteRec,
} = authSlice.actions;

export default authSlice.reducer;
