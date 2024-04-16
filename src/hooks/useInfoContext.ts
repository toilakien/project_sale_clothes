import { useContext } from 'react';
import { AuthContext } from '../providers/auth-context';

const useInfoContext = () => {
    const { isLoading, logger, login, logout } = useContext(AuthContext);
    return { isLoading, logger, login, logout };
};
export default useInfoContext;
