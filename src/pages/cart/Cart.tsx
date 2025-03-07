import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreakCrum from '../../components/BreakCrum';
import DialogOrderSuccess from '../../components/DialogOrderSuccess';
import TitleBar from '../../components/TitleBar';
import { useNotify } from '../../hooks/useNoti';
import { IRootState } from '../../store';
import { deleteOrderForCart } from '../../store/shop';
import { setPageTitle } from '../../store/themeConfigSlice';
import FormInfo from './FormInfo';
import { formatTypeOfMoney } from '../../utils/formatTypeOfMoney';

const Cart = () => {
    const { cart } = useSelector((state: IRootState) => state.shop);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Cart'));
    }, []);

    async function deleteOrderCall(id: number) {
        dispatch(deleteOrderForCart(id));
        useNotify({ title: 'Đã xóa thành công', status: 'success' });
    }

    function totalMoney(arr: any[]) {
        let total = 0;
        arr.forEach((element) => {
            total += element.price * element.count;
        });
        return formatTypeOfMoney(Number(total));
    }

    return (
        <div>
            <hr />
            <BreakCrum a="Trang chủ" b="Giỏ hàng" />
            <hr />
            <div className="wrapper">
                <div>
                    <TitleBar>Giỏ hàng của bạn</TitleBar>
                    <div>
                        <table className="grid_custom">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Size</th>
                                    <th>Color</th>
                                    <th>Count</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.length > 0 ? (
                                    cart?.map((e, index) => {
                                        const { name, size, count, price, color } = e || {};

                                        return (
                                            <tr key={index}>
                                                <td>{name}</td>
                                                <td>{size}</td>
                                                <td className="input-color">
                                                    <input type="color" name="" id="" disabled value={getColorByInputNumber(color)} />
                                                </td>
                                                <td>{count}</td>
                                                <td>{formatTypeOfMoney(price)}</td>
                                                <td>
                                                    <a
                                                        onClick={() => {
                                                            deleteOrderCall(e?.id);
                                                        }}
                                                        className="cursor-pointer w-max h-max z-200 "
                                                    >
                                                        <svg
                                                            className="h-8 w-8 text-red-500"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            stroke-width="2"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" /> <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" />
                                                        </svg>
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <div>Bạn không có đơn hàng nào</div>
                                )}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="font-bold font-medium">Tổng tiền :</td>
                                    <td></td>
                                    <td>{totalMoney(cart)} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <TitleBar>Thông tin giao hàng</TitleBar>
                    <FormInfo setIsOpen={setIsOpen} rowData={cart} />
                </div>
            </div>

            <DialogOrderSuccess isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Cart;

export function getColorByInputNumber(value: number) {
    switch (value) {
        case 1:
            return '#D02E2E';
        case 2:
            return '#EDB614';
        case 3:
            return '#439D47';
        case 4:
            return '#3F51B5';

        default:
            return '#333';
    }
}
