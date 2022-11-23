import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // find the already existed item
    const existedItem = state.items.filter(
      (item) => item.id === action.item.id
    );

    let updatedItems;

    if (existedItem.length > 0) {
      const [existedItemContent] = existedItem; // extract that existed item from array

      const updatedExistedItem = {
        // overwrite the amount of the existed item
        ...existedItemContent,
        amount: existedItemContent.amount + action.item.amount,
      };

      updatedItems = [...state.items]; // !!!clone state.items, not use it directly!!!, if use directly, useEffect will not see this value as update
      const indexOfExistedItem = updatedItems.findIndex(
        // find the index of existed item and replace it into items
        (item) => item.id === action.item.id
      );
      updatedItems[indexOfExistedItem] = updatedExistedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existedItem = state.items[existedItemIndex];
    const updatedTotalAmount = state.totalAmount - existedItem.price;

    let updatedItems;

    if (existedItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existedItem, amount: existedItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existedItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
