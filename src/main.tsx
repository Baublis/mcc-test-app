import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from "./Components/App.tsx";

const htmlElement = document.getElementById('root');

htmlElement &&
createRoot(htmlElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
