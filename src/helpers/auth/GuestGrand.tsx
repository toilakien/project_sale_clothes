import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInfoContext from '../../hooks/useInfoContext';

export const GuestGrand = ({ children }: { children: any }) => {
    const navigate = useNavigate();
    const { isLoading, logger } = useInfoContext();

    React.useEffect(() => {
        if (logger) {
            navigate('/home');
        }
    }, [logger]);
    return children;
};
