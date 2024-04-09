import React, { ReactNode } from 'react';
type Props = {
    children?: ReactNode;
};
const TitleBar = ({ children }: Props) => {
    return <div className="w-full p-2 mb-2 font-bold text-2xl">{children}</div>;
};

export default TitleBar;
