import { useFormik } from 'formik';
import { setLoading } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { postOrderHistory } from '../../services';

const FormInfo = ({ rowData, setIsOpen }: any) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            receiver: '',
            address: '',
            phoneNumber: '',
        },
        onSubmit: (values) => {
            const params = {
                data: {
                    ...values,
                    orders: rowData,
                },
            };
            postOrderHistories(params);
        },
    });

    async function postOrderHistories(params: any) {
        dispatch(setLoading(true));
        const response = await postOrderHistory(params);

        if (response) {
            dispatch(setLoading(false));
            setIsOpen(true);
        }
    }

    const { handleSubmit, handleChange, handleBlur } = formik;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Nhập địa chỉ nhận hàng :</h1>
                <input name="address" onChange={handleChange} onBlur={handleBlur} type="text" className="form-input w-[400px]" />
                <h1>Tên người nhận :</h1>
                <input name="receiver" onChange={handleChange} onBlur={handleBlur} type="text" className="form-input w-[400px]" />
                <h1>Số điện thoại :</h1>
                <input name="phoneNumber" onChange={handleChange} onBlur={handleBlur} type="text" className="form-input w-[400px]" />
            </div>
            <div className="mt-2">
                <button className="button-style-container w-[100px]">Giao hàng</button>
            </div>
        </form>
    );
};

export default FormInfo;
