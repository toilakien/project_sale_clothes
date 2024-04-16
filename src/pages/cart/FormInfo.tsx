import { useFormik } from 'formik';
import * as Yup from 'yup';
import { postOrder } from '../../services';
import { resetCart } from '../../store/shop';
import { useDispatch } from 'react-redux';
const FormInfo = ({ rowData, setIsOpen }: any) => {
    const dispatch = useDispatch();
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const validationSchema = Yup.object().shape({
        receiver: Yup.string().required('Vui lòng không để trống trường này !'),
        address: Yup.string().required('Vui lòng không để trống trường này !'),
        phoneNumber: Yup.string().required('Vui lòng không để trống trường này !').matches(regexPhoneNumber, 'Không phải số điện thoại '),
    });
    const formik = useFormik({
        initialValues: {
            receiver: '',
            address: '',
            phoneNumber: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const params = {
                data: {
                    ...values,
                    products: rowData,
                },
            };

            postOrderAscb(params);
        },
    });

    async function postOrderAscb(params: any) {
        const reponse = await postOrder(params);
        if (reponse) {
            setIsOpen(true);
            dispatch(resetCart([]));
        }
    }

    const { handleSubmit, handleChange, handleBlur, errors } = formik;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Nhập địa chỉ nhận hàng :</h1>
                <input name="address" onChange={handleChange} onBlur={handleBlur} type="text" className="form-input w-[400px]" />
                {errors && <span style={{ color: 'red', display: 'block' }}>{errors.address}</span>}
                <h1>Tên người nhận :</h1>
                <input name="receiver" onChange={handleChange} onBlur={handleBlur} type="text" className="form-input w-[400px]" />
                {errors && <span style={{ color: 'red', display: 'block' }}>{errors.receiver}</span>}

                <h1>Số điện thoại :</h1>
                <input name="phoneNumber" onChange={handleChange} onBlur={handleBlur} type="text" className="form-input w-[400px]" />
                {errors && <span style={{ color: 'red', display: 'block' }}>{errors.phoneNumber}</span>}
            </div>
            <div className="mt-2">
                <button className="button-style-container w-[100px]">Giao hàng</button>
            </div>
        </form>
    );
};

export default FormInfo;
