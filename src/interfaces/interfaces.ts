export interface IUser {
  id: string;
  username: string;
  password: string;
  email: string;
  favorite: IRecepie["id"][];
  type: "client" | "admin";
}

export interface IRecepie {
  id: string;
  img: string;
  title: string;
  description: string;
  ingridients: string[];
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
