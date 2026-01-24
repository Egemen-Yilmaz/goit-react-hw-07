import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* TODO: Wrap <App /> with <Provider store={store}> once redux is ready. */}
    <App />
  </React.StrictMode>
);
