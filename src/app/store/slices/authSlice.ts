import { RootState } from "./../../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialStore, IUser } from "../../../interfaces/interfaces";
import { IRecepie } from "../../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const initialState: IInitialStore = {
  listOfUsers: [
    {
      id: nanoid(),
      username: "testing",
      password: "testing",
      email: "testing",
      favorite: [],
      type: "client",
    },
  ],
  isAuthenticated: null,
  listOfResepies: [
    {
      id: nanoid(),
      img: "https://food-images.files.bbci.co.uk/food/recipes/easy_spaghetti_bolognese_93639_16x9.jpg",
      title: "Spaghetti bolognese",
      description:
        "Spaghetti bolognese consists of spaghetti (long strings of pasta) with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy.",
      ingridients: [
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
      img: "https://www.foodandwine.com/thmb/QJDtINY0W2okaAeIxyrBGa00gYQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Borscht-with-Buttermilk-and-Grated-Cucumber-FT-RECIPE0822-2000-15c400a9033a4e58bfbc4dfbb8ab0bd7.jpg",
      title: "Borscht with Buttermilk and Grated Cucumber",
      description:
        "Packed with fresh summer herbs, this chilled beet soup is bright, earthy, and doesn't require turning on your stove. Grated beets are quickly marinated in a pickle juice brine to mellow their earthiness before they are stirred together with grated cucumber and buttermilk for a crisp, cooling bite. The topping of quartered hard-cooked eggs, generous dollops of sour cream, and fresh herbs add textural interest, color, and heft as they help make each bowl a satisfying meal",
      ingridients: [
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
    {
      id: nanoid(),
      img: "https://www.kingarthurbaking.com/sites/default/files/2023-03/light-and-crispy-pizza_0223.jpg",
      title: "Pizza",
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      ingridients: [
        " 3/4 cup (188g) water, lukewarm",
        "1 tablespoon (14g) olive oil",
        "2 teaspoons King Arthur Pizza Dough Flavor, optional",
        "1 teaspoon (6g) salt",
        "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
        "3 tablespoons (28g) King Arthur Easy Roll Dough Improver, optional",
        "1 1/2 teaspoons instant yeast",
        "1 teaspoon baking powder",
      ],
    },
    {
      id: nanoid(),
      img: "https://www.kingarthurbaking.com/sites/default/files/2023-03/light-and-crispy-pizza_0223.jpg",
      title: "Pizza",
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      ingridients: [
        " 3/4 cup (188g) water, lukewarm",
        "1 tablespoon (14g) olive oil",
        "2 teaspoons King Arthur Pizza Dough Flavor, optional",
        "1 teaspoon (6g) salt",
        "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
        "3 tablespoons (28g) King Arthur Easy Roll Dough Improver, optional",
        "1 1/2 teaspoons instant yeast",
        "1 teaspoon baking powder",
      ],
    },
    {
      id: nanoid(),
      img: "https://www.foodandwine.com/thmb/QJDtINY0W2okaAeIxyrBGa00gYQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Borscht-with-Buttermilk-and-Grated-Cucumber-FT-RECIPE0822-2000-15c400a9033a4e58bfbc4dfbb8ab0bd7.jpg",
      title: "Borscht with Buttermilk and Grated Cucumber",
      description:
        "Packed with fresh summer herbs, this chilled beet soup is bright, earthy, and doesn't require turning on your stove. Grated beets are quickly marinated in a pickle juice brine to mellow their earthiness before they are stirred together with grated cucumber and buttermilk for a crisp, cooling bite. The topping of quartered hard-cooked eggs, generous dollops of sour cream, and fresh herbs add textural interest, color, and heft as they help make each bowl a satisfying meal",
      ingridients: [
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
    {
      id: nanoid(),
      img: "https://www.kingarthurbaking.com/sites/default/files/2023-03/light-and-crispy-pizza_0223.jpg",
      title: "Pizza",
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      ingridients: [
        " 3/4 cup (188g) water, lukewarm",
        "1 tablespoon (14g) olive oil",
        "2 teaspoons King Arthur Pizza Dough Flavor, optional",
        "1 teaspoon (6g) salt",
        "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
        "3 tablespoons (28g) King Arthur Easy Roll Dough Improver, optional",
        "1 1/2 teaspoons instant yeast",
        "1 teaspoon baking powder",
      ],
    },
    {
      id: nanoid(),
      img: "https://www.kingarthurbaking.com/sites/default/files/2023-03/light-and-crispy-pizza_0223.jpg",
      title: "Pizza",
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      ingridients: [
        " 3/4 cup (188g) water, lukewarm",
        "1 tablespoon (14g) olive oil",
        "2 teaspoons King Arthur Pizza Dough Flavor, optional",
        "1 teaspoon (6g) salt",
        "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
        "3 tablespoons (28g) King Arthur Easy Roll Dough Improver, optional",
        "1 1/2 teaspoons instant yeast",
        "1 teaspoon baking powder",
      ],
    },
    {
      id: nanoid(),
      img: "https://www.foodandwine.com/thmb/QJDtINY0W2okaAeIxyrBGa00gYQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Borscht-with-Buttermilk-and-Grated-Cucumber-FT-RECIPE0822-2000-15c400a9033a4e58bfbc4dfbb8ab0bd7.jpg",
      title: "Borscht with Buttermilk and Grated Cucumber",
      description:
        "Packed with fresh summer herbs, this chilled beet soup is bright, earthy, and doesn't require turning on your stove. Grated beets are quickly marinated in a pickle juice brine to mellow their earthiness before they are stirred together with grated cucumber and buttermilk for a crisp, cooling bite. The topping of quartered hard-cooked eggs, generous dollops of sour cream, and fresh herbs add textural interest, color, and heft as they help make each bowl a satisfying meal",
      ingridients: [
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
    {
      id: nanoid(),
      img: "https://www.kingarthurbaking.com/sites/default/files/2023-03/light-and-crispy-pizza_0223.jpg",
      title: "Pizza",
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      ingridients: [
        " 3/4 cup (188g) water, lukewarm",
        "1 tablespoon (14g) olive oil",
        "2 teaspoons King Arthur Pizza Dough Flavor, optional",
        "1 teaspoon (6g) salt",
        "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
        "3 tablespoons (28g) King Arthur Easy Roll Dough Improver, optional",
        "1 1/2 teaspoons instant yeast",
        "1 teaspoon baking powder",
      ],
    },
    {
      id: nanoid(),
      img: "https://www.kingarthurbaking.com/sites/default/files/2023-03/light-and-crispy-pizza_0223.jpg",
      title: "Pizza",
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      ingridients: [
        " 3/4 cup (188g) water, lukewarm",
        "1 tablespoon (14g) olive oil",
        "2 teaspoons King Arthur Pizza Dough Flavor, optional",
        "1 teaspoon (6g) salt",
        "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
        "3 tablespoons (28g) King Arthur Easy Roll Dough Improver, optional",
        "1 1/2 teaspoons instant yeast",
        "1 teaspoon baking powder",
      ],
    },
    {
      id: nanoid(),
      img: "https://www.foodandwine.com/thmb/QJDtINY0W2okaAeIxyrBGa00gYQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Borscht-with-Buttermilk-and-Grated-Cucumber-FT-RECIPE0822-2000-15c400a9033a4e58bfbc4dfbb8ab0bd7.jpg",
      title: "Borscht with Buttermilk and Grated Cucumber",
      description:
        "Packed with fresh summer herbs, this chilled beet soup is bright, earthy, and doesn't require turning on your stove. Grated beets are quickly marinated in a pickle juice brine to mellow their earthiness before they are stirred together with grated cucumber and buttermilk for a crisp, cooling bite. The topping of quartered hard-cooked eggs, generous dollops of sour cream, and fresh herbs add textural interest, color, and heft as they help make each bowl a satisfying meal",
      ingridients: [
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
    {
      id: nanoid(),
      img: "https://www.kingarthurbaking.com/sites/default/files/2023-03/light-and-crispy-pizza_0223.jpg",
      title: "Pizza",
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      ingridients: [
        " 3/4 cup (188g) water, lukewarm",
        "1 tablespoon (14g) olive oil",
        "2 teaspoons King Arthur Pizza Dough Flavor, optional",
        "1 teaspoon (6g) salt",
        "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
        "3 tablespoons (28g) King Arthur Easy Roll Dough Improver, optional",
        "1 1/2 teaspoons instant yeast",
        "1 teaspoon baking powder",
      ],
    },
    {
      id: nanoid(),
      img: "https://www.kingarthurbaking.com/sites/default/files/2023-03/light-and-crispy-pizza_0223.jpg",
      title: "Pizza",
      description:
        "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
      ingridients: [
        " 3/4 cup (188g) water, lukewarm",
        "1 tablespoon (14g) olive oil",
        "2 teaspoons King Arthur Pizza Dough Flavor, optional",
        "1 teaspoon (6g) salt",
        "2 cups (240g) King Arthur Unbleached All-Purpose Flour",
        "3 tablespoons (28g) King Arthur Easy Roll Dough Improver, optional",
        "1 1/2 teaspoons instant yeast",
        "1 teaspoon baking powder",
      ],
    },
    {
      id: nanoid(),
      img: "https://www.foodandwine.com/thmb/QJDtINY0W2okaAeIxyrBGa00gYQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Borscht-with-Buttermilk-and-Grated-Cucumber-FT-RECIPE0822-2000-15c400a9033a4e58bfbc4dfbb8ab0bd7.jpg",
      title: "Borscht with Buttermilk and Grated Cucumber",
      description:
        "Packed with fresh summer herbs, this chilled beet soup is bright, earthy, and doesn't require turning on your stove. Grated beets are quickly marinated in a pickle juice brine to mellow their earthiness before they are stirred together with grated cucumber and buttermilk for a crisp, cooling bite. The topping of quartered hard-cooked eggs, generous dollops of sour cream, and fresh herbs add textural interest, color, and heft as they help make each bowl a satisfying meal",
      ingridients: [
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
      state.isAuthenticated = action.payload
    },
    logoutUser: (state) => {
      state.isAuthenticated = null;
    },
    registerUser: (state, action) => {
      state.listOfUsers.push(action.payload);
    },
    addRecepie: (state, action) => {
      state.listOfResepies.push(action.payload);
    },
    addFavoriteRec: (state, action) => {
          state.listOfUsers[userIndex].favorite.push(recipeId);
          state.isAuthenticated.favorite.push(recipeId);
        
    },
    deleteFavoriteRec: (state, action) => {
      console.log("asd");
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
          state.listOfUsers[userIndex].favorite.splice(recipeIndex, 1);
          state.isAuthenticated.favorite =
            state.listOfUsers[userIndex].favorite;
        }
    },
  },
});
export const {
  loginUser,
  registerUser,
  addRecepie,
  addFavoriteRec,
  deleteFavoriteRec,
} = authSlice.actions;

export default authSlice.reducer;
