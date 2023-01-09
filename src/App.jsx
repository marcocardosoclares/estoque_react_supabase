import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './scss/styles.scss';

const App = () => <p className="bg-body-secondary"><RouterProvider router={router} /></p> ;

export default App;
