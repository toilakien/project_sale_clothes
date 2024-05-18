import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useFormik } from 'formik';
import useInfoContext from '../../hooks/useInfoContext';
import Logo from '../../components/Logo';
const Register = () => {
    const { isLoading, logger, register } = useInfoContext();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Register'));
    });

    const navigate = useNavigate();
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark' ? true : false;

    const submitForm = () => {
        // navigate('/');
    };

    const formikProps = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: async (values: any) => {
            await register(values);
            resetForm();
        },
    });

    const { handleBlur, handleChange, handleSubmit, resetForm, values } = formikProps;
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/map.svg')] dark:bg-[url('/assets/images/map-dark.svg')]">
            <div className="panel sm:w-[480px] m-6 max-w-lg w-full">
                <Logo />
                <h2 className="font-bold text-2xl mb-3 text-center">Register</h2>
                <p className="mb-7 text-center">Enter complete information into the form to create an account </p>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">UserName</label>
                        <input value={values.username} name="username" onChange={handleChange} onBlur={handleBlur} id="username" className="form-input" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} id="email" type="email" className="form-input" placeholder="Enter Email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} id="password" type="password" className="form-input" placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Create Account
                    </button>

                    <button onClick={() => navigate('/login')} type="submit" className="btn btn-success w-full">
                        Login now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
