import { useContext, useEffect, useRef, useState } from "react";

import ToastNotificationBtn from "../UI/ToastNotificationBtn";
import ToastContext from "../store/toast-context";
import ToastMessage from "../Notification/ToastMessage";
import Countdown from "./CountDown";

const ThirdComponent = () => {
  const enteredNum = useRef();
  const toastCtx = useContext(ToastContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const num = enteredNum.current.value;
    toastCtx.addToast({ id: Math.random(), test: Number(num), count: 1})
    enteredNum.current.value = '';
  };

  return (
    <div className="spaceAround">
      <div className="formContainer">
        {toastCtx.isLoading && <h2>Fetching Data....</h2>}
        {!toastCtx.isLoading && <form className="form2" onSubmit={submitFormHandler}>
          <label>Enter Countdown Time</label>
          <div>
            <input type="number" ref={enteredNum} placeholder="Enter here"/>
          </div>
          <ToastNotificationBtn type="submit">
            Start Timer
          </ToastNotificationBtn>
        </form>}
        <ToastMessage unique={Math.random()} />
        {/* <Countdown id={1}/> */}
      </div>
    </div>
  );
};

export default ThirdComponent;
