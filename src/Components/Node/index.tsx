import {FC} from "react";

import {NodeModel} from "../../Models/Node/NodeModel.ts";

import "./style.css";

const Node: FC<NodeModel> = ({
    label,
    //level
}) => {

    return (
        <div
            className="node-container"
            //style={{"padding-left": level * 30}}
        >
            {label}
        </div>
    )
};


export default Node;