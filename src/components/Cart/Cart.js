import style from "./Cart.module.css";
import Modal from "../../UI/Modal";
// import { useState } from "react";

const Cart = (props) => {
  const cartItems = (
    <ul className={style["cart-items"]}>
      {[{ name: "Sushi", price: 120, id: "c1" }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal closeModal={props.closeModalHandler}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount:</span>
        <span>300</span>
      </div>
      <div className={style.actions}>
        <button
          className={style["button--alt"]}
          onClick={props.closeModalHandler}
        >
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
