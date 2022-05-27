import axios from "axios";
import Axios_withoutInstance from "axios";
// import { Axios as axios } from "./axios";

export const login = async (username: string, password: string) => {
  const data = {
    username,
    password,
  };
  try {
    const req = await Axios_withoutInstance.post(
      `${process.env.REACT_APP_USERS_API}users/login`,
      data //process.env.UsersAPI
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const getUser = async (cedula: string) => {

  try {
    const req = await Axios_withoutInstance.get(
      `${process.env.REACT_APP_USERS_API}users?cedula=${cedula}`,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("TOKEN")}`,
        },
      }
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
    const req = await Axios_withoutInstance.post(
      `${process.env.REACT_APP_USERS_API}users/register`,
      data
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const consultActions = async (userId: string) => {
  try {
    const req = await axios.get(
      `${process.env.REACT_APP_USERS_API}users/actions?cedula=${userId}`,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("TOKEN")}`,
        },
      }
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const createCertificateTIL = async (
  cedula: string,
  adminCedula: string,
  description: string,
  valorActo: string,
  city: string
) => {
  const data = {
    cedula,
    description,
    adminCedula,
    valorActo,
    city,
  };
  try {
    const req = await axios.post(
      `${process.env.REACT_APP_USERS_API}certificate/createCertificate/TIL`,
      data,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("TOKEN")}`,
        },
      }
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const NewAnotationCertificateTIL = async (
  enrollmentNumber: string,
  cedula: string,
  adminCedula:string,
  description: string,
  valorActo: string,
  city: string
) => {
  const data = {
    enrollmentNumber,
    cedula,
    description,
    adminCedula,
    valorActo,
    city,
  };
  try {
    const req = await axios.put(
      `${process.env.REACT_APP_USERS_API}certificate/updateCertificate/TIL`,
      data,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("TOKEN")}`,
        },
      }
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const NewBuySellCertificateTIL = async (
  enrollmentNumber: string,
  cedula: string,
  cedulaNewOwner: string,
  adminCedula:string,
  description: string,
  valorActo: string,
  city: string
) => {
  const data = {
    enrollmentNumber,
    cedula,
    cedulaNewOwner,
    description,
    adminCedula,
    valorActo,
    city,
  };
  try {
    const req = await axios.post(
      `${process.env.REACT_APP_USERS_API}certificate/createCertificate/TIL`,
      data,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("TOKEN")}`,
        },
      }
    );
    return req;
  } catch (error) {
    return error;
  }
};


export const consultDocumentsOwnerId = async (cedula: String) => {
  try {
    const req = await axios.get(
      `${process.env.REACT_APP_USERS_API}certificate/verInfo/TIL?cedula=${cedula}`,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("TOKEN")}`,
        },
      }
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const consultDocumentsHistory = async (cedula: String) => {
  try {
    const req = await axios.get(
      `${process.env.REACT_APP_USERS_API}certificate/verInfo/TIL/All?cedula=${cedula}`,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("TOKEN")}`,
        },
      }
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const consultDocumentsEnrollmentNumber = async (
  EnrollmentNumber: string
) => {
  try {
    const req = await axios.get(
      `${process.env.REACT_APP_USERS_API}certificate/verInfo/TIL?enrollmentNumber=${EnrollmentNumber}`,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("TOKEN")}`,
        },
        responseType: 'blob',
        // content-type: 'application/pdf',
      },
    );
    return req;
  } catch (error) {
    return error;
  }
};

export const consultNews = async () => {
  try {
    const req = await axios.get(
      `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_NEWSAPI_KEY}&countries=co&languages=es&keywords=predios ley&limit=10`
    );
    return req;
  } catch (error) {
    return error;
  }
};
