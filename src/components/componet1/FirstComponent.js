import { useContext, useState } from 'react';
import './FirstComponent.css'
import ToastMessage from './Notification/ToastMessage';
import ToastContext from '../store/toast-context';

const FirstComponent = () => {
    const toastCtx = useContext(ToastContext)
    const [count, setCount] = useState(1);

    const addToastHandler = () => {
        toastCtx.addToast({ id: Math.random(), Test: count })
        setCount(count+1);
    }

    return (<div className='spaceAround'>
        <div className='container'>
        <button className='showToastbtn' onClick={addToastHandler}>
            Show Toast Message
        </button>
        <button className='showToastbtn'>
            Set Timeout
        </button>
        </div> 
        <ToastMessage unique={Math.random()}/>
    </div>)
}

export default FirstComponent;