import {FC, MouseEventHandler, useState} from "react";

import {NodeModel} from "../Models/Node/NodeModel";
import Layout from "./Layout";
import Menu from "./Menu";
import Page from "./Page";
import Tree from "./Tree";
import Button from "./Button";

import "./style.css";

const App: FC = () => {
    const [label, setLabel] = useState('');

    const [count, setCount] = useState<number>(1);

    const [selectedNode, select] = useState<NodeModel | null>(null);

    const [editingNode, setEditNode] = useState<NodeModel | null>(null);

    const [nodes, setNodes] = useState<NodeModel[]>([]);

    const getRemoveNodes = (removeNodes: NodeModel[], childNodes:NodeModel[]): void => {
        removeNodes.forEach((node) => {
            if (node.childNodes.length > 0) {
                getRemoveNodes(node.childNodes, childNodes)
            }
        })

        childNodes.push(...removeNodes);
    }

    const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
        setCount(count + 1);

        const newNode = new NodeModel(
            count,
            "Node " + count,
            selectedNode
        );

        if (selectedNode === null) {
            setNodes([...nodes, newNode]);
            return
        } else {
            let index;
            for (index = 0; index < nodes.length; index++) {
                if (nodes[index].id === selectedNode?.id) {
                    break;
                }
            }

            selectedNode.childNodes.push(newNode);
            nodes.splice(index + 1, 0, newNode)
        }
    };

    const handleRemove: MouseEventHandler<HTMLButtonElement> = () => {
        if (selectedNode === null) return;

        const childNodes:NodeModel[] = [];
        getRemoveNodes([selectedNode],childNodes);
        const newData = nodes.filter(n => !childNodes.find(chn => chn.id === n.id));
        setNodes(newData);
        select(null);
    };

    const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
        setNodes([]);
        select(null);
        setCount(0);
        setEditNode(null);
    };

    const handleEdit: MouseEventHandler<HTMLButtonElement> = () => {
        if (selectedNode === null) return;

        setLabel(selectedNode.label);

        selectedNode.input = <input
            className={"node-input"}
            defaultValue={selectedNode.label}
            onChange={e => setLabel(e.target.value)}
        />

        setEditNode(selectedNode);
    };

    const handleSave: MouseEventHandler<HTMLButtonElement> = () => {
        if (selectedNode === null) return;

        selectedNode.label = label;
        setEditNode(null);
    }

    return (
        <Layout>
            <Menu>
                <Button
                    disabled={false}
                    label={"Add"}
                    onClick={handleAdd}
                />
                <Button
                    disabled={selectedNode === null}
                    label={editingNode === null ? "Edit" : "Save"}
                    onClick={editingNode === null ? handleEdit : handleSave}
                />
                <Button
                    disabled={false}
                    label={"Remove"}
                    onClick={handleRemove}
                />
                <Button
                    disabled={false}
                    label={"Reset"}
                    onClick={handleReset}
                />

            </Menu>
            <Page>
                <Tree
                    nodes={nodes}
                    selectedNode={selectedNode}
                    select={select}
                    editingNode={editingNode}
                    setEditNode={setEditNode}
                />
            </Page>
        </Layout>
    );
};

export default App;