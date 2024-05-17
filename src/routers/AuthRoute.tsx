import React from 'react';
import { GuestGrand } from '../helpers/auth/GuestGrand';
import LoginBoxed from '../pages/Authentication/LoginBoxed';
import Register from '../pages/Authentication/Register';
import { Outlet } from 'react-router-dom';

const AuthRoute = {
    path: '/',
    element: (
        <GuestGrand>
            <Outlet />
        </GuestGrand>
    ),
    children: [
        { path: '/login', element: <LoginBoxed /> },
        { path: '/register', element: <Register /> },
    ],
};

export default AuthRoute;
