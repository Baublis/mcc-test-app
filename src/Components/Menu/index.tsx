import {FC, PropsWithChildren} from "react";

import "./style.css";

const Menu: FC<PropsWithChildren> = ( { children}) => {
    return (
        <div className="menu-container">
            <div className="menu-items-container">
                {children}
            </div>
        </div>
    )
};

export default Menu;