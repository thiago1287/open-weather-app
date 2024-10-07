import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './app.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
