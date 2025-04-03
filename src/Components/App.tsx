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

    const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
        setCount(count + 1);
        const newNode = new NodeModel(
            count,
            "Node " + count,
            selectedNode
        )

        let lnodes: NodeModel[] = [];
        let pnodes: NodeModel[] = [];
        nodes.forEach(function (a) {
            if (selectedNode === null || selectedNode?.id >= a.id){
                lnodes = [...lnodes, a];
            }
            else {
                pnodes = [...pnodes, a];
            }

        })
        //debugger;
        setNodes(nodes.slice(nodes.length).concat(lnodes,[newNode],pnodes));
    };
    const handleRemove: MouseEventHandler<HTMLButtonElement> = () => {
        if (selectedNode === undefined) return;
        const newData = nodes.filter(a => a.id !== selectedNode?.id);
        setNodes(newData);
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