import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useFormik } from 'formik';
import useInfoContext from '../../hooks/useInfoContext';
const LoginBoxed = () => {
    const { isLoading, logger, login } = useInfoContext();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Login Boxed'));
    });
    const navigate = useNavigate();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark' ? true : false;

    const submitForm = () => {
        // navigate('/');
    };

    const formikProps = useFormik({
        initialValues: {
            identifier: '',
            password: '',
        },
        onSubmit: async (values: any) => {
            await login(values);
        },
    });

    const { handleBlur, handleChange, handleSubmit } = formikProps;
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/map.svg')] dark:bg-[url('/assets/images/map-dark.svg')]">
            <div className="panel sm:w-[480px] m-6 max-w-lg w-full">
                <h2 className="font-bold text-2xl mb-3">Sign In</h2>
                <p className="mb-7">Enter your email and password to login</p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="identifier">Email</label>
                        <input name="identifier" onChange={handleChange} onBlur={handleBlur} id="identifier" type="email" className="form-input" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" onChange={handleChange} onBlur={handleBlur} id="password" type="password" className="form-input" placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        SIGN IN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginBoxed;
