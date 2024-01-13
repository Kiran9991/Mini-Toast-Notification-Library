import { useContext, useState, useEffect, useRef } from "react";
import "./ToastMessage.css";
import ToastContext from "../store/toast-context";

const SingleToast = (props) => {
  const { item } = props;
  const toastCtx = useContext(ToastContext);
  
  const deleteToast = (e) => {
    toastCtx.removeToast(item.id);
  };

  if(typeof(item.test) === 'string') {
    setTimeout(() => {
      deleteToast();
    }, toastCtx.toastTime);
  }

  const [countdown, setCountdown] = useState(item.test)
    const timerId = useRef();

    useEffect(() => {
        timerId.current = setInterval(() => {
            setCountdown(prev =>  prev - 1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() => {
        if(countdown <= 0) {
            clearInterval(timerId.current)
            async function getCountries() {
              toastCtx.setLoading(true);
              try {
                const res = await fetch(`https://api.knowmee.co/api/v1/master/get-country-list`);
              const data = await res.json();
              console.log('countries', data);
              }catch (err) {
                console.log(err)
              }
              toastCtx.setLoading(false);
            }
            getCountries();
        }
  }, [countdown, toastCtx])

  return (
    <li className="toastMessage" key={item.id} onMouseOver={() => toastCtx.setTime(7000)}>
      <span className="messageContent">
      {typeof(item.test) === 'number' ? countdown+': 1' : item.test+' : '+item.count}
      </span>
      <button onClick={deleteToast}>close</button>
    </li>
  );
};

export default SingleToast;
