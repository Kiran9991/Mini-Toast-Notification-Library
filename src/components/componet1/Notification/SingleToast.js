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
    <li className="toastMessage" key={item.id}>
      <span className="messageContent">{`${`test`}:${item.Test}`}</span>
      <button onClick={deleteToast}>close</button>
    </li>
  );
};

export default SingleToast;
