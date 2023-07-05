import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const GET_RECIPE_SERVICE = async (drinkId) => {
  try {
    const URL = `${API_URL}lookup.php?i=${drinkId}`;
    const { data } = await axios.get(URL);
    return data.drinks[0] ?? [];
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al buscar la receta`);
  };
};

const FILTER_DRINKS_SERVICE = async (name, category) => {
  try {
    const URL = `${API_URL}.filter.php?i=${name}&c=${category}`;
    const { data } = await axios.get(URL);
    return data.drinks;
  } catch (error) {
    console.error(error);
    throw new Error(`Hubo un error al buscar las bebidas`);
  };
};

export {
  GET_RECIPE_SERVICE,
  FILTER_DRINKS_SERVICE,
};