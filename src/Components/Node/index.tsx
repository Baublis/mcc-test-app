import {FC} from "react";

import {NodeModelEasy} from "../../Models/Node/NodeModelEasy.ts";

import "./style.css";

const Node: FC<NodeModelEasy> = ({
    label
}) => {

    return (
        <div className="node-container">
            {label}
        </div>
    )
};


export default Node;