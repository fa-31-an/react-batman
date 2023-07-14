import { createContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../actions/cart.actions';
import { cartInitialState, cartReducer } from '../reducers/cart.reducer';
import { getPriceList } from '../utils/cart.utils';

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [purchaseTotal, setPurchaseTotal] = useState(0);

  useEffect(() => {
    if(state.itemsInCart.length > 0) {
      let total = getPriceList(state.itemsInCart).reduce((a, b) => a + b, 0);
      setPurchaseTotal(total);
    };
  }, [state]);

  function addToCart(drink) {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: drink });
  };
  function removeOneFromCart(idDrink) {
    dispatch({ type: actionTypes.REMOVE_ONE_FROM_CART, payload: { idDrink } });
  };
  function removeAllFromCart(idDrink) {
    dispatch({ type: actionTypes.REMOVE_ALL_FROM_CART, payload: { idDrink } });
  };
  function clearCart() {
    dispatch({ type: actionTypes.CLEAR_CART });
    setPurchaseTotal(0);
  };
  function confirmPurchase() {
    alert(JSON.stringify(state));
  };
  const cartValues = {
    cart: state,
    addToCart,
    removeOneFromCart,
    removeAllFromCart,
    clearCart,
    confirmPurchase,
    purchaseTotal,
  };
  return (
    <CartContext.Provider value={cartValues}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { CartContext, CartProvider };