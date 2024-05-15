import { useState } from 'react';

const OrderHistory = () => {
    const [orderHistory, setOrderHistory] = useState<any>([]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Tên đơn hàng</th>
                        <th>Giá tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {orderHistory &&
                        orderHistory.map((e: any, index: number) => {
                            const { name } = e?.attributes || {};
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{e.id}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
