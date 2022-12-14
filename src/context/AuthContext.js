import { createContext, useContext } from "react";
import auth from "../config-firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //creer un user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  return <UserContext.Provider value={createUser}>{children}</UserContext.Provider>
}

export const UserAuth = () => {
  return useContext(UserContext);
}
