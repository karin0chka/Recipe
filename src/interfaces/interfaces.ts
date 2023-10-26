export interface IUser {
  id: string;
  username: string;
  password: string;
  email: string;
  favorite: IRecepie["id"][];
  myRecipe:IRecepie[];
  type: "client" | "admin";
}

export interface IRecepie {
  id: string;
  img: string;
  title: string;
  description: string;
  ingredients: string[];
}

export interface IInitialStore {
  listOfUsers: IUser[];
  isAuthenticated: null | IUser;
  listOfResepies: IRecepie[];
}

export interface IFile {
  url: string;
  name: string;
}
