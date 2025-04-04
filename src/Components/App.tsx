import {FC, MouseEventHandler, useState} from "react";

import {NodeModel} from "../Models/Node/NodeModel";
import Layout from "./Layout";
import Menu from "./Menu";
import Page from "./Page";
import Tree from "./Tree";
import Button from "./Button";

import "./style.css";

const App: FC = () => {
    const [count, setCount] = useState<number>(1);

    const [selectedNode, select] = useState<NodeModel | null>(null);

    const [nodes, setNodes] = useState<NodeModel[]>([]);

    const getAllChildNodes = (parentNodes: NodeModel[]) => {
        let childNodes:NodeModel[] = [];
        for (let index = 0; index < parentNodes.length; index++) {
            if (parentNodes[index].childNodes.length > 0) {
                childNodes = getAllChildNodes(parentNodes[index].childNodes);
            }
        }
        return childNodes.concat(parentNodes);
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
        const childNodes = getAllChildNodes([selectedNode]);
        const newData = nodes.filter(n => !childNodes.find(chn => chn.id === n.id));
        setNodes(newData);
        select(null);
    };

    const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
        setNodes([]);
        select(null);
        setCount(0);
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
                    selectedNode={selectedNode}
                    select={select}
                />
            </Page>
        </Layout>
    );
};

export default App;