import { createContext } from "react";

export interface IUser {
  name?: string;
  email?: string;
  id?: string;
}

export interface IUserContext {
  user?: IUser;
  setUser?: (user: IUser) => void;
}

export const UserContext = createContext<IUserContext>({});
