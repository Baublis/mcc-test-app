import {FC} from "react";

import "./style.css";
import Node from "../Node";
import useNodesStore from "../../Hooks/UseNodesStore.ts";

const Tree: FC = () => {

    const { state } = useNodesStore();

    return (
        <div className="content-container">
            {state.nodes &&
                state.nodes.map((node) => (
                    <Node
                        label={node.label}
                        level={node.level}
                        id={1}
                        parentId={1}
                        selected={false}
                    >
                    </Node>
                ))}
        </div>
    )
};

export default Tree;