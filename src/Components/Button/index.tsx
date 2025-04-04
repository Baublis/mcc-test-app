import {FC, MouseEventHandler} from "react";

import "./style.css";

type Props = {
    onClick : MouseEventHandler<HTMLButtonElement>;
    label: string,
    disabled: boolean
};

const Button: FC<Props> = (
    {
        onClick,
        label,
        disabled
    }
) => {

    return (
        <div className={"button-container"}>
            <button
                className={"button"}
                disabled={disabled}
                onClick={onClick}
            >
                {label}
            </button>
        </div>

    );
};

export default Button;