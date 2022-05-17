import Axios_withoutInstance from "axios";
import { Axios as axios } from "./axios";

const API = "https://pfusersapi.herokuapp.com/users";

export const login = async (username: string, password: string) => {
  const data = {
    username,
    password,
  };
  try {
    const req = await Axios_withoutInstance.post(
      `${API}/login`,
      data //process.env.UsersAPI
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const createUser = async (
  name: string,
  surnames: string,
  username: string,
  password: string,
  email: string,
  cedula: string
) => {
  const data = {
    name,
    surnames,
    username,
    password,
    cedula,
    email,
  };

  try {
    const req = await Axios_withoutInstance.post(`${API}/register`, data);
    return req;
  } catch (error) {
    return error;
  }
};

export const consultActions = async (userId: string) => {
  console.log(localStorage.getItem('TOKEN'))
  try {
    const req = await axios.get(`${API}/actions?cedula=${userId}`);
    return req;
  } catch (error) {
    return error;
  }
};
