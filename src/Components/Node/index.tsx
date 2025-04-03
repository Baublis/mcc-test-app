import {FC} from "react";

import {NodeModel} from "../../Models/Node/NodeModel";

import "./style.css";

type Props = {
    node: NodeModel;
    selectedNode: NodeModel | null;
    select: (NodeModel: NodeModel | null) => void
};

const Node: FC<Props> = ({ node, selectedNode, select}) => {
    const handleSelect = () => {
        if (selectedNode?.id === node.id) {
            select(null);
        } else {
            select(node);
        }
    };

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