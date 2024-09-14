import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode makes the code render twice but does help with additional info. Only on dev env not production
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
