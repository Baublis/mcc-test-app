import {FC, MouseEventHandler} from "react";

import "./style.css";

type Props = {
    onClick : MouseEventHandler<HTMLButtonElement>;
    label: string
};

const Button: FC<Props> = ({onClick, label}) => {
    return (
        <div className={"button-container"}>
            <button
                className={"button"}
                onClick={onClick}
            >
                {label}
            </button>
        </div>

    );
};

export default Button;