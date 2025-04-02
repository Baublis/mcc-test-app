import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import store from './Store/index.ts';
import App from "./Components/App.tsx";
import StoreProvider from "./Providers/StoreProvider";

const htmlElement = document.getElementById('root');

htmlElement &&
createRoot(htmlElement).render(
    <StrictMode>
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    </StrictMode>,
);
