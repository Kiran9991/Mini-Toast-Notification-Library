import { useContext, useRef } from "react";
import ShowModal from "../../UI/ShowModal";
import "./SetTime.css";
import ToastContext from "../../store/toast-context";

const SetTime = (props) => {
    const enteredTime = useRef();
    const timeCtx = useContext(ToastContext);

    const settimeoutHandler = () => {
        const time = enteredTime.current.value;
        timeCtx.setTime(time*1000)
        props.onClose();
    }

  return (
    <ShowModal onClose={props.onClose}>
      <div className="setTimeFormContainer">
        <div className="setTimeContent">
        <button onClick={props.onClose} className="setTimebtn">Close</button>
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
