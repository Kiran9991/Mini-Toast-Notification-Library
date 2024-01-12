import { useContext } from "react";
import "./ToastNotification.css";
import ToastContext from "../store/toast-context";

const SetTimeoutBtn = (props) => {
  const toastCtx = useContext(ToastContext);
  return (
    <button className="showToastbtn" onClick={(() => toastCtx.setIsTimeForm(true))}>
      {props.children}
    </button>
  );
};

export default SetTimeoutBtn;
