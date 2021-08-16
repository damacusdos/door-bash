import { Fragment } from "react";
import styles from "./Header.module.css";
import foods from "../../assets/foods.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>DoorBash</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={foods} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;
