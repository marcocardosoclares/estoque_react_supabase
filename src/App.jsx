import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/Auth';
import router from './routes';
import './scss/styles.scss';

const App = () => <AuthProvider>
    <RouterProvider router={router} />
</AuthProvider> ;

export default App;
