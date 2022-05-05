import Axios_withoutInstance from 'axios';
// import { Axios as axios } from './axios';


const API = 'https://pfusersapi.herokuapp.com';

export const login = async (username:string, password:string) => {
    const data = {
      username,
      password
    };
    try {
      const req = await Axios_withoutInstance.post(
        `${API}/users/login`, //process.env.UsersAPI
        data
      );
      return req;
    } catch (error) {
      return error;
    }
  };

  export const createUser = async (
    name:string,
    surnames:string,
    username:string,
    password:string,
    email:string,
    cedula:string,
  ) => {
    const data = {
      name,
      surnames,
      username,
      password,
      email,
      cedula
    };
  
    try {
      const req = await Axios_withoutInstance.post(
        `${API}/users/register`,
        data
      );
      return req;
    } catch (error) {
      return error;
    }
  };