import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useInfoContext from '../../hooks/useInfoContext';
import { IRootState } from '../../store';
import Dropdown from '../Dropdown';

const HeaderUser = () => {
    const { cart } = useSelector((state: IRootState) => state.shop);
    const [count, setCount] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        setCount(cart.length);
    }, [cart]);

    const { logout } = useInfoContext();
    const user = JSON?.parse?.(localStorage?.getItem('user') || '');
    const { username, email } = user || {};

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const listHeaderNav = [
        {
            link: 'home',
            label: 'Trang chủ',
        },
        {
            link: 'products',
            label: 'Sản phẩm',
        },
        {
            link: 'blog',
            label: 'Blog',
        },
        {
            link: 'introduce',
            label: 'Giới thiệu',
        },
        {
            link: 'contact',
            label: 'Liên hệ',
        },
    ];

    return (
        <div className="flex justify-between py-8 px-5 items-center">
            <h1 className="text-5xl font-bold hover:text-[#fbde59]">Gucci</h1>
            <ul className="flex gap-8 ">
                {listHeaderNav.map((e) => {
                    return (
                        <li>
                            <Link className="text-xl font-medium m-0 text-stone-950 hover:text-[#fbde59]" to={`/${e.link}`}>
                                {e.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="flex gap-4 items-center">
                <Link className="relative" to="/order">
                    <IoCartOutline style={{ fontSize: '2rem' }} />
                    <span className="px-[7px] border-2 border-white rounded-full absolute top-[-10px] left-[20px] bg-slate-200 z-[999]">{count}</span>
                </Link>

                <div className="dropdown shrink-0 flex">
                    <Dropdown
                        offset={[0, 8]}
                        placement="bottom-end"
                        btnClassName="relative group block"
                        button={<img className="w-8 h-8 rounded-full object-cover saturate-50 group-hover:saturate-100" src="/assets/images/user-profile.jpeg" alt="userProfile" />}
                    >
                        <ul className="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                            <li>
                                <div className="flex items-center px-4 py-4">
                                    <img className="rounded-md w-10 h-10 object-cover" src="/assets/images/user-profile.jpeg" alt="userProfile" />
                                    <div className="ltr:pl-4 rtl:pr-4">
                                        <h4 className="text-base">
                                            {username || ''}
                                            <span className="text-xs bg-success-light rounded text-success px-1 ltr:ml-2 rtl:ml-2">Pro</span>
                                        </h4>
                                        <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                                            {email || ''}
                                        </button>
                                    </div>
                                </div>
                            </li>

                            <li className="border-t border-white-light dark:border-white-light/10">
                                <button onClick={handleLogout} className="text-danger !py-3">
                                    <svg className="ltr:mr-2 rtl:ml-2 rotate-90" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            opacity="0.5"
                                            d="M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                        <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default HeaderUser;
