import React, { ReactNode } from 'react';
import { MdOutlinePlace } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import BreakCrum from '../../components/BreakCrum';
import { useFormik } from 'formik';
import { dispatch } from '../../store';
import { postFeedbackCall } from '../../store/shop';
import { useNotify } from '../../hooks/useNoti';
import { useNavigate } from 'react-router-dom';

type AddressProps = {
    children?: ReactNode;
    title?: string;
    des?: string;
};

const AddressItem = ({ children, title, des }: AddressProps) => {
    return (
        <div className="flex items-center gap-4">
            <div>{children}</div>
            <div>
                <b className="text-xl">{title}</b>
                <p className="w-[200px]">{des}</p>
            </div>
        </div>
    );
};

const Contact = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            content: '',
        },
        onSubmit: (values) => {
            postFeedbackCall({
                params: { ...values },
                callback: (res: any) => {
                    if (res && res?.data !== null) {
                        useNotify({ title: 'Cảm ơn bạn đã feedback !', status: 'success' });
                        clear();
                    }
                },
            });
        },
    });
    const { handleBlur, handleChange, handleSubmit, resetForm, values } = formik;
    function clear() {
        resetForm();
        navigate('/home');
    }
    return (
        <div className="w-full">
            <hr />
            <BreakCrum a="Trang chủ" b="Liên hệ" />
            <hr />
            <div className="flex mt-4 ">
                <div className="w-full">
                    <div>
                        <h1 className="text-2xl " style={{ fontWeight: 300 }}>
                            Gửi thắc mắc cho chúng tôi
                        </h1>
                        <p style={{ fontWeight: 300 }}>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
                        <form onSubmit={handleSubmit}>
                            <input className="form-input mt-2" value={values.name} onBlur={handleBlur} onChange={handleChange} name="name" type="text" placeholder="Tên của bạn" />
                            <input className="form-input mt-2" value={values.email} onBlur={handleBlur} onChange={handleChange} name="email" type="email" placeholder="Email của bạn" />
                            <input
                                className="form-input mt-2"
                                value={values.phoneNumber}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="phoneNumber"
                                type="tel"
                                placeholder="Số điện thoại của bạn"
                            />
                            <input className="form-input mt-2" value={values.content} onBlur={handleBlur} onChange={handleChange} name="content" type="text" placeholder="Nội dung" />
                            <button type="submit" className="button-style-container w-[100px] mt-2">
                                Gửi
                            </button>
                        </form>
                    </div>
                    <section className="section">
                        <div className="container">
                            <header className="section__intro">
                                <h4>Tại sao bạn chọn chúng tôi?</h4>
                            </header>

                            <ul className="shop-data-items">
                                <li>
                                    <i className="icon-shipping"></i>
                                    <div className="data-item__content">
                                        <h4>Miễn phí vẩn chuyển</h4>
                                        <p>Tất cả các giao dịch mua trên 5 triệu đều đủ điều kiện để được giao hàng miễn phí.</p>
                                    </div>
                                </li>

                                <li>
                                    <i className="icon-payment"></i>
                                    <div className="data-item__content">
                                        <h4>Thanh toán dễ dàng</h4>
                                        <p>Tất cả các khoản thanh toán được xử lý ngay lập tức qua một giao thức thanh toán an toàn.</p>
                                    </div>
                                </li>

                                <li>
                                    <i className="icon-cash"></i>
                                    <div className="data-item__content">
                                        <h4>Đảm bảo hoàn lại tiền</h4>
                                        <p>Nếu một mặt hàng đến nơi bị hỏng hoặc bạn đã đổi ý, bạn có thể gửi nó quay lại để được hoàn lại đầy đủ.</p>
                                    </div>
                                </li>

                                <li>
                                    <i className="icon-materials"></i>
                                    <div className="data-item__content">
                                        <h4>Chất lượng tốt nhất</h4>
                                        <p>Được thiết kế để bền lâu, mỗi đôi giày của chúng tôi đều được chế tác bằng những vật liệu tốt nhất.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;
