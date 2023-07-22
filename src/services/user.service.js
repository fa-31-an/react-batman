import axios from 'axios';

const userApiUrl = import.meta.env.VITE_USER_API_URL;

export const userRegister = async (body) => {
  try {
    const url = `${userApiUrl}register/`;
    const { data } = await axios.post(url, body);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al registrarse`);
  };
};

export const userLogin = async (body) => {
  try {
    const url = `${userApiUrl}login/`;
    const { data } = await axios.post(url, body);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al iniciar sesión`);
  };
};
