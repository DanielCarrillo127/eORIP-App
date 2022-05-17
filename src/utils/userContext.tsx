import React, { useState, FC } from "react";
import { consultActions } from "./request";

interface UserContextInterface {
  name: string;
  username: string;
  surnames: string;
  cedula: string;
  email: string;
  role: string;
  actions: string[];
}

interface PropType {
  children: JSX.Element[];
}

export type ContextActions = {
  user: UserContextInterface | null;
  saveUser: (user: any) => void;
  updateUser: (id: number) => void;
  logOutUser: () => void;
};

export const DataContext = React.createContext<ContextActions | null>(null);

export const UserContext: FC<PropType> = ({ children }) => {
  const [user, setUser] = useState<UserContextInterface | null>(null);

  const saveUser = async (userinfo: any) => {
    const req = await consultActions(userinfo.cedula);
    setUser({
      name: userinfo.name,
      username: userinfo.username,
      surnames: userinfo.surnames,
      cedula: userinfo.cedula,
      email: userinfo.email,
      role: userinfo.role,
      actions: req.data.actions,
    });
  };

  const updateUser = (id: number) => {};

  const logOutUser = async () => {
    localStorage.clear();
    setUser(null);
  };

  // localStorage.clear();

  return (
    <DataContext.Provider value={{ user, updateUser, saveUser, logOutUser }}>
      {children}
    </DataContext.Provider>
  );
};
