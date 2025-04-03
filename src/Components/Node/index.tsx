import {FC} from "react";

import {NodeModel} from "../../Models/Node/NodeModel";

import "./style.css";

type Props = {
    node: NodeModel;
    selectedNode: NodeModel | undefined;
    select: (NodeModel: NodeModel) => void
};

const Node: FC<Props> = ({ node, selectedNode, select}) => {
    const handleSelect = () => {
        select(node);
        node.selected = true;
    } ;

    return (
        <div
            className="node-container"
            onClick={handleSelect}
        >
            <div
                className={selectedNode?.id === node.id ? "node" : ""}
            >
                {node.label}
            </div>
        </div>
    );
};

export default Node;