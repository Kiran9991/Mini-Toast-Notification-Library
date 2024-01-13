import { useContext } from "react";
import "./CountDown.css";
import ToastContext from "../store/toast-context";

const Countdown = (props) => {
  const toastCtx = useContext(ToastContext);

  const deleteToast = (e) => {
    toastCtx.removeToast(props.id);
  };

  return (
    <li className="toastMessage">
      <span className="messageContent">CountDown: 1</span>
      <button onClick={deleteToast}>close</button>
    </li>
  );
};

export default Countdown;
