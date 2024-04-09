import React, { useEffect, useState } from 'react';
import TitleBar from '../../components/TitleBar';
import { setLoading, setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import BreakCrum from '../../components/BreakCrum';
import { deleteOrder, getOrder } from '../../services';
import { useNotify } from '../../hooks/useNoti';
import DialogOrderSuccess from '../../components/DialogOrderSuccess';
import FormInfo from './FormInfo';

const Cart = () => {
    const [rowData, setRowData] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Cart'));
        callListCart();
    }, []);
    async function callListCart() {
        const response = await getOrder();
        setRowData(response.data);
    }
    async function deleteOrderCall(id: number) {
        dispatch(setLoading(true));
        const response = await deleteOrder(id);
        if (response) {
            dispatch(setLoading(false));
            useNotify({ title: 'Đã xóa thành công', status: 'success' });
            callListCart();
        }
    }

    function totalMoney(arr: any[]) {
        let total = 0;
        arr.forEach((element) => {
            total += element.attributes.price * element.attributes.count;
        });
        return total;
    }

    return (
        <div>
            <hr />
            <BreakCrum a="Trang chủ" b="Giỏ hàng" />
            <hr />
            <TitleBar>Giỏ hàng của bạn</TitleBar>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Size</th>
                            <th>Color</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowData.length > 0 ? (
                            rowData?.map((e, index) => {
                                const { name, size, count, price, color } = e?.attributes || {};

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{size}</td>
                                        <td>{color}</td>
                                        <td>{count}</td>
                                        <td>{price}</td>
                                        <td>
                                            <a
                                                onClick={() => {
                                                    console.log(e?.id);
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
                            <td>Tổng tiền :</td>
                            <td></td>
                            <td>{totalMoney(rowData)} đ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <TitleBar>Thông tin giao hàng</TitleBar>
            <FormInfo setIsOpen={setIsOpen} rowData={rowData} />
            <DialogOrderSuccess isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Cart;
