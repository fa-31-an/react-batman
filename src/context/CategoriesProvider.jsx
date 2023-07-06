import { useState, useEffect, createContext, } from 'react';
import PropTypes from 'prop-types';
import { GET_CATEGORIES_SERVICE } from '../services/categories.service';

const CategoriesContext = createContext();

const CategoriesProvider = ({children}) => {
  const [ categories, setCategories ] = useState([]);
  
  const GET_CATEGORIES = async () => {
    try {
      const CATEGORIES_DATA = await GET_CATEGORIES_SERVICE();
      setCategories(CATEGORIES_DATA);
    } catch (error) {
      console.error(error);
    }
  };
  
    useEffect(() => {
      GET_CATEGORIES();
    }, []);

  return(
    <CategoriesContext.Provider value={ categories }>
      {children}
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CategoriesProvider };

export default CategoriesContext;