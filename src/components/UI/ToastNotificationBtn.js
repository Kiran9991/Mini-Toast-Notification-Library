import "./ToastNotification.css";

const ToastNotificationBtn = (props) => {
  return (
    <button className="toastNotificationbtn" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ToastNotificationBtn;
