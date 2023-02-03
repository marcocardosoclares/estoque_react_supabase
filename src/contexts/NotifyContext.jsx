import { Toast } from 'bootstrap';
import React, { createContext, useState, useCallback, useEffect, useContext } from 'react'
import { Notify } from '../components';

const NotifyContext = createContext();

export function useNotify() {
    return useContext(NotifyContext)
}

export function NotifyProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    
    useEffect(() => {
        if (toasts.length > 0) {
        const toast = new Toast(document.querySelector(`#toast${toasts.length -1}`))
        toast.show();
        }
    }, [toasts]);

    const addNotify = useCallback(
        function(message, theme = 'danger') {
            setToasts(toasts => [
                ...toasts, 
                <Notify 
                    key={ toasts.length } 
                    message={ message } 
                    theme={ theme } 
                    index={ toasts.length } 
                />
            ]);
        }, []
    )

    return (
        <NotifyContext.Provider value={addNotify}>
            { children }
            <div className="toast-container position-absolute top-0 end-0 p-3">
                { toasts }
            </div>
        </NotifyContext.Provider>
    );
}