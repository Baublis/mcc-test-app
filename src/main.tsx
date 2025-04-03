import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from "./Components/App";

const htmlElement = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
htmlElement &&
createRoot(htmlElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);