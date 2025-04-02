import {FC} from "react";

import Menu from "./Menu";
import Header from "./Header";

import "./style.css"
import Content from "./Content";

const App: FC = () => (
    <div id="app-main-layout" className="app-window-container">
        <div className="app-window">
            <div className="main-container">
                <Menu/>
                <div className="main-content">
                    <Header/>
                    <Content/>
                </div>
            </div>
        </div>
    </div>
);

export default App;