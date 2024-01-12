import { useContext, useState } from 'react';
import './FirstComponent.css'
import ToastMessage from './Notification/ToastMessage';
import ToastContext from '../store/toast-context';
import SetTime from './Set Time/SetTime';

const FirstComponent = () => {
    const toastCtx = useContext(ToastContext);
    const [showSetTimeoutForm, setShowSetTimeoutForm] = useState(false);
    const [count, setCount] = useState(1);

    const addToastHandler = () => {
        toastCtx.addToast({ id: Math.random(), Test: count })
        setCount(count+1);
    }

    const showSetTimeoutFormHandler = () => {
        setShowSetTimeoutForm(true);
    }

    return (<div className='spaceAround'>
        <div className='container'>
        <button className='showToastbtn' onClick={addToastHandler}>
            Show Toast Message
        </button>
        <button className='showToastbtn' onClick={showSetTimeoutFormHandler}>
            Set Timeout
        </button>
        </div> 
        <ToastMessage unique={Math.random()}/>
        {showSetTimeoutForm && <SetTime onClose={() => setShowSetTimeoutForm(false)}/>}
    </div>)
}

export default FirstComponent;