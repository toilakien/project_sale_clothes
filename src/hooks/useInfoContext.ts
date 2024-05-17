import { useContext } from 'react';
import { AuthContext } from '../providers/auth-context';

const useInfoContext = () => {
    const { isLoading, logger, login, logout, register } = useContext(AuthContext);
    return { isLoading, logger, login, logout, register };
};
export default useInfoContext;
