import {FC} from "react";

import {NodeModel} from "../../Models/Node/NodeModel";

import "./style.css";

type Props = {
    node: NodeModel;
    selectedNode: NodeModel | undefined;
    select: (NodeModel: NodeModel | undefined) => void
};

const Node: FC<Props> = ({ node, selectedNode, select}) => {
    const handleSelect = () => {
        selectedNode?.id === node.id
            ? select(undefined)
            : select(node);
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