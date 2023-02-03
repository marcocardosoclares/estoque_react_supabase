import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import Forgot, { action as forgotAction } from "./auth/Forgot";
import ResetPassword, { action as resetAction } from "./auth/ResetPassword";
import Login, { action as authAction } from "./auth/Login";
import Dashboard from "./dashboard/Dashboard";
import ErrorPage from "./error/ErrorPage";
import Items,{ loader as itemsLoader} from "./items/Items";
import InsertItem, { action as insertItemAction } from "./items/InsertItem";
import ShowItem, { loader as showItemLoader } from "./items/ShowItem";
import UpdateItem, { loader as UpdateItemLoader, action as UpdateItemAction } from "./items/UpdateItem";
import MainLayout from "./MainLayout";
import Private from "./Private";


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
        element: <MainLayout />,
        children: [
            { path: '/dashboard', index: true, element: <Private><Dashboard /></Private> },
            {
                path: '/itens',
                element: <Private><Items /></Private>,
                loader: itemsLoader,
            },
            {
                path: 'itens/:itemId/visualizar',
                element: <ShowItem />,
                loader: showItemLoader
            },
            {
                path: 'itens/:itemId/editar',
                element: <UpdateItem />,
                loader: UpdateItemLoader,
                action: UpdateItemAction
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