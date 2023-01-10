import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import Forgot, { action as forgotAction } from "./auth/Forgot";
import ResetPassword, { action as resetAction } from "./auth/ResetPassword";
import Login, { action as authAction } from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
import ErrorPage from "./error/ErrorPage";
import ProtectedRoute, {loader as protectedLoader} from './ProtectedRoute';


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
        loader: protectedLoader,
        children: [
            { path: 'dashboard', element: <Dashboard /> },

        ]
    }
]);

export default router;