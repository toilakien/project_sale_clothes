import React, { useEffect, useState } from 'react';
import ItemBase from '../../components/ItemBase';
import GridBase from '../../components/GridBase';
import { getProducts } from '../../services';
import { useNavigate } from 'react-router-dom';
import TitleBar from '../../components/TitleBar';
import { useDispatch } from 'react-redux';
import { setLoading, setPageTitle } from '../../store/themeConfigSlice';
import BreakCrum from '../../components/BreakCrum';

const ProductUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Product Page'));
    });

    const [products, setProducts] = useState<any>();
    const navigate = useNavigate();
    useEffect(() => {
        getProductList();
    }, []);
    const getProductList = async () => {
        dispatch(setLoading(true));
        const response = await getProducts();
        if (response && response.data) {
            dispatch(setLoading(false));
            setProducts(response.data);
        }
    };
    const handleClick = (id: number) => {
        navigate(`/products/detail/${id}`);
    };
    return (
        <div className="w-full">
            <hr />
            <BreakCrum a="Trang chủ" b="Sản phẩm" />
            <hr />
            <TitleBar>Tất cả sản phẩm</TitleBar>
            <GridBase>
                {products &&
                    products.map((e: any) => {
                        const { count, discount, name, price, productType, status, image } = e.attributes;
                        const { id } = e || {};

                        return (
                            <ItemBase
                                id={id}
                                handleClick={handleClick}
                                disCount={discount}
                                img={`http://localhost:1337${image?.data[0]?.attributes?.formats?.thumbnail?.url}`}
                                price={price}
                                title={name}
                            />
                        );
                    })}
            </GridBase>
        </div>
    );
};

export default ProductUser;
