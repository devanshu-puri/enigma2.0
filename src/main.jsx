import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 1. Import BrowserRouter from the library
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap your entire <App /> component with <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
