import {FC, MouseEventHandler, useState} from "react";

import {NodeModel} from "../Models/Node/NodeModel";
import Layout from "./Layout";
import Menu from "./Menu";
import Page from "./Page";
import Tree from "./Tree";
import Button from "./Button";

import "./style.css";

const App: FC = () => {

    const [ data, setData ] = useState<NodeModel[]>([]);

    const handleAdd: MouseEventHandler<HTMLButtonElement> = () => {
        const newElement = new NodeModel(
            data.length,
            0,
            data.length,
            "Node " + data.length,
            false
        )
        setData([...data, newElement]);
    } ;

    const handleRemove: MouseEventHandler<HTMLButtonElement> = () => {
        const newData = data.filter(node => node.id !== data.length - 1);
        setData(newData);
    } ;

    const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
        setData([]);
    } ;

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
                    data={data}
                />
            </Page>
        </Layout>
    );
};

export default App;