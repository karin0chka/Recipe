import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { IInitialStore, IRecepie, IUser } from "../../../interfaces/interfaces";

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
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.listOfUsers.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
      );
      if (!user) {
        state.isAuthenticated = null;
        console.log("did not login");
      } else if (user.password !== password) {
        state.isAuthenticated = null;
        console.log("did not login");
      } else {
        state.isAuthenticated = action.payload;
        console.log("login");
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = null;
    },
    registerUser: (state, action) => {
      console.log("user is register");
      const { username, email, password } = action.payload;
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
      state.listOfUsers.push(userDto);
      state.isAuthenticated = action.payload;
    },
    addRecepieToTheHomePage: (state, action: PayloadAction<IRecepie>) => {
      if (state.isAuthenticated !== null) {
        let id = "";
        do {
          id = nanoid();
        } while (state.listOfResepies.find((res) => res.id === id));
        const newRecepi: IRecepie = {
          id,
          img: action.payload.img,
          title: action.payload.title,
          description: action.payload.description,
          ingredients: action.payload.ingredients,
        };
        state.listOfResepies.push(newRecepi);
      }
    },
    addRecepieToMyRecipePage: (state, action: PayloadAction<IRecepie>) => {
      console.log("recipeAddedToMyRecPage");
      if (state.isAuthenticated !== null) {
        const userIndex = state.listOfUsers.findIndex(
          (user) => user.id === state.isAuthenticated?.id
        );
        console.log(userIndex);

        if (userIndex > -1) {
          const id = nanoid();
          const newRecepi: IRecepie = {
            id,
            img: action.payload.img,
            title: action.payload.title,
            description: action.payload.description,
            ingredients: action.payload.ingredients,
          };

          state.listOfUsers[userIndex].myRecipe.push(newRecepi);
          console.log(state.listOfUsers[userIndex].myRecipe);
        }
      }
    },

    addFavoriteRec: (state, action) => {
      console.log("added");
      const { id, recipeId } = action.payload;
      const userIndex = state.listOfUsers.findIndex((u) => u.id === id);
      const findRecipe = state.listOfResepies.find((r) => r.id === recipeId);
      if (state.isAuthenticated !== null) {
        if (
          userIndex >= 0 &&
          findRecipe &&
          !state.listOfUsers[userIndex].favorite.includes(findRecipe.id)
        ) {
          state.listOfUsers[userIndex].favorite.push(recipeId);
          state.isAuthenticated.favorite.push(recipeId);
        }
      }
    },
    deleteFavoriteRec: (state, action) => {  
      console.log("deleted")
      const { id, recipeId } = action.payload;
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
          const updatedFavorite = state.listOfUsers[userIndex].favorite.splice(
            recipeIndex,
            1
          );
          state.listOfUsers[userIndex].favorite = updatedFavorite;
          state.isAuthenticated.favorite = updatedFavorite;
        }
    },
  },
});
export const {
  loginUser,
  registerUser,
  addRecepieToTheHomePage,
  addRecepieToMyRecipePage,
  addFavoriteRec,
  deleteFavoriteRec,
} = authSlice.actions;

export default authSlice.reducer;
