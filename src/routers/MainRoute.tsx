import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutUsers from '../components/LayoutUsers/LayoutUsers';
import { AuthGrand } from '../helpers/auth/AuthGrand';

const CartRouter = React.lazy(() => import('../pages/cart/Cart'));
const HomePageRouter = React.lazy(() => import('../pages/home-page/HomePage'));
const ProductUserRouter = React.lazy(() => import('../pages/product-user/ProductUser'));
const DetailItemRouter = React.lazy(() => import('../components/DetailItem'));
const BlogRouter = React.lazy(() => import('../pages/blog/Blog'));
const ContactRouter = React.lazy(() => import('../pages/contact/contact'));
const IntroduceRouter = React.lazy(() => import('../pages/introduce/Introduce'));

const MainRoute = {
    path: '/',
    element: (
        <AuthGrand>
            {/* <DefaultLayout>
                <Outlet />
            </DefaultLayout> */}
            <LayoutUsers>
                <Outlet />
            </LayoutUsers>
        </AuthGrand>
    ),
    children: [
        {
            path: '/home',
            element: <HomePageRouter />,
        },
        {
            path: '/products',
            element: <ProductUserRouter />,
        },
        {
            path: '/products/detail/:id',
            element: <DetailItemRouter />,
        },
        {
            path: '/order',
            element: <CartRouter />,
        },
        {
            path: '/blog',
            element: <BlogRouter />,
        },
        {
            path: '/contact',
            element: <ContactRouter />,
        },
        {
            path: '/introduce',
            element: <IntroduceRouter />,
        },
    ],
};

export default MainRoute;
