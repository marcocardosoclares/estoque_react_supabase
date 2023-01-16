import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';
import { ModalProvider } from './contexts/ModalContext';
import router from './routes';
import './scss/styles.scss';

function App(){
    return (
        <AuthProvider>
            <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
        </AuthProvider>
    )
} 

export default App;
