import {FC} from "react";

import Menu from "./Menu";
import Header from "./Header";
import Tree from "./Tree";

import "./style.css"


const App: FC = () => (
    <div id="app-main-layout" className="app-window-container">
        <div className="app-window">
            <div className="main-container">
                <Menu/>
                <div className="main-content">
                    <Header/>
                    <Tree/>
                </div>
            </div>
        </div>
    </div>
);

export default App;