import {FC} from "react";

import "./style.css";

const Menu: FC = () => {
    return (
        <div className="menu-container">
            <div className="menu-items">
                <div className="menu-item">
                    Add
                </div>
                <div className="menu-item">
                    Remove
                </div>
                <div className="menu-item">
                    Edit
                </div>
                <div className="menu-item">
                    Reset
                </div>
            </div>
        </div>
    )
};

export default Menu;