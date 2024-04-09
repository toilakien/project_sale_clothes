import React from 'react';
import { GuestGrand } from '../helpers/auth/GuestGrand';
import LoginBoxed from '../pages/Authentication/LoginBoxed';

const AuthRoute = {
    path: '/',
    element: (
        <GuestGrand>
            <LoginBoxed />
        </GuestGrand>
    ),
    children: [{ path: '/login', element: <LoginBoxed /> }],
};

export default AuthRoute;
