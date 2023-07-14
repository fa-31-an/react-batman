import { actionTypes } from '../actions/cart.actions';

export const cartInitialState = {
  itemsInCart: [],
};

export function cartReducer(state, { type, payload = {} }) {
  const { idDrink } = payload;

  let drinkInCart = state.itemsInCart.find((item) => item.idDrink === idDrink);
  switch (type) {
    case actionTypes.ADD_TO_CART:
      if (drinkInCart) {

        let cartItemsUpdated = state.itemsInCart.map(item => {

          if (item.idDrink === idDrink) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          };

          return item;
        });
        return {
          ...state,
          itemsInCart: cartItemsUpdated,
        };
      } else {
        payload.quantity = 1;
        return {
          ...state,
          itemsInCart: [...state.itemsInCart, payload],
        };
      };

    case actionTypes.REMOVE_ONE_FROM_CART:
      if (drinkInCart.quantity > 1) {
        let cartUpdated = state.itemsInCart.map(item => {
          if (item.idDrink === idDrink) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          };
          return item;
        })
        return {
          ...state,
          itemsInCart: cartUpdated,
        };
      } else {
        let cartUpdated = state.itemsInCart.filter(item => item.idDrink !== idDrink)
        return {
          ...state,
          itemsInCart: cartUpdated,
        };
      };

    case actionTypes.REMOVE_ALL_FROM_CART:
      if (drinkInCart) {
        let cartUpdated = state.itemsInCart.filter(item => item.idDrink !== idDrink);
        return { ...state, itemsInCart: cartUpdated };
      };

    case actionTypes.CLEAR_CART:
      return { ...state, itemsInCart: [] };
  };
};