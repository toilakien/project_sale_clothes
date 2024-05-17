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
                <div className="w-1/2">
                    <div>
                        <h1 className="text-2xl font-bold">Thông tin liên hệ</h1>
                        <div className="flex wrap gap-8 justify-between">
                            <AddressItem title="Địa chỉ" des="Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.">
                                <MdOutlinePlace className="text-5xl" />
                            </AddressItem>
                            <AddressItem title="Email" des="Gucci@gmail.com">
                                <AiOutlineMail className="text-5xl" />
                            </AddressItem>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Gửi thắc mắc cho chúng tôi</h1>
                        <p>Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</p>
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
                </div>
                <div className="w-1/2"></div>
            </div>
        </div>
    );
};

export default Contact;
