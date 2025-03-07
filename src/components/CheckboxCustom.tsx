import React, { ChangeEventHandler, useEffect, useState } from 'react';

type ICheckBoxCustom = {
    children?: any;
    onChange?: ChangeEventHandler<any>;
    name: string;
    refItem: (value: boolean) => void;
};

const CheckboxCustom = React.forwardRef(({ children, onChange, name, refItem }: ICheckBoxCustom, ref: any) => {
    const [isDisplay, setIsDisplay] = useState<boolean>(false);
    useEffect(() => {
        if (ref.current) {
            ref.current.checked = true;
        }
    }, []);
    return (
        <div className="data-check">
            <input type="checkbox" ref={ref} name={name} onChange={onChange} />
            <label
                onClick={() => {
                    ref.current.checked = !ref.current.checked;
                    setIsDisplay(!ref.current.checked);
                    refItem(!ref.current.checked);
                }}
            >
                {children}
            </label>
            {isDisplay && <div className="ticket"></div>}
        </div>
    );
});

export default CheckboxCustom;
