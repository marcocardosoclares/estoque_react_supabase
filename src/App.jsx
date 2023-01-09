import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './scss/styles.scss';


const App = () => <div className="bg-light"><RouterProvider router={router} /></div> ;

export default App;
