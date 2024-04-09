import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import Loading from '../Loading';
import FooterUser from './FooterUser';
import HeaderUser from './HeaderUser';

type Props = {
    children?: ReactNode;
};
const LayoutUsers = ({ children }: Props) => {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    return (
        <div className="relative inline-block w-full">
            <div className="w-[80%] mx-auto">
                {themeConfig.isLoading && <Loading />}
                <HeaderUser />
                <div className="w-[100%] ">{children}</div>
                <hr style={{ marginTop: '5px' }} />
                <FooterUser />
            </div>
        </div>
    );
};

export default LayoutUsers;
