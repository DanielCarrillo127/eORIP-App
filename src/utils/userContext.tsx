import { Console } from "console";
import React, { useState, FC, useEffect } from "react";
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
};

export const DataContext = React.createContext<ContextActions | null>(null);

export const UserContext: FC<PropType> = ({ children }) => {
  const [user, setUser] = useState<UserContextInterface | null>(null);
  const [Handleonclick, setHDL] = useState("");

  // useEffect(() => {
  //   if (window.sessionStorage.getItem("USER") !== "null") {
  //     // const userData = JSON.parse(window.sessionStorage.getItem('USER'));
  //     setUser({
  //       name: "userinfo.name",
  //       username: "userinfo.username",
  //       surnames: "userinfo.surnames",
  //       cedula: "userinfo.cedula",
  //       email: "userinfo.email",
  //       role: "userinfo.role",
  //       actions: [],
  //     });
  //   }
  // });

  const saveUser = async (token: string, userinfo: any) => {
    window.localStorage.setItem("TOKEN", token);

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
    const jsonUser = InterFaceToJSON(user);
    console.log(jsonUser);
    // await window.sessionStorage.setItem(
    //     "USER",
    //     JSON.stringify(jsonUser)
    //   );
    
  };

  const InterFaceToJSON = (user: any) => {
    if (user === null) {
      return "null";
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

  const updateUser = (id: number) => {};

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
    <DataContext.Provider value={{ user, Handleonclick,updateUser, saveUser, logOutUser,editHDL }}>
      {children}
    </DataContext.Provider>
  );
};
