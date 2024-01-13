import { useContext, useState } from "react";

import "./FirstComponent.css";
import ToastMessage from "../Notification/ToastMessage";
import ToastContext from "../store/toast-context";
import SetTime from "./Set Time/SetTime";
import ToastNotificationBtn from "../UI/ToastNotificationBtn";
import SetTimeoutBtn from "../UI/SetTimeoutBtn";

const FirstComponent = () => {
  const toastCtx = useContext(ToastContext);
  const [count, setCount] = useState(1);

  const addToastHandler = () => {
    toastCtx.addToast({ id: Math.random(), test: 'testing', count: count });
    setCount(count + 1);
  };

  return (
    <div className="spaceAround1">
      <div className="container">
        <ToastNotificationBtn onClick={addToastHandler}>
          Show Toast Message
        </ToastNotificationBtn>
        <SetTimeoutBtn>Set Timeout</SetTimeoutBtn>
      </div>
      <ToastMessage unique={Math.random()} />
      {toastCtx.isTimeForm && <SetTime />}
    </div>
  );
};

export default FirstComponent;
