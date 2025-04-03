import { FC, PropsWithChildren } from 'react';

import "./style.css";

const Page: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="page-container">
            {children}
        </div>
    );
};

export default Page;