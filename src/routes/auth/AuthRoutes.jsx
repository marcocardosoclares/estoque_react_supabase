import Forgot, { action as forgotAction } from "./Forgot";
import ResetPassword, { action as resetAction } from "./ResetPassword";
import Login, { action as authAction } from "./Login";

const authRoutes = [
    {
        index: true,
        element: <Login />,
        action: authAction
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
    }
]

export default authRoutes;