import React from "react";

const cartContext = React.createContext({
  items: [], // total item in cart
  totalAmount: 0, // total price
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default cartContext;
