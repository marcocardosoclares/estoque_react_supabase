import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import Forgot, { action as forgotAction } from "./auth/Forgot";
import ResetPassword, { action as resetAction } from "./auth/ResetPassword";
import Login, { action as authAction } from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
import ErrorPage from "./error/ErrorPage";
import ProtectedRoute from './ProtectedRoute';
import Items,{ loader as itemsLoader} from "./items/Items";
import InsertItem, { action as insertItemAction } from "./items/InsertItem";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Login />,
                action: authAction,
            },
            {
                path: 'esqueci',
                element: <Forgot />,
                action: forgotAction
            },
            {
                path: 'reset',
                element: <ResetPassword />,
                action: resetAction
            },
        ]
    },
    {
        element: <ProtectedRoute />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            {
                path: 'itens',
                element: <Items />,
                loader: itemsLoader,
            },
            {
                path: 'itens/inserir',
                element: <InsertItem />,
                action: insertItemAction
            }

        ]
    }
]);

export default router;