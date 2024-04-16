import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BreakCrum from '../../components/BreakCrum';
import GridBase from '../../components/product-components/GridBase';
import ItemBase from '../../components/product-components/ItemBase';
import TitleBar from '../../components/TitleBar';
import { IRootState } from '../../store';
import { getProductList } from '../../store/shop';
import { setPageTitle } from '../../store/themeConfigSlice';
import { BaseResponse } from '../../types';
import { IProduct } from '../../types/product';

const ProductUser = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state: IRootState) => state.shop);

    useEffect(() => {
        dispatch(setPageTitle('Product Page'));
    });

    useEffect(() => {
        getProductList();
    }, []);

    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/products/detail/${id}`);
    };

    const TITLE = 'Tất cả sản phẩm';
    return (
        <div className="w-full">
            <hr />
            <BreakCrum a="Trang chủ" b="Sản phẩm" />
            <hr />
            <TitleBar>{TITLE}</TitleBar>
            <GridBase>
                {products &&
                    products.map((e: BaseResponse<IProduct>) => {
                        const { discount, name, price, image } = e.attributes;
                        const { id } = e || {};
                        const imgLink = `http://localhost:1337${image?.data[0]?.attributes?.formats?.thumbnail?.url}`;
                        return <ItemBase id={id} handleClick={handleClick} disCount={discount} img={imgLink} price={price} title={name} />;
                    })}
            </GridBase>
        </div>
    );
};

export default ProductUser;
