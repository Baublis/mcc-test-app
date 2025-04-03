import {FC, useState} from "react";

import {NodeModel} from "../Models/Node/NodeModel";
import Layout from "./Layout";
import Menu from "./Menu";
import Page from "./Page";
import Tree from "./Tree";

import "./style.css";

const App: FC = () => {

    const [ data, setData ] = useState<NodeModel[]>([]);

    return (
        <Layout>
            <Menu
                data={data}
                setData={setData}
            />
            <Page>
                <Tree
                    data={data}
                />
            </Page>
        </Layout>
    );
};

export default App;