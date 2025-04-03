import { FC, PropsWithChildren } from 'react';

import "./style.css";

const Layout: FC<PropsWithChildren> = ({children}) => (
    <div className="app-container">
        <div className="layout-main-container">
            <div className={"layout-header-container"}>
                Tree
            </div>
            <div className="layout-content-container">
                {children}
            </div>
        </div>
    </div>
);

export default Layout;