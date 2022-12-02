import React, { useState } from "react"
import { IUser, UserContext } from "./UserContext"


export const UserProvider = ({children}: {children: React.ReactElement[]}) => {
  
  const [user, setUser] = useState<IUser>({});

  const setUserProvider = (user: IUser) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{setUser: setUserProvider, user}}>
      {children}
    </UserContext.Provider>
  );
}