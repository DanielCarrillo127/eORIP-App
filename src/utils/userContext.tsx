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
  saveUser: (token: string, user: any) => void;
  updateUser: (id: number) => void;
  logOutUser: () => void;
  Handleonclick: string;
  editHDL: (section: string) => void;
  handelSession: () => void;
};

export const DataContext = React.createContext<ContextActions | null>(null);

export const UserContext: FC<PropType> = ({ children }) => {

  const [user, setUser] = useState<UserContextInterface | null>(null);
  const [Handleonclick, setHDL] = useState("home");

  const handelSession = () => {
    const jsonSessionStorage = window.sessionStorage.getItem("USER")
    if (jsonSessionStorage !== "null" && jsonSessionStorage !== undefined) {
      const userData = JSON.parse(jsonSessionStorage || '{}');
      setUser({
        name: userData.name,
        username: userData.username,
        surnames: userData.surnames,
        cedula: userData.cedula,
        email: userData.email,
        role: userData.role,
        actions: userData.actions,
      });
    }
  };

  const updateUser = (id: number) => {};



  const saveUser = async (token: string, userinfo: any) => {
    window.localStorage.setItem("TOKEN", token);

    const req = await consultActions(userinfo.cedula);
    const jsonUser = InterFaceToJSON({
      name: userinfo.name,
      username: userinfo.username,
      surnames: userinfo.surnames,
      cedula: userinfo.cedula,
      email: userinfo.email,
      role: userinfo.role,
      actions: req.data.actions,
    });
    window.sessionStorage.setItem(
      "USER",
      JSON.stringify(jsonUser)
    );
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

  const InterFaceToJSON = (user: any) => {
    if (user === null) {
      return "error";
    } else {
      const json = {
        name: user.name,
        username: user.username,
        surnames: user.surnames,
        cedula: user.cedula,
        email: user.email,
        role: user.role,
        actions: user.actions,
      };
      return json;
    }
    
  };


  const editHDL = (section: string) => {
    setHDL(section)
  };

  const logOutUser = async () => {
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
  };

  // localStorage.clear();

  return (
    <DataContext.Provider value={{ user, Handleonclick,updateUser, saveUser, logOutUser,editHDL,handelSession }}>
      {children}
    </DataContext.Provider>
  );
};
