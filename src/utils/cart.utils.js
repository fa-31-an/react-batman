export function getPriceList(itemsInCart) {
  return itemsInCart.map((item) => item.quantity * item.price);
};