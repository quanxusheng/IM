import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'
import Chat from '@/pages/Chat'
import User from '@/pages/User'


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <div>11</div>
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/signUp',
            element: <SignUp />
        },
        {
            path: '/user',
            element: <User />,
        },
        {
            path: '/chat',
            element: <Chat />,
        }
    ]
)

function Router() {
    return (
        < RouterProvider router={router} />
    )
}
export default Router