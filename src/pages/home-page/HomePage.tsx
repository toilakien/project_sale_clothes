import React, { useEffect } from 'react';
import BannerUser from '../../components/LayoutUsers/BannerUser';
import ProductUser from '../product-user/ProductUser';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Home Page'));
    });
    return (
        <div>
            <BannerUser />
            <ProductUser />
        </div>
    );
};

export default HomePage;
