import { useContext } from "react";
import "./ToastMessage.css";
import ToastContext from "../../store/toast-context";

const SingleToast = (props) => {
  const { item } = props;
  const toastCtx = useContext(ToastContext);

  const deleteToast = (e) => {
    toastCtx.removeToast(item.id);
  };

  setTimeout(() => {
    deleteToast();
  }, toastCtx.toastTime);

  return (
    <li className="toastMessage" key={item.id} onMouseOver={() => toastCtx.setTime(7000)}>
      <span className="messageContent">{`${item.test}:${item.count}`}</span>
      <button onClick={deleteToast}>close</button>
    </li>
  );
};

export default SingleToast;
