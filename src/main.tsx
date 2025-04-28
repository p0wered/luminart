import './index.css'
import './media.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import {createRoot} from 'react-dom/client'
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
