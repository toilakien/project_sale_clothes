import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetailProduct, postOrder } from '../services';
import ImageSwiperCustom from './ImageSwiperCustom';
import { renderUrlImage } from '../utils/renderUrlImage';
import RadioButtonCheck from './RadioButtonCheck';
import BreakCrum from './BreakCrum';
import DialogConfirm from './DialogConfirm';
import { useDispatch } from 'react-redux';
import { setLoading } from '../store/themeConfigSlice';

const DetailItem = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [countBuy, setCountBuy] = useState<number>(1);
    const [size, setSize] = useState<string>('');
    const [detail, setDetail] = useState<any>(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            getProductDetail(Number(id));
        }
    }, [id]);
    const getProductDetail = async (id: number) => {
        dispatch(setLoading(true));
        const response = await getDetailProduct(id);
        if (response) {
            dispatch(setLoading(false));
            setDetail(response?.data);
        }
    };

    const { discount, name, price, image } = detail?.attributes || {};
    const params = {
        count: countBuy,
        size: size,
        price: Number(countBuy) * (Number(price) * (100 - Number(discount) / 100)),
        name: name,
        color: 'red',
    };
    const addToCart = () => {
        postOrderCall(params);
    };
    const buyNow = () => {
        postOrderCall(params);
        navigate('/order');
    };
    async function postOrderCall(params: any) {
        dispatch(setLoading(true));
        const response = await postOrder(params);

        if (response) {
            openModal();
            dispatch(setLoading(false));
        }
    }
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
                <div className=" w-[50%] align-top">
                    <h1 className="text-3xl m-0 dark:text-white-dark">{name}</h1>
                    <br />
                    <div className="flex gap-8 items-center mt-2">
                        <h1 className="text-2xl m-0 dark:text-white-dark">{price}đ</h1>
                    </div>
                    <div className="flex gap-8 items-center">
                        <label>Count:</label>
                        <div className="border-2 border-[#ddd] w-max">
                            <button onClick={() => setCountBuy(countBuy - 1)} className="  w-[25px]">
                                -
                            </button>
                            <span className=" w-[25px]">{countBuy}</span>
                            <button className=" w-[25px]" onClick={() => setCountBuy(countBuy + 1)}>
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-8 items-center mt-2">
                        <label>Size:</label>
                        <select
                            onChange={(e) => {
                                setSize(e.target.value);
                            }}
                            className="border-2 border-gray-200"
                            name=""
                            id=""
                        >
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div className="flex gap-8 items-center mt-2">
                        <label>Color:</label>
                        <div className="mt-3">
                            <RadioButtonCheck />
                            <RadioButtonCheck />
                        </div>
                    </div>
                    <br />
                    <button onClick={addToCart} type="button" className="button-style-outline w-full ">
                        Add to cart
                    </button>
                    <button onClick={buyNow} type="button" className="mt-5 button-style-container w-full">
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
