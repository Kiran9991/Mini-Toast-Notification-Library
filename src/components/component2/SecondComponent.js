import SetTime from "../componet1/Set Time/SetTime";
import "./SecondComponent.css";
import ToastNotificationBtn from "../UI/ToastNotificationBtn";
import SetTimeoutBtn from "../UI/SetTimeoutBtn";
import ToastMessage from "../Notification/ToastMessage";
import { useContext, useRef, useState } from "react";
import ToastContext from "../store/toast-context";

const SecondComponent = () => {
  const toastCtx = useContext(ToastContext);
  const [count, setCount] = useState(1);
  const enteredText = useRef(); 

  const submitFormHandler = (e) => {
    e.preventDefault();
    const testing = enteredText.current.value || 'Testing';
    toastCtx.addToast({ id: Math.random(), test : testing, count: count});
    setCount(count+1);
    enteredText.current.value = '';
  }

  return (
    <div className="spaceAround">
      <div className="formContainer">
        <form className="form2" onSubmit={submitFormHandler}>
          <label>Enter Custom Toast Text</label>
          <div>
            <input type="text" ref={enteredText} placeholder="Enter here"/>
          </div>
          <ToastNotificationBtn type='submit'>Show Custom Toast Message</ToastNotificationBtn>
          <SetTimeoutBtn>Set Timeout</SetTimeoutBtn>
        </form>
        <ToastMessage unique={Math.random()} />
        {toastCtx.isTimeForm && <SetTime />}
      </div>
    </div>
  );
};

export default SecondComponent;
