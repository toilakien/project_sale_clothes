import { useEffect, useState } from 'react';

const useLocalstorage = () => {
    const [items, setItems] = useState<any>('');

    useEffect(() => {
        const items = localStorage.getItem('serviceToken');
        if (items) setItems(JSON.parse(items));
    }, [items]);
    return { items };
};
export default useLocalstorage;
