import { useContext, useRef } from "react";
import ShowModal from "../../UI/modal/ShowModal";
import "./SetTime.css";
import ToastContext from "../../store/toast-context";

const SetTime = (props) => {
    const enteredTime = useRef();
    const timeCtx = useContext(ToastContext);

    const settimeoutHandler = () => {
        const time = enteredTime.current.value;
        timeCtx.setTime(time*1000)
        timeCtx.setIsTimeForm(false);
    }

  return (
    <ShowModal onClose={(() => timeCtx.setIsTimeForm(false))}>
      <div className="setTimeFormContainer">
        <div className="setTimeContent">
        <button onClick={(() => timeCtx.setIsTimeForm(false))} className="setTimebtn">Close</button>
        </div>
        <form className="setTimeForm">
          <label>Set Timeout:-</label>
          <input type="number" ref={enteredTime}/>
        </form>
        <button className="setTimebtn" onClick={settimeoutHandler}>Confirm</button>
      </div>
    </ShowModal>
  );
};

export default SetTime;
