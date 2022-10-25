import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";

function App() {
  const [showModal, toggleShowModal] = useState(false);

  const openModal = () => {
    toggleShowModal(true);
  };

  const closeModal = () => {
    toggleShowModal(false);
  };

  return (
    <CartProvider>
      {showModal && <Cart closeModalHandler={closeModal} />}
      <Header openModalHandler={openModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
