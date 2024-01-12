import React, { useState } from "react"


const ToastContext = React.createContext({
    toast: [],
    addToast: (item) => {},
    removeToast: (id) => {},
    toastTime: 3000,
    setTime: (time) => {}
})

export const ToastContextProvider = (props) => {
    const [toast, setToast] = useState([]);
    const [time, setToastTime] = useState(3000);

    const addToastHandler = (item) => {
        setToast([...toast, item])
    }

    const removeToastHandler = (id) => {
        setToast((prev) => {
            const updatedItem = prev.filter((item) => item.id !== id)
            return updatedItem;
        })
    }

    const setToastTimeHandler = (time) => {
        setToastTime(time);
    }

    const toastContext = {
        toast: toast,
        addToast: addToastHandler,
        removeToast: removeToastHandler,
        toastTime: time,
        setTime: setToastTimeHandler
    }

    return <ToastContext.Provider value={toastContext}>
        {props.children}
    </ToastContext.Provider>
}

export default ToastContext;