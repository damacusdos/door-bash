import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showModal, toggleShowModal] = useState(false);

  const openModal = () => {
    toggleShowModal(true);
  };

  const closeModal = () => {
    toggleShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <Cart closeModalHandler={closeModal} />}
      <Header openModalHandler={openModal} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
