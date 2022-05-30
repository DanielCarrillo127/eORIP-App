import React, { useState, FC } from "react";
import { consultActions, getUser } from "./request";

interface UserContextInterface {
  name: string;
  username: string;
  surnames: string;
  cedula: string;
  email: string;
  role: string;
  walletPublicAddress: string;
  numOfPQRSD: string;
  numOfCertificates: string;
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

  const handelSession = async () => {
    const jsonSessionStorage = window.sessionStorage.getItem("USER");
    if (jsonSessionStorage !== "error" && jsonSessionStorage !== undefined) {
      const userData = JSON.parse(jsonSessionStorage || "{}");
      const reqUser = await getUser(userData.cedula);

      const jsonUser = InterFaceToJSON({
        name: reqUser.data.name,
        username: reqUser.data.username,
        surnames: reqUser.data.surnames,
        cedula: reqUser.data.cedula,
        email: reqUser.data.email,
        role: reqUser.data.role,
        actions: userData.actions,
        walletPublicAddress: reqUser.data.walletPublicAddress,
        numOfPQRSD: reqUser.data.numOfPQRSD,
        numOfCertificates: reqUser.data.numOfCertificates,
      });
      window.sessionStorage.setItem("USER", JSON.stringify(jsonUser));
      setUser({
        name: reqUser.data.name,
        username: reqUser.data.username,
        surnames: reqUser.data.surnames,
        cedula: reqUser.data.cedula,
        email: reqUser.data.email,
        role: reqUser.data.role,
        actions: userData.actions,
        walletPublicAddress: reqUser.data.walletPublicAddress,
        numOfPQRSD: reqUser.data.numOfPQRSD,
        numOfCertificates: reqUser.data.numOfCertificates,
      });
    }
  };

  const updateUser = (id: number) => {};

  const saveUser = async (token: string, userCedula: string) => {
    window.localStorage.setItem("TOKEN", token);

    const req = await consultActions(userCedula);
    const reqUser = await getUser(userCedula);

    const jsonUser = InterFaceToJSON({
      name: reqUser.data.name,
      username: reqUser.data.username,
      surnames: reqUser.data.surnames,
      cedula: reqUser.data.cedula,
      email: reqUser.data.email,
      role: reqUser.data.role,
      actions: req.data.actions,
      walletPublicAddress: reqUser.data.walletPublicAddress,
      numOfPQRSD: reqUser.data.numOfPQRSD,
      numOfCertificates: reqUser.data.numOfCertificates,
    });
    window.sessionStorage.setItem("USER", JSON.stringify(jsonUser));
    setUser({
      name: reqUser.data.name,
      username: reqUser.data.username,
      surnames: reqUser.data.surnames,
      cedula: reqUser.data.cedula,
      email: reqUser.data.email,
      role: reqUser.data.role,
      actions: req.data.actions,
      walletPublicAddress: reqUser.data.walletPublicAddress,
      numOfPQRSD: reqUser.data.numOfPQRSD,
      numOfCertificates: reqUser.data.numOfCertificates,
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
        walletPublicAddress: user.walletPublicAddress,
        numOfPQRSD: user.numOfPQRSD,
        numOfCertificates: user.numOfCertificates,
      };
      return json;
    }
  };

  const editHDL = (section: string) => {
    setHDL(section);
  };

  const logOutUser = async () => {
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
  };



  return (
    <DataContext.Provider
      value={{
        user,
        Handleonclick,
        updateUser,
        saveUser,
        logOutUser,
        editHDL,
        handelSession,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
