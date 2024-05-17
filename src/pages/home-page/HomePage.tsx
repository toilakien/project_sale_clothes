import React, { useEffect } from 'react';
import BannerUser from '../../components/LayoutUsers/BannerUser';
import ProductUser from '../product-user/ProductUser';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import ProductUserBuySale from '../product-user-buySale/ProductUserBySale';

const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Home Page'));
    });
    return (
        <div>
            <BannerUser />
            <ProductUser />
            <br />
            <ProductUserBuySale />
        </div>
    );
};

export default HomePage;
