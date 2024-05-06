import React, { ChangeEventHandler, useImperativeHandle, useState } from 'react';

type ICheckBoxCustom = {
    children?: any;
    onChange?: ChangeEventHandler<any>;
    name: string;
    refItem: (value: boolean) => void;
    handleClick: any;
};

const CheckboxCustom = React.forwardRef(({ children, onChange, name, refItem, handleClick }: ICheckBoxCustom, ref: any) => {
    const [isDisplay, setIsDisplay] = useState<boolean>(false);
    useImperativeHandle(ref, () => {
        return {
            clickCheck: () => {
                ref.current.checked = !ref.current.checked;
                setIsDisplay(!ref.current.checked);
                refItem(!ref.current.checked);
            },
        };
    });
    return (
        <div className="data-check">
            <input type="checkbox" ref={ref} name={name} onChange={onChange} />
            <label onClick={handleClick}>{children}</label>
            {isDisplay && <div className="ticket"></div>}
        </div>
    );
});

export default CheckboxCustom;
