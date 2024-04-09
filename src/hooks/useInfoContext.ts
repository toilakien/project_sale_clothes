import { useContext } from 'react';
import { AuthContext } from '../providers/auth-context';

const useInfoContext = () => {
    const { isLoading, logger, user, login, logout } = useContext(AuthContext);
    return { isLoading, logger, user, login, logout };
};
export default useInfoContext;
