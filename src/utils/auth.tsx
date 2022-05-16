import { consultActions } from "./request";

export const auth = async (userId:any, userInfo:any, isToken:Boolean) => {
  if (isToken) {
    const token = userId;
    window.localStorage.setItem('TOKEN', token);
    const req = await consultActions(userInfo.cedula);
    console.log(req)
  }
};