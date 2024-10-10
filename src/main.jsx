import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter
import App from './App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter> {/* Enveloppe toute l'application avec BrowserRouter */}
            <App />
        </BrowserRouter>
    </StrictMode>
);
