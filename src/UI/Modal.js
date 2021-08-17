import { Fragment } from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.closeModal}></div>;
};

const Overlays = (props) => {
  return (
    <div className={style.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlays>{props.children}</Overlays>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
