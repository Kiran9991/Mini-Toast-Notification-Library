import React, { useState } from "react"


const ToastContext = React.createContext({
    toast: [],
    addToast: (item) => {},
    removeToast: (id) => {},
    toastTime: 7000,
    setTime: (time) => {},
    isTimeForm: false,
    setIsTimeForm: (val) => {},
    isLoading: false,
    setLoading: (val) => {}
})

export const ToastContextProvider = (props) => {
    const [toast, setToast] = useState([]);
    const [time, setToastTime] = useState(7000);
    const [showSetTimeoutForm, setShowSetTimeoutForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

    const setShowSetTimeoutFormHandler = (val) => setShowSetTimeoutForm(val);

    const setIsLoadingHandler = (val) => setIsLoading(val);

    const toastContext = {
        toast: toast,
        addToast: addToastHandler,
        removeToast: removeToastHandler,
        toastTime: time,
        setTime: setToastTimeHandler,
        isTimeForm: showSetTimeoutForm,
        setIsTimeForm: setShowSetTimeoutFormHandler,
        isLoading: isLoading,
        setLoading: setIsLoadingHandler
    }

    return <ToastContext.Provider value={toastContext}>
        {props.children}
    </ToastContext.Provider>
}

export default ToastContext;