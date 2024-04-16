import React, { ReactNode } from 'react';
type Props = {
    children?: ReactNode;
};
const GridBase = ({ children }: Props) => {
    return <div className="flex gap-8 flex-wrap w-full">{children}</div>;
};

export default GridBase;
