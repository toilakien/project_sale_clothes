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

const ProductUserBuySale = () => {
    const dispatch = useDispatch();
    const { productNew } = useSelector((state: IRootState) => state.shop);
    console.log(productNew);

    useEffect(() => {
        dispatch(setPageTitle('Product Page'));
    });

    useEffect(() => {
        getProductList();
    }, []);

    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/productNew/detail/${id}`);
    };

    const TITLE = 'Sản phẩm mới';
    return (
        <div className="w-full">
            <hr />
            <TitleBar>{TITLE}</TitleBar>
            <GridBase>
                {productNew.length > 0 ? (
                    productNew?.map((e: BaseResponse<IProduct>) => {
                        const { discount, name, price, image } = e?.attributes || {};
                        const { id } = e || {};
                        const imgLink = `http://localhost:1337${image?.data[0]?.attributes?.formats?.thumbnail?.url}`;
                        return <ItemBase id={id} handleClick={handleClick} disCount={discount} img={imgLink} price={price} title={name} />;
                    })
                ) : (
                    <div className="ml-2 text-xl text-[#555]">Không có sản phẩm mới nào</div>
                )}
            </GridBase>
        </div>
    );
};

export default ProductUserBuySale;
