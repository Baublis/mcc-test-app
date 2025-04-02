import {FC} from "react";

import "./style.css";
import useNodesStore from "../../Hooks/UseNodesStore.ts";
import {NodeModel} from "../../Models/Node/NodeModel.ts";

const Menu: FC = () => {

    const { state,actions } = useNodesStore()

    return (
        <div className="menu-container">
            <div className="menu-items">
                <div
                    className="menu-item"
                    onClick={() =>
                        {
                            actions.addNode(
                                new NodeModel
                                (
                                    state.nodes.length,
                                    0,
                                    state.nodes.length,
                                    "Node " + state.nodes.length,
                                    false
                                )
                            );
                        }
                    }
                >
                    Add
                </div>
                <div
                    className="menu-item"
                    onClick={() => actions.removeNode(state.nodes.length - 1)}
                >
                    Remove
                </div>
                <div className="menu-item">
                    Edit
                </div>
                <div
                    className="menu-item"
                    onClick={actions.removeAllNodes}
                >
                    Reset
                </div>
            </div>
        </div>
    )
};

export default Menu;