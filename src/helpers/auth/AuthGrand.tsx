import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInfoContext from '../../hooks/useInfoContext';

export const AuthGrand = ({ children }: { children: any }) => {
    const navigate = useNavigate();
    const { isLoading, logger } = useInfoContext();

    React.useEffect(() => {
        if (!logger) {
            navigate('/login');
        }
    }, [logger]);
    return children;
};
