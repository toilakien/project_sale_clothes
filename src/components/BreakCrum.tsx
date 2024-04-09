import React from 'react';
import { Link } from 'react-router-dom';

const BreakCrum = ({ a, b }: any) => {
    return (
        <div className="w-full flex ">
            <li className="text-[#111] list-none p-2">
                <Link className="text-[blue]" to="/home">
                    {a}
                </Link>
            </li>
            <li className="text-[#111] list-none p-2">{`/`}</li>
            <li className="text-[#111] list-none p-2">{b}</li>
        </div>
    );
};

export default BreakCrum;
