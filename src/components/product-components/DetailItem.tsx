import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetailProduct } from '../../services';
import { addToCart } from '../../store/shop';
import { BaseResponse } from '../../types';
import { IProduct } from '../../types/product';
import { renderUrlImage } from '../../utils/renderUrlImage';
import BreakCrum from '../BreakCrum';
import DialogConfirm from '../DialogConfirm';
import ImageSwiperCustom from '../ImageSwiperCustom';
import RadioButtonCheck from '../RadioButtonCheck';
import { formatTypeOfMoney } from '../../utils/formatTypeOfMoney';
import CheckboxCustom from '../CheckboxCustom';

const DetailItem = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [countBuy, setCountBuy] = useState<number>(1);
    const [size, setSize] = useState<any>('');
    const [detail, setDetail] = useState<BaseResponse<IProduct> | undefined>(undefined);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const refInputM = useRef<any>();
    const refInputL = useRef<any>();
    useEffect(() => {
        if (id) {
            getProductDetail(Number(id));
        }
    }, [id]);

    const getProductDetail = async (id: number) => {
        const response = await getDetailProduct(id);
        if (response) {
            setDetail(response?.data);
        }
    };

    const { discount, name, price, image, color } = detail?.attributes || {};

    const params = {
        id: id,
        count: countBuy,
        size: size,
        price: Number(countBuy) * (Number(price) * ((100 - Number(discount)) / 100)),
        name: name,
        color: color || 1,
    };

    const handleAddToCart = () => {
        dispatch(addToCart(params));
    };

    const buyNow = () => {
        dispatch(addToCart(params));
        navigate('/order');
    };

    function openModal() {
        setIsOpen(true);
    }
    return (
        <div>
            <hr />
            <BreakCrum a="Trang chủ" b="Chi tiết sản phẩm" />
            <hr />
            <div className="m-2 flex items-start  bg-white p-[10px] pb-[15px] flex w-full gap-8">
                <div className="border border-bd-card w-[50%]">
                    <ImageSwiperCustom items={renderUrlImage?.(image?.data)} />
                </div>
                <div className=" w-[50%] align-top px-[15px]">
                    <h1 className="text-[24px] m-0 dark:text-white-dark">{name}</h1>
                    <div className="flex gap-8 items-center mt-2 mb-2">
                        <h1 className="text-2xl m-0 dark:text-white-dark">{formatTypeOfMoney(Number(countBuy) * (Number(price) * ((100 - Number(discount)) / 100)))}</h1>
                        <h1 className="text-2xl m-0 text-[#878c8f] dark:text-white-dark line-through">{formatTypeOfMoney(Number(price) * countBuy)}</h1>
                        <h1 className="border-2 border-[#fce477] py-1 px-3 rounded text-[#fce477]">-{discount}%</h1>
                    </div>
                    <div className="flex gap-8 items-center">
                        <label>Count:</label>
                        <div className="border-2 rounded-md border-[#ddd] w-max">
                            <button onClick={() => setCountBuy(countBuy - 1)} className="font-bold w-[40px] h-[40px]">
                                -
                            </button>
                            <span className="font-bold w-[40px]">{countBuy}</span>
                            <button className="font-bold w-[40px]" onClick={() => setCountBuy(countBuy + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center mt-2">
                        <label>Size:</label>
                        <CheckboxCustom
                            refItem={(e: boolean) => {
                                if (e) {
                                    setSize('M');
                                }
                            }}
                            name="sizeM"
                            ref={refInputM}
                        >
                            M
                        </CheckboxCustom>
                        <CheckboxCustom
                            refItem={(e: boolean) => {
                                if (e) {
                                    setSize('L');
                                }
                            }}
                            name="sizeL"
                            ref={refInputL}
                        >
                            L
                        </CheckboxCustom>
                    </div>

                    <br />
                    <button onClick={handleAddToCart} type="button" className="button-style-outline w-full h-[50px]">
                        Add to cart
                    </button>
                    <button onClick={buyNow} type="button" className="mt-5 button-style-container w-full h-[50px]">
                        Mua ngay
                    </button>
                    <div className="mt-8">
                        <h1>Mô tả sản phẩm</h1>
                    </div>
                </div>
            </div>
            <DialogConfirm isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default DetailItem;
