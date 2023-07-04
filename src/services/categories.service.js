import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const GET_CATEGORIES_SERVICE = async () => {
  try {
    const URL = `${API_URL}list.php?c=list`;
    const { data } = await axios(URL);
    return data.drinks ?? [];

  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error");
  }
};