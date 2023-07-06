import { useState, useEffect, createContext, } from 'react';
import PropTypes, { func } from 'prop-types';
import { FILTER_DRINKS_SERVICE, GET_RECIPE_SERVICE, } from '../services/drink.service';

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  function handleModalClick () {
    setModal(!modal);
  };

  function handleDrinkIdClick (id) {
    setDrinkId(id);
  };

  async function getRecipe () {
    if (!drinkId) return;
    try {
      setLoading(true);
      const recipeData = await GET_RECIPE_SERVICE(drinkId);
      setRecipe(recipeData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    };
  };

  async function getDrink (data) {
    try {
      setLoading(true);
      const drinksData = await FILTER_DRINKS_SERVICE(data.name, data.category);
      setDrinks(drinksData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [drinkId]);

  const contextValues = {
    drinks,
    modal,
    recipe,
    loading,
    handleModalClick,
    handleDrinkIdClick,
    getDrink,
  }

  return (
    <DrinksContext.Provider value={contextValues}>
      {children}
    </DrinksContext.Provider>
  );
};

DrinksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DrinksContext, DrinksProvider };