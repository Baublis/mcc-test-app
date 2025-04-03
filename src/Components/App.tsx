import {FC, MouseEventHandler, useState} from "react";

import {NodeModel} from "../Models/Node/NodeModel";
import Layout from "./Layout";
import Menu from "./Menu";
import Page from "./Page";
import Tree from "./Tree";
import Button from "./Button";

import "./style.css";

const App: FC = () => {
    const [count, setCount] = useState<number>(0);
    const [node, selectNode] = useState<NodeModel>();
    const [nodes, setNodes] = useState<NodeModel[]>([]);

    const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
        setCount(count + 1);
        const newElement = new NodeModel(
            count,
            0,
            0,
            "Node " + count,
            false
        )
        setNodes([...nodes, newElement]);
    };
    const handleRemove: MouseEventHandler<HTMLButtonElement> = () => {
        if (node === undefined) return;
        const newData = nodes.filter(a => a.id !== node.id);
        setNodes(newData);
    };
    const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
        setNodes([]);
        selectNode(undefined)
    };

    return (
        <Layout>
            <Menu>
                <Button
                    label={"Add"}
                    onClick={handleAdd}
                />
                <Button
                    label={"Remove"}
                    onClick={handleRemove}
                />
                <Button
                    label={"Reset"}
                    onClick={handleReset}
                />
            </Menu>
            <Page>
                <Tree
                    nodes={nodes}
                    selectedNode={node}
                    select={selectNode}
                />
            </Page>
        </Layout>
    );
};

export default App;