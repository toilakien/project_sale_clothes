import { ReactNode, createContext, useEffect, useState } from 'react';
import useLocalstorage from '../hooks/useLocalstorage';
import axiosServices from '../utils/axiosConfig';

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

const setUser = async (user?: UserProp | null) => {
    if (user) {
        await localStorage.setItem('user', JSON.stringify(user));
    } else {
        localStorage.removeItem('user');
    }
};

const AuthContext = createContext(INITAL_STATE);
const AuthProvider = ({ children }: Props) => {
    // const [user, setUser] = useState<UserProp>(null);
    const [logger, setLogger] = useState<boolean>(false);
    const { items } = useLocalstorage();
    useEffect(() => {
        if (String(items).length > 2) {
            setSession(items);
            setLogger(true);
        }
    }, [items]);

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
    return <AuthContext.Provider value={{ isLoading: false, login, logout, logger }}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthProvider };
