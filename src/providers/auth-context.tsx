import { ReactNode, createContext, useEffect, useState } from 'react';
import useLocalstorage from '../hooks/useLocalstorage';
import axiosServices from '../utils/axiosConfig';
import { getMe } from '../services';

type Props = {
    children: ReactNode;
};
type UserProp = {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
} | null;

type IInitState = {
    user: UserProp;
    isLoading: boolean;
    login?: any;
    logout?: any;
    logger: boolean;
};
type IPostLogin = {
    identifier: string;
    password: string;
};
const INITAL_STATE: IInitState = {
    user: null,
    isLoading: false,
    logger: false,
};

const setSession = async (serviceToken?: string | null) => {
    if (serviceToken) {
        await localStorage.setItem('serviceToken', JSON.stringify(serviceToken));

        axiosServices.defaults.headers.common.Authorization = await `Bearer ${serviceToken}`;
    } else {
        localStorage.removeItem('serviceToken');
        delete axiosServices.defaults.headers.common.Authorization;
    }
};

const AuthContext = createContext(INITAL_STATE);
const AuthProvider = ({ children }: Props) => {
    const { items } = useLocalstorage();
    useEffect(() => {
        setSession(items);
        if (String(items).length > 0) setLogger(true);
        getMeApi();
    }, [items]);
    async function getMeApi() {
        const response = await getMe();
        console.log(response);
    }
    const [user, setUser] = useState<UserProp>(null);
    const [logger, setLogger] = useState<boolean>(false);
    const login = async ({ identifier, password }: IPostLogin) => {
        try {
            const response = await axiosServices.post('auth/local', {
                identifier,
                password,
            });

            const { jwt, user } = response?.data;

            setSession(jwt);
            setUser(user);
            setLogger(true);
        } catch (error) {}
    };
    const logout = () => {
        setLogger(false);
        setSession(null);
        setUser(null);
    };
    return <AuthContext.Provider value={{ isLoading: false, user, login, logout, logger }}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
