import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';
import { ModalProvider } from './contexts/ModalContext';
import { NotifyProvider } from './contexts/NotifyContext';
import router from './routes';
import './scss/styles.scss';

function App(){
    return (
        <AuthProvider>
            <ModalProvider>
                <NotifyProvider>
                    <RouterProvider router={router} />
                </NotifyProvider>
            </ModalProvider>
        </AuthProvider>
    )
} 

export default App;
