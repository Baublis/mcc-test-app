import {FC} from "react";

import Node from "../Node";
import {NodeModel} from "../../Models/Node/NodeModel";

import "./style.css";

type Props = { data: NodeModel[] };

const Tree: FC<Props> = ({ data }) => {

    return (
        <div className="tree-container">
            {data &&
                data.map((node) =>
                (
                    <Node
                        label={node.label}
                        level={node.level}
                        id={1}
                        parentId={1}
                        selected={false}
                    >
                    </Node>
                ))
            }
        </div>
    )
};

export default Tree;