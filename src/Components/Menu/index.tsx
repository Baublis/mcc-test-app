import {FC, MouseEventHandler} from "react";

import {NodeModel} from "../../Models/Node/NodeModel";

import "./style.css";

type Props = { data: NodeModel[]; setData: (items: NodeModel[]) => void };

const Menu: FC<Props> = ({ data, setData }) => {

    const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
        const newElement = new NodeModel(
            data.length,
            0,
            data.length,
            "Node " + data.length,
            false
        )
        setData([...data, newElement]);
    } ;

    const handleRemove: MouseEventHandler<HTMLButtonElement> = () => {
        const newData = data.filter(node => node.id !== data.length - 1);
        setData(newData);
    } ;

    const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
        setData([]);
    } ;

    return (
        <div className="menu-container">
            <div className="menu-items-container">
                <button
                    className="menu-item"
                    onClick={handleAdd}
                >
                    Add
                </button>
                <button
                    className="menu-item"
                    onClick={handleRemove}
                >
                    Remove
                </button>
                <button
                    className="menu-item"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    )
};

export default Menu;