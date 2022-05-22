import axios from "axios";
import Axios_withoutInstance from "axios";
// import { Axios as axios } from "./axios";

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
    const req = await Axios_withoutInstance.post(`${process.env.UsersAPI}/register`, data);
    return req;
  } catch (error) {
    return error;
  }
};

export const consultActions = async (userId: string) => {
  try {
    const req = await axios.get(`${API}/actions?cedula=${userId}`, {headers:{
      'Authorization': `JWT ${localStorage.getItem('TOKEN')}`
    }});
    return req;
  } catch (error) {
    return error;
  }
};

const APIKEY = "87a64cdfac26c6d4c2650eb9864c6e01";

export const consultNews = async () => {
  try {
    const req = await axios.get(`http://api.mediastack.com/v1/news?access_key=${APIKEY}&countries=co&languages=es&keywords=predios ley&limit=10`,);
    return req;
  } catch (error) {
    return error;
  }
};
