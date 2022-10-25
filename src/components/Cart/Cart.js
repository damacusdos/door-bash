import { useContext } from "react";
import cartContext from "../../store/cart-context";
import style from "./Cart.module.css";
import Modal from "../../UI/Modal";
import CartItem from "./CartItem";
// import { useState } from "react";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItem = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal closeModal={props.closeModalHandler}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button
          className={style["button--alt"]}
          onClick={props.closeModalHandler}
        >
          Close
        </button>
        {hasItem && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
