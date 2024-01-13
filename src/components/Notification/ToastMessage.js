import { useContext } from "react";
import "./ToastMessage.css";
import ToastContext from "../store/toast-context";
import SingleToast from "./SingleToast";

const ToastMessage = () => {
  const toastCtx = useContext(ToastContext);

  const limitedToast = toastCtx.toast.slice(0,3);

  function getCountriesName() {
    console.log('get country Names')
  }

  return (
    <ul className="notificationToast">
      {limitedToast.map((item, index) => (
        <SingleToast onComplete={getCountriesName} item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ToastMessage;
