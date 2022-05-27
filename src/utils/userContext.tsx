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

  const handelSession = () => {
    const jsonSessionStorage = window.sessionStorage.getItem("USER");
    if (jsonSessionStorage !== "null" && jsonSessionStorage !== undefined) {
      const userData = JSON.parse(jsonSessionStorage || "{}");
      setUser({
        name: userData.name,
        username: userData.username,
        surnames: userData.surnames,
        cedula: userData.cedula,
        email: userData.email,
        role: userData.role,
        actions: userData.actions,
        walletPublicAddress: userData.walletPublicAddress,
        numOfPQRSD: userData.numOfPQRSD,
        numOfCertificates: userData.numOfCertificates,
      });
    }
  };

  const updateUser = (id: number) => {};

  // setInterval(()=>{
  //   duration--;
  //   if(duration < 1){
  //     logOutUser();
  //     console.log('logOut')
  //     // navigate("/login");
  //   }else{
  //     var date = new Date();
  //      date.setSeconds(duration);
  //     // setTimer(date.toISOString().substr(11, 8));
  //     console.log(date.toISOString().substr(11, 8))
  //   }
  // }, 1000)

  // const handelTimer = () => {
  //   duration = 300;
  // };

  const saveUser = async (token: string, userCedula: any) => {
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

  // localStorage.clear();

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
