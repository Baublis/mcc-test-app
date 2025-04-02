import {FC} from "react";

import "./style.css";
import Node from "../Node";

const Tree: FC = () => {
    return (
        <div className="content-container">
            <Node
                label='Node 1'
            ></Node>
            <Node
                label='Node 2'
            ></Node>
            <Node
                label='Node 3'
            ></Node>
        </div>
    )
};

export default Tree;