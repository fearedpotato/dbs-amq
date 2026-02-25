import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const container = document.getElementById('game-root');
if (container) {
    createRoot(container).render(<App/>);
}
