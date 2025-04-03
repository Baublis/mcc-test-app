import {FC} from "react";

import Node from "../Node";
import {NodeModel} from "../../Models/Node/NodeModel";

import "./style.css";

type Props = {
    nodes: NodeModel[];
    selectedNode: NodeModel | null;
    select: (NodeModel: NodeModel | null ) => void
};

const Tree: FC<Props> = ({nodes, selectedNode, select}) => {
    return (
        <div className="tree-container">
            {nodes &&
                nodes.map((node) =>
                    (
                        <Node
                            node={node}
                            selectedNode={selectedNode}
                            select={select}
                        >
                        </Node>
                    ))
            }
        </div>
    )
};

export default Tree;